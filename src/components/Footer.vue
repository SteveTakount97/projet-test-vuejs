<template>
   <v-footer>
       <div class="div-footer">
          <!-- Style dynamique avec :class -->
          <hr :class="{ 'line-footer-green': showSplash, 'line-footer-black': !showSplash }" />
       </div>
    </v-footer>
</template>
  
<script>
  export default {
    name: 'Footer',
  };
</script>

<style scoped>

</style>
 