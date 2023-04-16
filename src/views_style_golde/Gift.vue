<script>

export default {
  components:{},
  data(){
    return{
      bank1:{
        bankName: "05",
        bankNo: "08",
        accountNo: "2023",
      },
      bank2:{
        bankName: "05",
        bankNo: "08",
        accountNo: "2023",
      }
    }
  },
  mounted() {},
  methods:{},
  computed:{
    temtems(){
      return[
        "1","2","3"
      ]
    }
  }
}
</script>

<template>
  <v-container class="ma-0 pa-0 container-root">
    <v-card class="container-card my-5">
        <div class="text-h5 text-md-h3"><p class="text-center pt-10 creattionFonts">Wedding Gift</p></div>
        <v-row class="mx-5 my-3 align-center justify-center">
        </v-row>
    </v-card>
  </v-container>
</template>

<style scoped lang="scss">
@import "@/scss/variable.scss";

@media (max-width: 1023px) {
  .container-root{
    min-width: 100vw;
  }

  .container-card{
    background-color: $venue_card_inner;
    max-width: 90vw;
    margin: auto;
  }
}

@media (min-width: 1024px) {
  .container-root{
    min-width: 100vw;
  }

  .container-card{
    background-color: $venue_card_inner;
    max-width: 85vw;
    margin: auto;
    padding-bottom: 25px;
  }
}

</style>
