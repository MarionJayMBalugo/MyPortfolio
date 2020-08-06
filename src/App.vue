<template>
  <v-app>  
    <headerComp></headerComp> 
    <v-content>
      <v-layout row >
        <v-flex > 
          <router-view></router-view>
        </v-flex>
      </v-layout>   
    </v-content> 
     
  </v-app>
</template>

<script>
import headerComp from "./components/Header.vue";

export default {
  name: 'App',
  components:{
    headerComp,
  }
}
</script>

<style>
a:hover circle { fill: #00B2FF; }


</style>
