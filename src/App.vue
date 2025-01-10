<template>
 
    <!-- Écran temporaire (Splash Screen) -->
    <v-container v-if="showSplash" class="container">
      <header>
        <h1>ARSENE</h1>
        <aside>votre coach numérique</aside>
      </header>
      <v-footer>
        <v-row class="justify-center">
          <v-col class="text-center">
            <hr />
          </v-col>
        </v-row>
      </v-footer>
    </v-container>

    <!-- Page d'accueil -->
    <v-container v-else>
      <HomeView />
    </v-container>

</template>


<script>
import HomeView from './views/HomeView.vue';

export default {
  data() {
    return {
      showSplash: true, // Par défaut
    };
  },
  mounted() {
    setTimeout(() => {
      this.showSplash = false; // Passer à la page d'accueil
    }, 3000); //3 secondes
  },
  components: {
    HomeView, // Enregistrement correct du composant
  },
};
</script>

<style>
 @import './assets/main.css';
</style>