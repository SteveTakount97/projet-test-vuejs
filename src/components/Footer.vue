<template>
   <v-footer>
      <v-row class="justify-center">
        <v-col class="text-center">
          <!-- Style dynamique avec :class -->
          <hr :class="showSplash ? 'line-footer-green' : 'line-footer-black'" />
        </v-col>
      </v-row>
    </v-footer>
</template>
  
<script>
  export default {
    name: 'Footer',
  };
</script>

<style scope>
  
  v-footer {
      margin-top: auto; 
    }
</style>

 