<script>

export default {
  components:{},
  data(){
    return{
      bank1:{
        bankName: "Bank BCA",
        bankNo: "1781-3939-71",
        bankOwner: "Kevin Susanto",
      },
      bank2:{
        bankName: "Bank BCA",
        bankNo: "1781-3939-71",
        bankOwner: "Kevin Susanto",
      },
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
        <div class="text-body-1 text-center pa-5">For family and friends who would like to send a gift. We would be glad to receive it.</div>
        <v-row class="mx-5 my-3 align-center justify-center">
          <v-col cols="6" md="4" offset="1">
            <v-card class="py-3">
              <div class="text-center">{{bank1.bankName}}</div>
              <div class="text-center">{{bank1.bankNo}}</div>
              <div class="text-center">{{bank1.bankOwner}}</div>
            </v-card>
          </v-col>
          <v-col cols="6" md="4" offset="3">
            <v-card class="card-bank-info py-3">
              <div class="text-center">{{bank1.bankName}}</div>
              <div class="text-center">{{bank1.bankNo}}</div>
              <div class="text-center">{{bank1.bankOwner}}</div>
            </v-card>
          </v-col>
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

  .card-bank-info{
    background-image: linear-gradient(
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0)
    ),url("@/assets/background/orchid_bg.png");
    background-color: $home_bg;
    background-repeat: no-repeat;
    background-size: cover;
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

  .card-bank-info{
    background-image: linear-gradient(
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0)
    ),url("@/assets/background/orchid_bg.png");
    background-color: $home_bg;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

</style>
