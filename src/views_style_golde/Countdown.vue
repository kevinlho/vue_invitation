<script>

export default {
  components:{},
  data(){
    return{
      date:{
        day: "05",
        month: "08",
        year: "2023",
      },
      counter:{
        seconds: "02",
        minutes: "02",
        hours: "02",
        days: "365"
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
        <div class="text-h5 text-md-h3"><p class="text-center pt-10 creattionFonts whiteText">Counting down to our happy day!</p></div>
        <v-row class="mx-5 my-3 align-center justify-center">
            <div class="container-countdown-child">
              <div class="text-md-h4 text-center">{{counter.days}}</div>
              <div class="text-center" style="font-size: 10px">Days</div>
            </div>
            <div class="container-countdown-child">
              <div class="text-md-h4 text-center">{{counter.days}}</div>
              <div class="text-center" style="font-size: 10px">Hours</div>
            </div>
            <div class="container-countdown-child">
              <div class="text-md-h4 text-center">{{counter.days}}</div>
              <div class="text-center" style="font-size: 10px">Minutes</div>
            </div>
            <div class="container-countdown-child">
              <div class="text-md-h4 text-center">{{counter.days}}</div>
              <div class="text-center" style="font-size: 10px">Seconds</div>
            </div>
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


  .card-bank-info{
    background-image: linear-gradient(
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0)
    ),url("@/assets/background/dynamic-wave.png");
    background-color: $gift_card_bankinfo;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .container-card{
    background-image: linear-gradient(
            rgba(162, 22, 22, 0.8),
            rgba(173, 25, 28, 0.8)
    ),url("@/assets/background/dynamic-wave.png");
    background-repeat: no-repeat;
    background-size: auto;
    max-width: 90vw;
    margin: auto;
  }

  .container-countdown{}

  .container-countdown-child{
    width: 24%;
    padding: 5px 0 5px 0;
    margin: 5px 1px 5px 1px;
    background-color: white;
    border-radius: 10px;
  }
}

@media (min-width: 1024px) {
  .container-root{
    min-width: 100vw;
  }

  .container-card{
    background-image: linear-gradient(
            rgba(182, 22, 22, 0.9),
            rgba(193, 25, 25, 0.9)
    ),url("@/assets/background/dynamic-wave.png");
    //background-color: $gift_card_bankinfo;
    background-repeat: no-repeat;
    background-size: auto;
    max-width: 85vw;
    margin: auto;
    padding-bottom: 25px;
  }

  .container-countdown{
    max-width: 50vw;
  }

  .container-countdown-child{
    padding: 10px 35px 10px 35px;
    margin: 5px 10px 5px 10px;
    background-color: white;
    border-radius: 10px;
  }

}

</style>
