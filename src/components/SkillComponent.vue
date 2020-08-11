<template>
    <v-main style="width:100%;" id="skills">
        <div class="details" >
            <v-card class="pa-2" >
                <h1 v-scrollanimation>SKILLS</h1>
                <p v-scrollanimation class="pl-5">
                    throughout my college days.I am able to utilize<br> vast
                    array of web development technologies,<span style="font-weight:bold;">which includes:</span>
                </p>
                <v-container id="tech" v-for="rowNum in skillsList.length/4" :key="rowNum" >
                    <v-row>
                        <v-col align="center" lg-3 v-for="colNum in skillsList.length/3" :key="colNum" >
                            <img v-scrollanimation :src="getImagePath(skillsList[(colNum-1)+(rowNum-1)*4].name)" :alt="skillsList[(colNum-1)+(rowNum-1)*3].name">                        
                        </v-col>                
                    </v-row>
                </v-container>
                <hr>
                <div id="projects">
                    <h1 v-scrollanimation>PROJECTS</h1>
                    <p v-scrollanimation class="pl-5">
                        throughout my college days.I was able to work on various projects<br> 
                        with different clients <span style="font-weight:bold;"> here are some of the most notable:</span>
                    </p>
                    <v-container id="projectContainer" v-for="rowNum in projectList.length/3" :key="rowNum" class="pa-10">
                        <v-row >
                            <v-col id="projectCol" class="ma-2" v-for="colNum in projectList.length/2" :key="colNum" md-2>
                               
                                    <v-row>
                                        <!-- <img v-scrollanimation  :src="getImagePath(projectList[(colNum-1)+(rowNum-1)*3].name)" :alt="projectList[(colNum-1)+(rowNum-1)*3].alt"> -->
                                    </v-row>
                                    <v-row>
                                        <div id="projectDescription">
                                             <read-more  v-scrollanimation more-str="read more" :text="projectList[(colNum-1)+(rowNum-1)*3].description" link="#" less-str="read less" :max-chars="20"></read-more>                                      
                                        </div>
                                    </v-row>
                               
                            </v-col>
                        </v-row>                        
                    </v-container>
                </div>
            </v-card>
        </div> 
    </v-main>    
</template>
<script>

export default {
  name: 'skill',
  data:()=>{
      return{
            projectList:[
                {name:"projectsImages/project1.jpg", alt:"project1",description:"description for first project"},
                {name:"projectsImages/project2.png", alt:"project2",description:"description for second project"},
                {name:"projectsImages/project3.jpg", alt:"project3",description:"description for third project"},
                {name:"projectsImages/project4.png", alt:"project4",description:"description for fourth project"},
                {name:"projectsImages/project5.jpg", alt:"project5",description:"description for fifth project"},
                {name:"projectsImages/project6.jpg", alt:"project6",description:"description for sixth project"},
            ],
            skillsList:[
                {name:"skillLogo/laravel.png"},
                {name:"skillLogo/mariadb.png"},
                {name:"skillLogo/mongodb.png"},
                {name:"skillLogo/mssql.png"},
                {name:"skillLogo/node.png"},
                {name:"skillLogo/php.png"},
                {name:"skillLogo/react.png"},
                {name:"skillLogo/vue.png"},
                {name:"skillLogo/angular.png"},
                {name:"skillLogo/css3.png"},
                {name:"skillLogo/html5.png"},
                {name:"skillLogo/js.png"},
            ]
      }
  },
    mounted(){
        if(this.$route.name == "projects"){
            document.getElementById("projects").scrollIntoView();
            }else{     
          document.getElementById("skills").scrollIntoView();
        }
    },
    computed: {
        show() { 
        return this.$route.name;
        }
    },
    watch: {
        show: {
            handler(value) { 
                if(value == "projects"){
                document.getElementById("projects").scrollIntoView();
                } else{     
                document.getElementById("skills").scrollIntoView();
            }  
            }
        },
    },
    methods: {
    getImagePath (imageName) {
        return  require(`../assets/${imageName}`) 
    }
}  
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

    
    #projects{
        margin-top: 100px;
    }
    #projects img{
        width:100%;
        height:100px;
    }
    #projectCol {
        box-shadow: 1px 1px grey;
    }
    #projectCol #projectDescription {
        margin-top: 10px;
        height:100px;
    }
    hr{
        margin-top: 100px;
    }
</style>