<template>
  <v-main style="width:100%;">
    <v-main class="home" id="home" >
          <v-row align="center">
            <v-col md="6">
              <div style="float:right" class="pr-13">   
                <h1 v-scrollanimation>
                  Hi, I am <span style="color:#939366;">Marion</span> This is<br> my favorite work.
                </h1>
                <p v-scrollanimation>
                    <vue-typer 
                    :text='typerInfo.msg'
                    :repeat='typerInfo.repeat'
                    :shuffle='typerInfo.isShaffle'
                    :initial-action='typerInfo.initialAction'
                    :pre-type-delay='typerInfo.preTypeDelay'
                    :type-delay='typerInfo.typeDelay'
                    :pre-erase-delay='typerInfo.preEraseDelay'
                    :erase-delay='typerInfo.eraseDelay'
                    :erase-style='typerInfo.eraseStyle'
                    :erase-on-complete='typerInfo.eraseOnComplete'
                    :caret-animation='typerInfo.caretAnimation'  
                    ></vue-typer>
                </p>
                <v-btn id="link" color="#939366" style="color:white" class="mr-5" @click="$router.push({name: 'contact'})" v-scrollanimation >hire me</v-btn>
                <v-btn id="link" outlined color="black" @click="$router.push({name: 'projects'})" v-scrollanimation>projects</v-btn> 
              </div>
            </v-col>
            <v-col md="3" class="pl-10">
              <v-card id="carousel" v-scrollanimation>
                <v-carousel
                cycle
                height="400"
                hide-delimiter-background
                show-arrows-on-hover>
                <v-carousel-item
                  v-for=" i in slides.length-2"
                  :key="i">
                <v-sheet
                  height="100%">
                  <v-row
                  class="fill-height"
                  align="center"
                  justify="center">
                  
                  <div>
               
                    <img :src="getImagePath (colors[i+1])" alt="">
                   
                  </div>
                  
                  </v-row>
                </v-sheet>
                </v-carousel-item>
                </v-carousel>
              </v-card>
            </v-col>
            <v-col md="3" >
              <v-card id="carousel" v-scrollanimation>
                <v-carousel
                cycle
                height="400"
                hide-delimiter-background
                show-arrows-on-hover>
                <v-carousel-item
                  v-for="(slide, i) in slides"
                  :key="i">
                <v-sheet
                  height="100%">
                  <v-row
                  class="fill-height"
                  align="center"
                  justify="center">
                   <img :src="getImagePath (colors[i])" alt="">
                  </v-row>
                </v-sheet>
                </v-carousel-item>
                </v-carousel>
              </v-card>
            </v-col>     
          </v-row>      
    </v-main>
    <v-card class="details pl-2 pr-2" >
      <v-container class="expQuickView" >
        <v-row>
          <v-flex lg="3" v-for="expInfo in expList" :key="expInfo.alt">
            <div v-scrollanimation style="display:flex">
              <div  id="imgDiv">
                <img v-scrollanimation :src="getImagePath (expInfo.name)"  :alt="expInfo.alt"> 
              </div>
              <div >
                <span class="pl-3">{{expInfo.num}}</span><br><span class="pl-3" style="color:#939366;font-weight:bold">{{expInfo.description}}</span>
              </div>
            </div>       
          </v-flex>
        </v-row>
      </v-container>
      <hr>
      <v-container id="about"  >
        <v-row align="center"  >
          <v-col lg="3">
            <img v-scrollanimation src="~@/assets/developer.jpg" alt="developer">
          </v-col>
          <v-col lg="9" >
            <v-container >
              <p v-scrollanimation>{{aboutMe.subtitle}}</p>
              <h1 v-scrollanimation>{{aboutMe.title}}</h1>
              <br>
              <div v-scrollanimation>
                <span >{{aboutMe.description}}</span>
              </div>
              <div  id="aboutDetails">
                <v-row v-for="aboutDetail in aboutMe.details.length/2" :key="aboutDetail">     
                  <v-col v-scrollanimation lg="6" v-for="aboutDetail2 in aboutMe.details.length/2" :key="aboutDetail2">
                      <span id="infoName" style="color:#939366;">{{aboutMe.details[aboutDetail2-1+(aboutDetail-1)*2].label}}:</span>
                      <br><span class="ml-4">{{aboutMe.details[(aboutDetail2-1)+(aboutDetail-1)*2].info}}</span><br>                               
                  </v-col>
                </v-row>                         
              </div>          
            </v-container>   
          </v-col>     
        </v-row>
      </v-container>
    </v-card>
  </v-main>
