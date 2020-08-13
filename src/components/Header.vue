<template>
    <v-main  fluid class="header">
        <v-row>
            <v-col lg="7" >
            </v-col>
            <v-col lg="5">      
                <v-row  class="mr-5">
                    <v-col md="3" class="pl-0 pr-0"  v-for="route in routerList" :key="route.name" >
                        <router-link id="link"
                        v-scrollanimation 
                        v-ripple 
                        :to="route.to" 
                        :class="{active:route.isActive}"
                        @click.native="updateStatus()" 
                        @mouseover.native="updateOnHoverStatus(false)"
                        @mouseleave.native="updateOnHoverStatus(true)">
                        {{route.name}}
                        </router-link>
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
          activeRouteIndex:0,
          routerList:[
              {to:"/home",name:"HOME",isActive:true},
              {to:"/aboutMe",name:"ABOUT ME",isActive:false},
              {to:"/skills",name:"SKILLS",isActive:false},
              {to:"/contact",name:"CONTACT",isActive:false}      
          ]
      }
  },
  computed:{
      route(){
          return this.$store.getters.getRouteName;
      }
  },
  watch:{
      route:{
          handler(){
              this.updateStatus();
          }
      }
  },
  methods:{
      getActiveRoute(){
          for(var index = 0; index<this.routerList.length;index ++){
              if(this.routerList[index].isActive){
                  this.activeRouteIndex = index;
                  break;
              }
          }
      },
      updateOnHoverStatus(status){
          this.getActiveRoute();
          this.routerList[this.activeRouteIndex].isActive=status;
      },

      updateStatus(){   
          var tempList={
              home:"HOME",
              aboutMe:"ABOUT ME",
              skills:"SKILLS",
              projects:"SKILLS",
              contact:"CONTACT"
          }
          var routeName= this.$route.name;
         this.routerList.forEach(element => {
             if(element.name == tempList[routeName]){
                 element.isActive=true;
             }else{
                 element.isActive=false;
             }
         });       
      }
  }
}

</script>

<style scoped>
.header{
    background-color:  #ffffff;
    width: 100%;
    position: sticky;
    z-index:    1;
    text-align:center;
    top:0;
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
