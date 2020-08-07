<template>
  
     <div class="header" style="background-color:grey;">
         <v-container fluid>
             <v-row>
             <v-flex  id="name" md-4>
                 <h1>marion</h1>
             </v-flex>
             <v-flex md-8>
                <router-link v-ripple  to="/contact">CONTACT</router-link>
                <router-link v-ripple to="/skills">SKILLS</router-link>
                <router-link v-ripple to="/home" class="active">HOME</router-link>
             </v-flex>
         </v-row>
         </v-container>
      </div>
</template>

<script>
export default {
  name: 'headerComp',
}
</script>

<style scoped>
.header{
    background-color:  #ffffff;
    width: 100%;
    position: fixed;
    z-index:   1;
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
    color:#b3b300 !important;
}
#name{
    color:grey;
    text-align: right;
    margin-right: 11%;
}
</style>
