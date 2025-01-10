<template>
  <v-container class="container-home">
    <header>
      <!-- Flèches dynamiques -->
      <v-btn icon @click="prevSlide" class="arrow-left" v-if="currentSlide > 0">
        <svg-icon type="mdi" :path="pathLeft"></svg-icon>
      </v-btn>
      <v-btn icon @click="nextSlide" class="arrow-right" v-if="currentSlide < items.length - 1">
        <svg-icon :type="'mdi'" :path="pathRight"></svg-icon>
      </v-btn>
    </header>

    <!-- Carrousel -->
    <v-carousel class="carousel" v-model="currentSlide" hide-delimiters height="300">
      <v-carousel-item v-for="(item, index) in items" :key="index" v-show="index === currentSlide" class="carousel-item">
        <div class="carousel-content">
          <h1>{{ item.title }}</h1>
          <aside class="sous-title">{{ item.description }}</aside>
        </div>
      </v-carousel-item>
    </v-carousel>

    <v-bottom-navigation class="navigation">
      <div class="login">
        <v-btn class="inscription inscription-btn">
          <span>Inscrivez-vous</span>
        </v-btn>
        <v-btn class="inscription-btn">
          <span>Connectez-vous</span>
        </v-btn>
      </div>
    </v-bottom-navigation>

    <footer>
      <div>
        <hr class="line-footer-black">
      </div>
    </footer>
  </v-container>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiArrowRight } from '@mdi/js';
import { mdiArrowLeft } from '@mdi/js';

export default {
  name: 'HomeView',
  components: {
    SvgIcon,
  },
  data() {
    return {
      currentSlide: 0,
      items: [
        { title: "ENTRAINEZ VOUS", description: "Commencez des séances sur-mesure, conçues par des experts et boostées par l’IA, pour atteindre vos objectifs." },
        { title: "PROGRESSEZ", description: "Avancez à votre rythme grâce à des séances adaptées à votre état de forme, vos performances et vos feedbacks." },
        { title: "REUSSISSEZ", description: "Sentez-vous fier de chaque étape. Transformez vos efforts en succès, savourez vos progrès et prenez plaisir à chaque victoire." },
      ],
      pathLeft: mdiArrowLeft,  // Icône flèche gauche
      pathRight: mdiArrowRight, // Icône flèche droite
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.items.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.items.length) % this.items.length;
    },
  },
};
</script>

<style scoped>
.arrow-left {
  position: absolute;
  top: 58px;
  left: 10px;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
}

.arrow-right {
  position: absolute;
  top: 58px;
  right: 10px;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
}

h1 {
  font-size: 32px;
  font-weight: 900;
  line-height: 41px;
}

aside {
  font-weight: 400;
  line-height: 28px;
}

.container-home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  background-color: #F8F8F8;
}

.carousel {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.carousel-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: auto;
}

.carousel-item {
  height: 150px;
  margin-top: auto;
  width: 80%;
  display: flex;
  margin: auto;
}
h1{
  text-align: left;
}
.sous-title{
  text-align: left;
}
.dynamic-lines {
  margin-top: 20px;
}

.line {
  display: block;
  height: 5px;
  width: 100%;
  transition: background-color 0.3s ease;
}

.col {
  height: 10px;
  width: 100px;
}

.active .line {
  background-color: green;
}

.navigation {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 760px;
  width: 100%;
  margin: auto;
}

.login {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  top: 50px;
}

.inscription {
  background-color: #2B2B2B;
  color: #ffff;
  align-content: center;
}

.inscription-btn {
  text-align: center;
  font-weight: 500;
  border-radius: 100px;
  font-size: 14px;
  width: 100%;
  height: 30px;
}
</style>
