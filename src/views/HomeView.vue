<template> 
    <v-container>
      <header>
        <!-- Lignes dynamiques -->
        <v-row justify="center" class="dynamic-lines">
          <v-col 
            v-for="(item, index) in items" 
            :key="index" 
            cols="4"
            :class="{ active: index === currentSlide }"
          >
            <div class="line"></div>
          </v-col>
        </v-row>
      </header>
  
      <!-- Carrousel -->
      <v-carousel
        v-model="currentSlide" 
        hide-delimiters 
        height="300"
      >
        <v-carousel-item v-for="(item, index) in items" :key="index" v-show="index === currentSlide">
          <div class="carousel-content">
            <h1>{{ item.title }}</h1>
            <aside>{{ item.description }}</aside>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'HomeView', 
    data() {
      return {
        currentSlide: 0, 
        items: [
          { title: "ENTRAINEZ VOUS", description: "Commencez des séances sur-mesure, conçues par des experts et boostées par l’IA, pour atteindre vos objectifs." },
          { title: "PROGRESSEZ", description: "Avancez à votre rythme grâce à des séances adaptées à votre état de forme, vos performances et vos feedbacks." },
          { title: "REUSSISSEZ", description: "Sentez-vous fier de chaque étape. Transformez vos efforts en succès, savourez vos progrès et prenez plaisir à chaque victoire." },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .carousel-content {
    text-align: center;
    display: flex;
    flex-direction:column; 
    justify-content: center;
    margin-top: auto;
    height: 100%;
  }
  
  .dynamic-lines {
    margin-top: 20px;
  }
  
  .line {
    height: 5px;
    width: 100%;
    background-color: grey;
  }
  
  .active .line {
    background-color: green; /* Couleur pour l'élément actif */
  }
  </style>
  