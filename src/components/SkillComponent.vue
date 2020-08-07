<template>
<v-app>
    <v-content>
        <div class="details">
            <v-card class="pa-2 pb-15">
                <h1>SKILLS</h1>
                <p>throughout my college days.I am able to utilize<br> vast
                array of web development technologies,which includes:</p>
                <v-content id="tech">
                    <v-row >
                    <v-col  align="center" md-3 >
                        <img src="~@/assets/skillLogo/angular.png">
                    </v-col>
                    <v-col align="center" md-3>
                        <img src="~@/assets/skillLogo/css3.png">                        
                    </v-col>
                    <v-col align="center" md-3>
                        <img src="~@/assets/skillLogo/html5.png">
                    </v-col>
                    <v-col align="center" md-3>
                        <img src="~@/assets/skillLogo/js.png">                        
                    </v-col>
                    </v-row>

                    <v-row>
                    <v-col align="center" md-3>
                        <img src="~@/assets/skillLogo/laravel.png">                        
                    </v-col>
                    <v-col align="center" md-3>
                        <img src="~@/assets/skillLogo/mariadb.png">                                               
                    </v-col>
                    <v-col align="center" md-3>
                        <img src="~@/assets/skillLogo/mongodb.png">                        
                    </v-col>
                    <v-col align="center" md-3>
                        <img src="~@/assets/skillLogo/mssql.png">                                                
                    </v-col>
                    </v-row>

                     <v-row>
                    <v-col align="center" md-3>
                        <img src="~@/assets/skillLogo/node.png">                                               
                    </v-col>
                    <v-col align="center" md-3>
                        <img src="~@/assets/skillLogo/php.png">                                                                       
                    </v-col>
                    <v-col align="center" md-3>
                        <img src="~@/assets/skillLogo/react.png">
                    </v-col>
                    <v-col align="center" md-3>
                        <img src="~@/assets/skillLogo/vue.png">                                                                       
                    </v-col>
                    </v-row>
                   
                </v-content>
            </v-card>
        </div> 
    </v-content>
</v-app>
</template>
<script>
</script>
<style scoped>
    .details{
   
    margin-top:72px;
    height:840px;
    }
    .details p{
        color:grey;
    }
   
    #tech img{
        height:100px;
        width:100px;
        margin-top:50px;
        margin-top:50px;
    }
</style>