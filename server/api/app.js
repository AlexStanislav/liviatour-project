const express = require('express');
const cors = require('cors');
const app = express();
const postgresql = require('./postgresql');
const multer = require('multer');
const fs = require('fs');

postgresql();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/images', express.static('images'));


const DATE_UTILS = {
    startDate: (dateInput, format = false) => {
        let day = "";
        let month = "";
        let year = "";

        if (dateInput !== "") {
            const date = new Date(dateInput);
            day = String(date.getDate()).padStart(2, "0");
            month = String(date.getMonth() + 1).padStart(2, "0");
            year = String(date.getFullYear()).slice(-2);
        } else {
            day = "01";
            month = "01";
            year = "01";
        }
        if (format === false) {
            return `${day}/${month}/${year}`;
        } else {
            return `${month}/${day}/${year}`;
        }
    },

    endDate: (dateInput, format = false) => {
        let year;
        let month;
        let day;

        if (dateInput !== "") {
            const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
            const givenDateTimestamp = new Date(dateInput).getTime(); // Get the timestamp of the given date
            const sevenDaysLaterTimestamp = givenDateTimestamp + 7 * millisecondsPerDay; // Add 7 days' worth of milliseconds
            const sevenDaysLaterDate = new Date(sevenDaysLaterTimestamp); // Convert the timestamp back to a date

            year = String(sevenDaysLaterDate.getFullYear());
            month = String(sevenDaysLaterDate.getMonth() + 1).padStart(2, "0");
            day = String(sevenDaysLaterDate.getDate()).padStart(2, "0");
        } else {
            year = "01";
            month = "01";
            day = "01";
        }

        if (format === false) {
            return `${day}/${month}/${year}`;
        } else {
            return `${month}/${day}/${year}`;
        }
    },

    dateRanges: (startDate, endDate) => {
        const dates = [];
        const current = new Date(startDate);
        const endDateObj = new Date(endDate);

        while (current <= endDateObj) {
            dates.push(new Date(current));
            current.setDate(current.getDate() + 1);
        }

        return dates;
    }
}

app.get('/offers', async (req, res) => {
    const offers = await process.postgresql.query(`SELECT * FROM offers`);
    const rezervations = await process.postgresql.query(`SELECT * FROM rezervations`);
    res.status(200).json({ offers, rezervations });
})

app.post('/newOffer', async (req, res) => {
    try {
        const { title, description, price, location, rating, details, img, country, duration, available } = req.body;
        const { rows } = process.postgresql.query(`INSERT INTO offers (title, description, price, location, rating, details, img, country, duration, available) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`, [title, description, price, location, rating, details, img, country, duration, available]);
        res.status(200).json(rows);
    } catch (e) {
        res.status(400).json(e);
    }
})

app.delete('/offers/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await process.postgresql.query(`DELETE FROM offers WHERE id = $1`, [id]);
        res.status(200).json({
            message: 'Offer deleted',
        });
    }
    catch (e) {
        res.status(400).json(e);
    }
})

app.put('/offers/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, price, location, rating, details, img, country, duration, available } = req.body;
        await process.postgresql.query(`UPDATE offers SET title = $1, description = $2, price = $3, location = $4, rating = $5, details = $6, img = $7, country = $8, duration = $9, available = $10 WHERE id = $11`, [title, description, price, location, rating, details, img, country, duration, available, id]);
        res.status(200).json({
            message: 'Offer updated',
        })
    } catch (e) {
        res.status(400).json(e);
    }
})


app.get('/rezervations', async (req, res) => {
    const rezervations = await process.postgresql.query(`SELECT * FROM rezervations`);
    res.status(200).json(rezervations);
})

app.post('/newRezervation', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, adults, rooms, children, date, offerName, offerPrice, offerDuration } = req.body;
        const disabledDatesArray = DATE_UTILS.dateRanges(DATE_UTILS.startDate(date, true), DATE_UTILS.endDate(date, true));
        const people = parseInt(adults, 10) + parseInt(children, 10);
        const disabledDates = disabledDatesArray.join(",");
        
        const offer = await process.postgresql.query(`SELECT available, price FROM offers WHERE title = $1`, [offerName]);
        
        const price = parseInt(offer[0].price, 10) * parseInt(rooms, 10);
        let newAvailable = parseInt(offer[0].available, 10) - parseInt(people, 10);


        await process.postgresql.query(`INSERT INTO rezervations (first_name, last_name, email, phone, people, offer_name, offer_duration, offer_price, disabled_dates) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`, [firstName, lastName, email, phone, people, offerName, offerDuration, price, disabledDates]);
        await process.postgresql.query(`UPDATE offers SET available = $1 WHERE title = $2`, [newAvailable, offerName]);


        res.status(200).json({
            message: 'Rezervation created',
        })
    } catch (e) {
        console.log(e);
        res.status(400).json({
            message: e
        });
    }
})

const textUpload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 1 * 1000 * 1000 }
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const imageUpload = multer({
    storage: storage
})

app.post('/imageOffers', imageUpload.single("offerImage"), (req, res) => {
    const file = req.file;
    if (file) {
        res.status(200).json({
            message: 'File uploaded'
        })
    } else {
        res.status(400).json({
            message: 'No file uploaded'
        })
    }
})

// app.get("/seedDB", async (req, res) => {
//     let file = JSON.parse(fs.readFileSync(__dirname + '/demo_offers.json'));
//     file.forEach(async (offer) => {
//         offer.img = "https://liviatour-demo.onrender.com/images/chuttersnap-JH0wCegJsrQ-unsplash.jpg";
//         await process.postgresql.query("INSERT INTO offers (title, description, price, location, details, img, country) VALUES ($1, $2, $3, $4, $5, $6, $7)", [offer["Titlu"], offer["Descriere"], offer["Pret"], offer["Locatie"], offer["Detalii"], offer.img, offer["Tara"]]);
//     });

//     res.status(200).json(file);
// })

// app.get('/textOffers', textUpload.single('offers'), async (req, res) => {
//     const file = req.file;
//     let fileBuffer = Buffer.from(file.buffer).toString('utf8');
//     let tempArray = [];
//     let filObj = fileBuffer.replace(/(Titlu|Descriere|Pret|Locatie|Tara|Detalii):(.+)/g, '{"$1":"$2"},').replace(/([\w\":\s.!,\.?]+)-+/gm, `$1&`).split('&');
//     for (const obj of filObj) {
//         let spliObj = obj.replace(/\r\n\r\n/gm, "").replace(/\r\n/gm, " ").trim()
//         console.log(JSON.parse(`[${spliObj}]`));
//     }
//     res.status(200).json({
//         message: 'File uploaded'
//     })
// })
module.exports = app