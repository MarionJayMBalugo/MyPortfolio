<template>
     <v-main style="width:100%;">
        <div class="details">
            <v-card class="pa-2 pb-20">           
              <h1 v-scrollanimation>Get in Touch</h1>
              <p v-scrollanimation>Communication is the key.lol.hahaha</p>
              <v-container>
                  <v-row>
                      <v-col lg-6>
                        <v-form  v-scrollanimation>
                            <v-text-field
                           
                            label="Name"
                            required
                            ></v-text-field>

                            <v-text-field
                           
                            label="E-mail"
                            required
                            ></v-text-field>
                            <v-textarea
                            
                            label="Message"
                            auto-grow
                            ></v-textarea>
                        
                            <v-btn
                            v-scrollanimation
                            color="success"
                            >
                            Send to Marion
                            </v-btn>
                        </v-form>
                      </v-col>
                      <v-col lg-6 id="mediaPlatforms">
                          <div v-scrollanimation>
                          <p>support us <span>on:</span></p>
                          </div>
                          <v-row>
                              <v-col lg-6 class="pa-0" id="imgHolder">
                                  <img v-scrollanimation style="transform-origin:top left;" src="~@/assets/contactImages/facebook.png" alt="">
                              </v-col>
                              <v-col lg-6 class="pa-0" id="imgHolder">
                                  <img v-scrollanimation style="transform-origin:top right;" src="~@/assets/contactImages/gmail.png" alt="">
                              </v-col>
                          </v-row>
                          <v-row>
                              <v-col lg-6  id="imgHolder"  class="pa-0">
                                  <img v-scrollanimation style="transform-origin:bottom left;"  src="~@/assets/contactImages/instagram.jpg"  alt="">
                              </v-col>
                              <v-col lg-6 class="pa-0"  id="imgHolder">
                                  <img v-scrollanimation style="transform-origin:bottom right;" src="~@/assets/contactImages/youtube.png" alt="">
                              </v-col>
                          </v-row>
                      </v-col>
                  </v-row>
              </v-container>
            </v-card>
        </div> 
    </v-main> 
</template>
<script>
export default {
    
}
</script>
<style>
   .details{
       margin-top: 100px;
   }
   #mediaPlatforms img{
       width:100%;
       height:100%;
       transition: all .3s ease-in-out; 
        position: relative;
   }
   #imgHolder{
       height:150px;
   }
   #mediaPlatforms img:hover{
       transform:scale(1.8,1.8);
        z-index: 100;
   }
   p{
       color:grey;
   }
  #mediaPlatforms span{
      font-weight: bold;
  }
</style>
