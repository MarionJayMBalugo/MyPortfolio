<template>
  
     <div class="header" >
         <v-container fluid>
             <v-row >
             <v-flex  id="name" md-4 >
                 <img src="~@/assets/marionLogo.jpg" alt="marion logo" v-scrollanimation>
             </v-flex>
             <v-flex lg-8 class="mr-5">
                <router-link id="link" v-scrollanimation  v-ripple  to="/contact" @mouseover.native="hover = false"  @mouseleave.native="hover = true">CONTACT</router-link>
                <router-link id="link" v-scrollanimation v-ripple to="/skills" @mouseover.native="hover = false" @mouseleave.native="hover = true">SKILLS</router-link>
                 <router-link id="link" v-scrollanimation v-ripple to="/aboutMe" @mouseover.native="hover = false" @mouseleave.native="hover = true">ABOUT ME</router-link>
                <router-link id="link" v-scrollanimation v-ripple to="/home" :class="{active:hover}">HOME</router-link>
             </v-flex>
         </v-row>
         </v-container>
      </div>
</template>

<script>
export default {
  name: 'headerComp',
  data(){
      return{
          hover:true,
      }
  }
}

</script>

<style scoped>
#link {
    margin-top: 10px;
    width:100px;
    
}
.header img{
    height:60px;
    width:80px;
    border-radius: 50%;
    box-shadow: 2px 2px #e0dbdb;
}
.header{
    background-color:  #ffffff;
    width: 100%;
    position: fixed;
    z-index:   1;
    text-align:center;
}
#name{
    color:grey;
    text-align: right;
    margin-right: 30%;
}
a {
    text-decoration: none;
    color:black !important;
    padding:10px;
    float:right;
    font-weight: bold;
}
a:hover,
.active{
    border: 1px solid #b3b300;
    color:#b3b300 !important;
}
</style>
