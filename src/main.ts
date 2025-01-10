import { createApp } from 'vue'
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Styles de Vuetify
import '@mdi/font/css/materialdesignicons.css'; // Fichier CSS des icônes


const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light', 
  },
});

const app = createApp(App);

app.use(vuetify); // Ajout de Vuetify à l'application
app.mount('#app');