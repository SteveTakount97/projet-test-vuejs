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
          <!-- Style dynamique avec :class -->
          <hr :class="{ 'line-footer-green': showSplash, 'line-footer-black': !showSplash }" />
        </v-col>
      </v-row>
    </v-footer>
    </v-container>

    <!-- Page d'accueil -->
    <v-container v-else>
      <HomeView />
      <Footer />
    </v-container>

</template>


<script>
import HomeView from './views/HomeView.vue';
import Footer from './components/Footer.vue';

export default {
  data() {
    return {
      showSplash: true, // Par défaut
    };
  },
  mounted() {
    setTimeout(() => {
      this.showSplash = false; // Passer à la page d'accueil
    }, 3000); // 3 secondes
  },
  components: {
    HomeView,
    Footer, // Enregistrement correct du composant
  },
};
</script>

<style>
 @import './assets/main.css';
</style>