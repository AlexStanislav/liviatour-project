<template>
  <div class="request-container">
    <Title :text="'Solicita oferta'" />
    <div class="request-form">
      <div class="request-row">
        <div class="request-column">
          <span class="p-float-label">
            <InputText
              id="last_name"
              type="text"
              v-model="formData.last_name"
            />
            <label for="last_name">Nume de familie</label>
          </span>
        </div>
        <div class="request-column">
          <span class="p-float-label">
            <InputText
              id="first_name"
              type="text"
              v-model="formData.first_name"
            />
            <label for="first_name">Prenume</label>
          </span>
        </div>
      </div>
      <div class="request-row">
        <div class="request-column">
          <span class="p-float-label">
            <InputText id="email" type="text" v-model="formData.email" />
            <label for="email">Email</label>
          </span>
        </div>
        <div class="request-column">
          <span class="p-float-label">
            <InputText id="phone" type="text" v-model="formData.phone" />
            <label for="phone">Telefon</label>
          </span>
        </div>
      </div>
      <div class="request-row">
        <div class="request-column">
          <span class="p-float-label">
            <InputText id="adults" type="number" v-model="formData.adults" />
            <label for="adults">Aduti</label>
          </span>
        </div>
        <div class="request-column">
          <span class="p-float-label">
            <InputText
              id="children"
              type="number"
              v-model="formData.children"
            />
            <label for="children">Copii</label>
          </span>
        </div>
      </div>
      <div class="request-row date-row">
        <div class="request-column date-column">
          <span class="p-float-label">
            <Calendar id="start_date" v-model="formData.start_date" showIcon />
            <label for="date">Data plecarii</label>
          </span>
          <span class="p-float-label">
            <Calendar id="end_date" v-model="formData.end_date" showIcon />
            <label for="end_date">Data intoarcere</label>
          </span>
        </div>
        <div class="request-column">
          <span class="p-float-label">
            <InputText id="duration" type="text" v-model="formData.duration" />
            <label for="duration">Nopti</label>
          </span>
        </div>
      </div>
      <div class="request-row">
        <div class="request-column">
          <span class="p-float-label">
            <InputText
              id="destination"
              type="text"
              v-model="formData.destination"
            />
            <label for="destination">Destinatie</label>
          </span>
        </div>
        <div class="request-column">
          <span class="p-float-label">
            <Dropdown
              id="transport"
              v-model="formData.transport"
              :options="dropdownOptions.transport"
              optionLabel="label"
              optionValue="value"
            />
            <label for="transport">Transport</label>
          </span>
        </div>
        <div class="request-column">
          <span class="p-float-label">
            <Dropdown
              id="stay_type"
              v-model="formData.stay_type"
              :options="dropdownOptions.stay_type"
              optionLabel="label"
              optionValue="value"
            />
            <label for="stay_type">Cazare</label>
          </span>
        </div>
      </div>
      <div class="request-row">
        <div class="request-column">
          <span class="p-float-label">
            <InputText id="budget" type="number" v-model="formData.budget" />
            <label for="stars">Buget maxim</label>
          </span>
        </div>
        <div class="request-column">
          <span class="p-float-label">
            <Dropdown
              id="currency"
              v-model="formData.currency"
              :options="dropdownOptions.currency"
              optionLabel="label"
              optionValue="value"
            />
            <label for="currency">Moneda</label>
          </span>
        </div>
      </div>
      <div class="request-row">
        <div class="request-column">
          <span class="p-float-label">
            <Textarea id="comment" type="text" v-model="formData.comment" />
            <label for="comment">Alte cerinte</label>
          </span>
        </div>
      </div>
      <div class="request-row">
        <div class="request-column">
          <Checkbox id="accept" v-model="formData.accept" :binary="true" />
          <label for="accept"
            >Sunt de acord ca datele mele cu caracter personal sa fie prelucrate
            in vederea comunicarii ofertei/informatiilor solicitate.</label
          >
        </div>
      </div>
      <div class="request-row">
        <Button label="Trimite oferta" @click="submitOffer()" />
      </div>
    </div>
  </div>
</template>
<script setup>
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Title from "../components/Title.vue";
import Calendar from "primevue/calendar";
import Textarea from "primevue/textarea";
import Checkbox from "primevue/checkbox";
import { onMounted, ref } from "vue";
import axios from "axios";
import { useAppStore } from "../store/app";
import { useToast } from "primevue/usetoast";

const toast = useToast();
const store = useAppStore();

const formData = ref({
  last_name: "",
  first_name: "",
  email: "",
  phone: "",
  adults: "",
  children: "",
  start_date: "",
  end_date: "",
  duration: "",
  destination: "",
  transport: "",
  stay_type: "",
  budget: "",
  comment: "",
  currency: "",
  accept: false,
});

const dropdownOptions = ref({
  transport: [
    { label: "Avion", value: "Avion" },
    { label: "Autobuz", value: "Autobuz" },
    { label: "Individual", value: "Individual" },
  ],
  stay_type: [
    { label: "Hotel", value: "Hotel" },
    { label: "Pensiune", value: "Pensiune" },
    { label: "Casa de Vacanta", value: "Casa de Vacanta" },
  ],
  currency: [
    { label: "Euro", value: "Euro" },
    { label: "LEI", value: "LEI" },
  ],
});

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);

  return `${day}/${month}/${year}`;
}

const submitOffer = () => {
  if (formData.value.accept !== true) {
    toast.add({
      severity: "error",
      summary: "Eroare",
      detail:
        "Acceptati ca datele mele sa fie prelucrate in vederea comunicarii ofertei/informatiilor solicitate.",
      life: 3000,
    });
  } else {
    const { accept: _, ...formInfo } = formData.value;

    formInfo.start_date = formatDate(new Date(formData.value.start_date));
    formInfo.end_date = formatDate(new Date(formData.value.end_date));
    
    axios.post(`${store.url}/newCustomOffer`, formInfo).then((res) => {
      if (res.status === 200) {
        toast.add({
          severity: "success",
          summary: "Succes",
          detail: "Solicitare realizata cu succes!",
          life: 3000,
        });
      }
    });
  }
};
</script>
<style lang="scss">
.request-container {
  padding: 0.5rem 0;
  .offers-title {
    margin: 2rem auto;
  }
}

.request-form {
  width: 60%;
  margin: 4rem auto;
}

.request-row {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0 0 0;
  input {
    width: 25vw;
  }
  .request-column {
    display: flex;
    gap: 1vw;
  }
  #destination {
    width: 29vw;
  }
  #transport,
  #currency,
  #stay_type {
    width: 10vw;
  }
  #budget {
    width: 40vw;
  }
  #start_date,
  #end_date {
    width: 12vw;
  }
  #comment {
    width: 51vw;
    height: 20vh;
    resize: none;
  }
}

button[type="submit"] {
  width: 85%;
}

.p-button {
  background-color: var(--color-3);
  border: 1px solid var(--color-3);
}

.p-checkbox .p-checkbox-box:hover {
  border-color: var(--color-4);
}

.p-checkbox .p-checkbox-box.p-highlight,
.p-checkbox .p-checkbox-box.p-highlight:hover {
  background: var(--color-3);
  border-color: var(--color-3);
}

@media screen and (max-width: 1024px) {
  .date-row{
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }


  #start_date,
  #end_date{
    width: 25vw !important;
  }
  #duration{
    width: 52vw !important;
  }

  #transport{
    width: 12vw !important;
  }

  #destination{
    width: 27vw !important;
  }

}
</style>