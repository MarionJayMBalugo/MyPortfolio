<template>
  <v-app id="base" > 
    <headerComp></headerComp>  
    <router-view></router-view> 
  
        
      <v-footer
        dark
        padless
        id="footer" 
       
      >
            <v-card
              flat
              tile
              class="grey white--text text-center"
            >
              <v-card-text class="white--text pt-0"  v-scrollanimation >
                Belles esprits inspirent les autres | La joie de vivre | Le Coeur a
                ses raisons | En amour on pardonne | Tout commence par un reve
               | La vie est belle
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="white--text"  v-scrollanimation >
                {{ new Date().getFullYear() }} — <strong>Beautifule' Soule</strong>
              </v-card-text>
            </v-card>
      </v-footer>
 
  </v-app>
</template>

<script>
import headerComp from "./components/Header.vue";

export default {
  name: 'App',
  components:{
    headerComp,
  },
   
 
}
</script>

<style>

  .details{

  margin-right:20% !important;
  margin-left:20% !important;
  padding-bottom:100px;
}
#footer{
    margin-right:19.5% !important;
    margin-left:19.5% !important;
    /* position: fixed;
    bottom: 0; */
}
.before-enter{
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}
.enter{
  opacity: 1;
  transform: translateY(0px);
}
img.before-enter{
  opacity: 0;
  transform:scale(.5) rotate(-25deg);
  transition: all 2s ease-out;
}
img.enter{
  opacity: 1;
  transform: scale(1) rotate(0deg);
}
</style>
