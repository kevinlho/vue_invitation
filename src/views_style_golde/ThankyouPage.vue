<script>
import protocol_app from '../assets/icon/protocol/protocol_app.png'

export default {
  components:{},
  data(){
    return{
    }
  },
  mounted() {},
  methods:{},
  computed:{}
}
</script>

<template>
  <v-container class="ma-0 pa-0 container-root">
    <p class="text-center creattionFonts headerText defaultText">Thank You</p>
    <v-img
        class="profileImage ma-auto"
        width="60vw"
        height="80vw"
        cover
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    />
    <div class="text-h5 text-md-h3"><p class="text-center pt-10 creattionFonts defaultText">See you on our big day!</p></div>
    <div class="text-h3 text-md-h1"><p class="text-center pt-10 creattionFonts defaultText font-weight-thin">Kevin & Tiffany</p></div>
  </v-container>
</template>

<style scoped lang="scss">
@import "@/scss/variable.scss";

@media (max-width: 1023px) {
  .container-root{
    min-width: 100vw;
  }

  profileImage{
    border: 3px solid red;
  }
}

@media (min-width: 1024px) {
  .container-root{
    min-width: 100vw;
  }

  profileImage{
    border: 3px solid red;
  }
}

</style>
