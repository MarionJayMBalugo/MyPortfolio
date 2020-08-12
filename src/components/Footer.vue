<template>     
      <v-footer
        dark
        padless
        id="footer"    
      >
            <v-card
              flat
              tile
              class="grey white--text text-center"
            >
              <v-card-text class="white--text pt-0"  v-scrollanimation >
                Belles esprits inspirent les autres | La joie de vivre | Le Coeur a
                ses raisons | En amour on pardonne | Tout commence par un reve
               | La vie est belle | En amour on pardonne | La joie de vivre
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="white--text"  v-scrollanimation >
                {{ new Date().getFullYear() }} — <strong>Beautifule' Soule</strong>
              </v-card-text>
            </v-card>
      </v-footer>
</template>
<script>
export default {
    name:"footerComp"
}
</script>
<style scoped>

</style>
