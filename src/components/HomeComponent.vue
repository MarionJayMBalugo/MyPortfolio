<template>
  <v-app class="home">
    <div class="triangle"></div>
    <div id="slogan">
      <p>DESIGNS AND CREATE BRANDS</p>
      <h1>Hi, I am <span style="color:#939366;">Marion</span> This is<br> my favorite work.</h1>
      <br>
      <v-btn color="#939366" class="mr-5">hire me</v-btn>
      <v-btn outlined color="#939366">download cv</v-btn>
    </div>
    <div class="details">
      <v-content class="expQuickView">
        <v-row>
          <v-flex md-3>
            <div style="display:flex">
              <div  id="imgDiv">
                <img src="~@/assets/icons/projectIcon.png"  alt="projects"> 
              </div>
              <div >
                <span class="pl-3">100</span><br><span class="pl-3" style="color:#939366;font-weight:bold"> PROJECTS COMPLETED</span>
              </div>
            </div>       
          </v-flex>
          <v-flex md-3>
            <div style="display:flex">
              <div id="imgDiv">
                <img src="~@/assets/icons/clientIcon.png" alt="clients">
              </div>
              <div >
                <span class="pl-3">150</span><br><span class="pl-3" style="color:#939366;font-weight:bold" > HAPPY CLIENTS</span>
              </div>
            </div>
           
          </v-flex>
          <v-flex md-3>
            <div style="display:flex">
              <div id="imgDiv">
                <img src="~@/assets/icons/coffeeIcon.png" alt="coffee">
              </div>
              <div >
                <span class="pl-3">478</span><br><span class="pl-3" style="color:#939366;font-weight:bold" > CUPS OF COFFEE</span>
              </div>
            </div>
          </v-flex>
          <v-flex md-3>
            <div style="display:flex">
               <div id="imgDiv">
                    <img src="~@/assets/icons/calendarIcon.png" alt="calendar">
              </div>
              <div >
                <span class="pl-3">10</span><br><span class="pl-3" style="color:#939366;font-weight:bold">YEARS EXPERIENCE</span>
              </div>
            </div>
          </v-flex>
        </v-row>
      </v-content>
      <v-content id="about" >
        <v-row>
          <v-flex md-5>
            <img src="~@/assets/developer.jpg" alt="">
          </v-flex>
          <v-flex md-7>
            <v-content class="pt-10">
              <p>My Intro</p>
              <h1>About Me</h1>
              <br>
              <span>Hi I'm Marion Jay Balugo.I am a web developer.I graduated from an online classroom.dfd
                <br>Hi I'm Marion Jay Balugo.I am a web developer.I graduated from an online classroom.dfd
              <br>At the age of 4 I was able to develop my first app.</span>
              <div id="aboutDetails">
                <span id="infoName"  style="color:#939366;">Name:</span>
                <br><span class="ml-4">Marion Jay M. Balugo</span><br>
                <span id="infoName"  style="color:#939366;">Date of Birth:</span>
                <br><span class="ml-4">August 13, 2000</span><br>
                <span id="infoName"  style="color:#939366;">Address:</span>
                <br><span class="ml-4">Nasipit Road, Talamban, Cebu City</span><br>
                <span id="infoName"  style="color:#939366;">Zip Code:</span>
                <br><span class="ml-4">6000</span><br>
              </div>
              
            </v-content>   
          </v-flex>     
        </v-row>
        
      </v-content>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'home',
  
}
</script>

<style scoped>

  .home{
    background-image:url("~@/assets/computer.jpg");
    height: 500px;
    background-repeat: no-repeat;
    background-size: 70% ;
    background-position: top right;
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
  margin-top:12%;
  margin-left:19%;
  position:absolute;
}
.details{
  margin-right:20% !important;
  margin-left:20% !important;
}
.expQuickView p{
  color:#939366;
  /* text-shadow: 1px 1px white; */
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
  background-color: red;
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
#about{
  margin-top: 40px;
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
</style>
