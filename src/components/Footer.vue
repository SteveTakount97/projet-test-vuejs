<template>
   <v-footer>
      <v-row class="justify-center">
        <v-col class="text-center">
          <!-- Style dynamique avec :class -->
          <hr :class="{ 'line-footer-green': showSplash, 'line-footer-black': !showSplash }" />
        </v-col>
      </v-row>
    </v-footer>
</template>
  
<script>
  export default {
    name: 'Footer',
  };
</script>


 