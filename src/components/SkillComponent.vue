<template>
    <v-main style="width:100%;">
        <div class="details">
            <v-card class="pa-2 pb-20">
                <h1 v-scrollanimation>SKILLS</h1>
                <p v-scrollanimation class="pl-5">throughout my college days.I am able to utilize<br> vast
                array of web development technologies,<span style="font-weight:bold;">which includes:</span> </p>
                <v-container id="tech">
                     <v-row>
                    <v-col align="center" lg-3 >
                        <img v-scrollanimation src="~@/assets/skillLogo/laravel.png">                        
                    </v-col>
                    <v-col align="center" lg-3 >
                        <img v-scrollanimation src="~@/assets/skillLogo/mariadb.png">                                               
                    </v-col>
                    <v-col align="center" >
                        <img lg-3 v-scrollanimation src="~@/assets/skillLogo/mongodb.png">                        
                    </v-col>
                    <v-col align="center" lg-3 >
                        <img v-scrollanimation src="~@/assets/skillLogo/mssql.png">                                                
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col align="center" lg-3 >
                        <img v-scrollanimation src="~@/assets/skillLogo/node.png">                                               
                    </v-col>
                    <v-col align="center" lg-3 >
                        <img v-scrollanimation src="~@/assets/skillLogo/php.png">                                                                       
                    </v-col>
                    <v-col align="center" lg-3 >
                        <img v-scrollanimation src="~@/assets/skillLogo/react.png">
                    </v-col>
                    <v-col align="center" lg-3 >
                        <img v-scrollanimation src="~@/assets/skillLogo/vue.png">                                                                       
                    </v-col>
                    </v-row> 
                    <v-row >
                    <v-col  align="center" lg-3 >
                        <img v-scrollanimation src="~@/assets/skillLogo/angular.png">
                    </v-col>
                    <v-col align="center" lg-3 >
                        <img v-scrollanimation src="~@/assets/skillLogo/css3.png">                        
                    </v-col>
                    <v-col align="center" lg-3 >
                        <img v-scrollanimation src="~@/assets/skillLogo/html5.png">
                    </v-col>
                    <v-col align="center" lg-3 >
                        <img v-scrollanimation src="~@/assets/skillLogo/js.png">                        
                    </v-col>
                    </v-row>

                   

                                   
                </v-container>
            </v-card>
        </div> 
    </v-main>    
</template>
<script>
export default {
  name: 'skill',
  computed: {
    show() { 
      console.log("route is",this.$route)
      return this.$route.name}
  },
 
}
</script>
<style scoped>
    .details{
        margin-top:100px;
    }
    .details img{
        height:70px;
        width:70px;
       
    }
    .details p{
        color:grey;
    }
</style>