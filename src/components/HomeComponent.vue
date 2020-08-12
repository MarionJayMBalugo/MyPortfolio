<template>
<v-main style="width:100%;" >
  <div class="home" id="home">
    <div class="triangle"></div>
    <div id="slogan">   
        <h1 v-scrollanimation>
          Hi, I am <span style="color:#939366;">Marion</span> This is<br> my favorite work.
        </h1>
        <p v-scrollanimation>
            <vue-typer 
            :text='typerInfo.msg'
            :repeat='typerInfo.repeat'
            :shuffle='typerInfo.isShaffle'
            initial-action='typing'
            :pre-type-delay='70'
            :type-delay='70'
            :pre-erase-delay='2000'
            :erase-delay='250'
            erase-style='clear'
            :erase-on-complete='false'
            caret-animation='expand'
            ></vue-typer>
        </p>
      <br>
      <v-btn id="link" color="#939366" class="mr-5" @click="$router.push({name: 'contact'})" v-scrollanimation >hire me</v-btn>
      <v-btn id="link" outlined color="#939366" @click="$router.push({name: 'projects'})" v-scrollanimation>projects</v-btn> 
    </div>
  </div>
    <v-card class="details pl-2 pr-2">
      <v-container class="expQuickView">
        <v-row>
          <v-flex lg-3>
            <div v-scrollanimation style="display:flex">
              <div  id="imgDiv">
                <img v-scrollanimation src="~@/assets/icons/projectIcon.png"  alt="projects"> 
              </div>
              <div >
                <span class="pl-3">100</span><br><span class="pl-3" style="color:#939366;font-weight:bold"> PROJECTS COMPLETED</span>
              </div>
            </div>       
          </v-flex>
          <v-flex lg-3>
            <div v-scrollanimation style="display:flex">
              <div id="imgDiv">
                <img v-scrollanimation src="~@/assets/icons/clientIcon.png" alt="clients">
              </div>
              <div >
                <span class="pl-3">150</span><br><span class="pl-3" style="color:#939366;font-weight:bold" > HAPPY CLIENTS</span>
              </div>
            </div>
           
          </v-flex>
          <v-flex lg-3>
            <div v-scrollanimation style="display:flex">
              <div id="imgDiv">
                <img v-scrollanimation src="~@/assets/icons/coffeeIcon.png" alt="coffee">
              </div>
              <div >
                <span class="pl-3">478</span><br><span class="pl-3" style="color:#939366;font-weight:bold" > CUPS OF COFFEE</span>
              </div>
            </div>
          </v-flex>
          <v-flex lg-3>
            <div v-scrollanimation style="display:flex">
               <div id="imgDiv">
                    <img v-scrollanimation src="~@/assets/icons/calendarIcon.png" alt="calendar">
              </div>
              <div >
                <span class="pl-3">10</span><br><span class="pl-3" style="color:#939366;font-weight:bold">YEARS EXPERIENCE</span>
              </div>
            </div>
          </v-flex>
        </v-row>
      </v-container>
      <hr>
      <v-container id="about" >
        <v-layout row>
          <v-flex lg-6 id="dev">
            <img v-scrollanimation src="~@/assets/developer.jpg" alt="">
          </v-flex>
          <v-flex lg-6>
            <v-container class="pt-10">
              <p v-scrollanimation>My Intro</p>
              <h1 v-scrollanimation>About Me</h1>
              <br>
              <div v-scrollanimation>
                   <span >Hi I'm Marion Jay Balugo.I am a web developer.I am a proud graduate of The
                <br>University of San Carlos and a scholar of the Passerelles Numeriques
                <br>a very known foundation that produces world-class IT professionals.</span>
              </div>
             
              <div  id="aboutDetails">
                <v-row>
                  <v-col v-scrollanimation lg-6>
                      <span id="infoName"   style="color:#939366;">Name:</span>
                      <br><span class="ml-4">Marion Jay M. Balugo</span><br>
                      <span id="infoName"  style="color:#939366;">Date of Birth:</span>
                      <br><span class="ml-4">August 13, 2000</span><br>
                  </v-col>
                  <v-col v-scrollanimation lg-6>
                      <span id="infoName"  style="color:#939366;">Address:</span>
                      <br><span class="ml-4">Nasipit Road, Talamban, Cebu City</span><br>
                      <span id="infoName"  style="color:#939366;">Zip Code:</span>
                      <br><span class="ml-4">6000</span><br>
                  </v-col>
                </v-row>                          
              </div>          
            </v-container>   
          </v-flex>     
        </v-layout>
      </v-container>
    </v-card>
</v-main>
</template>
<script>
export default {
  name: 'home',
  data:()=>{
    return {
      typerInfo:{
        msg:["CONNECTS YOU"," AND YOUR BUSINESS","WITH DIGITAL WORLD"], repeat:'Infinity',
        isShuffle:false
      }
      
    }
  },
  mounted(){
    if(this.$route.name == "aboutMe"){
          document.getElementById("about").scrollIntoView();
        }else{     
          document.getElementById("home").scrollIntoView();
        }
  },
  computed: {
    show() { 
      return this.$route.name}
  },
  watch: {
  show: {
      handler(value) { 
        if(value == "aboutMe"){

          document.getElementById("about").scrollIntoView();
        }else{  
          document.getElementById("home").scrollIntoView();
        }
        
      }
  },
},

}
</script>
<style scoped>
.home{
  background-image:url("~@/assets/backgroundImage.png");
  background-repeat: no-repeat;
  background-size: 70% 500px;
  background-position: top right;
  height: 500px;
}
.triangle{
  margin-left: 30%;
	width: 0;
	height: 0;
	border-top: 0px solid transparent;
	border-left: 150px solid white;
	border-bottom: 500px solid transparent;
}
#slogan{
  margin-top:-20%;
  margin-left: 20%;
}
.details{
  margin-right:20% ;
  margin-left:20%;
}
.expQuickView p{
  color:#939366;
  text-shadow: 1px 1px white; 
  font-weight: bold;
}
h1{
  font-weight: bolder;
  /* text-shadow: 1px 1px white; */
 }
.expQuickView{
  margin-top: 50px;
}
 #imgDiv{
  height: 50px;
  width:50px;
 border: 2px solid #939366;
 border-radius: 50%;
 overflow: hidden; 
 
} 
 .expQuickView img{
   height: 50px;
  width:50px;
}
.expQuickView span{
  color:grey;
  font-size: 13px;
}
#about p{
  color:#939366;
  font-weight: bold;
}
#about span{
  color:grey;
}
#aboutDetails{
  margin-top: 20px;
}
#infoName{
  font-weight: bold;
}
#dev{
  margin-top:50px;
}
hr{
  margin-top:30px;
  color:grey;
} 
#link:hover{
    transform:scale(1.3,1.3);
    -webkit-transform:scale(1.3,1.3);
    -moz-transform:scale(1.3,1.3);

} 

</style>