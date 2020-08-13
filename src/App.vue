<template>
  <v-app id="base" > 
    <header-comp></header-comp>  
    <router-view></router-view> 
    <footer-comp  id="footer" ></footer-comp>
  </v-app>
</template>

<script>
import headerComp from "./components/Header.vue";
import footerComp from "./components/Footer.vue";
export default {
  name: 'App',
  components:{
    headerComp,
    footerComp
  },
  computed: {
    route() { 
      return this.$route.name
    },
  },
  watch: {
    route: { 
      handler(value) {  
        this.$store.commit('updateRoute',value);    
      }
    },
  }
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
