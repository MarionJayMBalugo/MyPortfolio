<template>
    <v-main  fluid class="header">
        <v-row>
            <v-col lg="8" >
            </v-col>
            <v-col lg="4">      
                <v-row  class="mr-5">
                    <v-col md="3" class="pl-0 pr-0"  v-for="route in routerList" :key="route.name" >
                        <router-link id="link" v-scrollanimation v-ripple to="/home" :class="{active:hover}" v-if="route.name == 'HOME'">HOME</router-link>
                        <router-link id="link" v-scrollanimation v-ripple :to="route.to" @mouseover.native="hover = false" @mouseleave.native="hover = true" v-else>{{route.name}}</router-link>
                    </v-col >        
                </v-row>            
            </v-col>
        </v-row>
    </v-main>
</template>
<script>
export default {
  name: 'headerComp',
  data(){
      return{
          hover:true,
          routerList:[
              {to:"/home",name:"HOME"},
              {to:"/aboutMe",name:"ABOUT ME"},
              {to:"/skills",name:"SKILLS"},
              {to:"/contact",name:"CONTACT"}      
          ]
      }
  }
}

</script>

<style scoped>
.header{
    background-color:  #ffffff;
    width: 100%;
    position: fixed;
    z-index:    1;
    text-align:center;
}

#link {
    width:100%;   
}

#logo{
    height: 80px;
    width:150px;
    float: left;
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
