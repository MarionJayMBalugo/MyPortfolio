<template>
  <v-app id="base" > 
  
    <headerComp></headerComp> 
    <v-content>
      <v-layout row >
        <v-flex >  
          <router-view></router-view>
        </v-flex>
      </v-layout>   
    </v-content>
    
    <div class="details">
      <v-footer
        dark
        padless
      >
            <v-card
              flat
              tile
              class="grey white--text text-center"
            >
              <v-card-text class="white--text pt-0">
                Belles esprits inspirent les autres | La joie de vivre | Le Coeur a
                ses raisons | En amour on pardonne | Tout commence par un reve
               | La vie est belle
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>Beautifule' Soule</strong>
              </v-card-text>
            </v-card>
      </v-footer>
    </div>
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

<style >
  .details{
  margin-right:20% !important;
  margin-left:18.5% !important;
}
</style>