</template>
<script>
export default {
  name: 'home',
  data:()=>{
    return {
      colors: [ 
          "carouselImages/img2.png",
          "carouselImages/img4.png",
          "carouselImages/img3.png",
          "carouselImages/img1.png",
          "carouselImages/img5.png",
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      typerInfo:{
        msg:[
          "CONNECTS YOU",
          " AND YOUR BUSINESS",
          "WITH DIGITAL WORLD"
        ],
        repeat:Infinity,
        isShuffle:false,
        initialAction:"typing",
        preTypeDelay:70,
        typeDelay:70,
        preEraseDelay:200,
        eraseDelay:250,
        eraseStyle:'clear',
        eraseOnComplete:false,
        caretAnimation:'expand',
    
      },
      expList:[
        {name:"icons/projectIcon.png",alt:"project icon",num:100,description:"PROJECTS COMPLETED"},
        {name:"icons/clientIcon.png",alt:"client icon",num:150,description:"HAPPY CLIENTS"},
        {name:"icons/coffeeIcon.png",alt:"coffee icon",num:487,description:"CUPS OF COFFEE"},
        {name:"icons/calendarIcon.png",alt:"calendar icon",num:10,description:"YEARS EXPERIENCE"},
      ],
      aboutMe:{
        title:"About Me",
        subtitle:"My Intro",
        description:"Hi I'm Marion Jay Balugo.I am a web developer.I am a proud graduate of The"+
          "University of San Carlos and a scholar of the Passerelles Numeriques"+
          "a very known foundation that produces world-class IT professionals.",
        details:[
          {label:"Name", info:"Marion Jay Balugo"},
          {label:"Address", info:"Nasipit Road, Talamban, Cebu City"},
          {label:"Date of Birth", info:"August 13, 2000"},
          {label:"Zip Code", info:"6000"},
        ],
      }
    }
  },
  mounted(){
    this.scrollIntoDiv(this.$route.name);
  },
  computed: {
    show(){
      return this.$store.getters.getRouteName;
    }
  },
  watch: {
    show:{
      handler(value){
        this.scrollIntoDiv(value);
      }
    }
  },
  methods: {
    getImagePath (imageName) {
      return require(`../assets/${imageName}`);
    },
    scrollIntoDiv( value){
      if(value == "aboutMe"){
          document.getElementById("about").scrollIntoView();
      }else if(value == "home"){ 
        document.getElementById("home").scrollIntoView();
      }
    }
  }
}
</script>
<style scoped>
.home{
  background-image:linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),url("~@/assets/backgroundImage.png");
  background-repeat: no-repeat;
  background-size: 70% 470px;
  background-position: top right;
}
.vue-typer {
  font-family: monospace;
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
.expQuickView img{
  height: 50px;
  width:50px;
  filter: grayscale(100%);
}
.expQuickView span{
  color:grey;
  font-size: 13px;
}
h1{
  font-weight: bolder;
 }
 #imgDiv{
  height: 50px;
  width:50px;
  border: 2px solid grey;
  border-radius: 50%;
  overflow: hidden; 
 
} 
#about p{
  color:#939366;
  font-weight: bold;
}
#about span{
  color:grey;
}

#infoName{
  font-weight: bold;
}
hr{
  color:grey;
} 
#link:hover{
  transform:scale(1.3,1.3);
  -webkit-transform:scale(1.3,1.3);
  -moz-transform:scale(1.3,1.3);

} 
#carousel{
  width:280px;
}
</style>