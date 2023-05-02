<script>

export default {
  components:{},
  data(){
    return{
      weddingDate: new Date("Aug 5, 2023 18:00:00"),
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
  mounted() {
    this.intervalListener()
  },
  methods:{
    intervalListener(){
      let interval = setInterval(()=>{
        let timeDistance = this.weddingDate.getTime() - new Date().getTime();
        this.counter.days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
        this.counter.hours = Math.floor((timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.counter.minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
        this.counter.seconds = Math.floor((timeDistance % (1000 * 60)) / 1000);
        if(timeDistance <= 0){
          this.counter.days = 0;
          this.counter.hours = 0;
          this.counter.minutes = 0;
          this.counter.seconds = 0;
          clearInterval(interval);
        }
      }, 1000)
    }
  },
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
      <p class="text-center pt-10 creattionFonts whiteText headerText">Counting down to our happy day!</p>
        <v-row class="mx-5 my-3 align-center justify-center">
            <div class="container-countdown-child">
              <div class="text-md-h4 text-center">{{counter.days}}</div>
              <div class="text-center" style="font-size: 10px">Days</div>
            </div>
            <div class="container-countdown-child">
              <div class="text-md-h4 text-center">{{counter.hours}}</div>
              <div class="text-center" style="font-size: 10px">Hours</div>
            </div>
            <div class="container-countdown-child">
              <div class="text-md-h4 text-center">{{counter.minutes}}</div>
              <div class="text-center" style="font-size: 10px">Minutes</div>
            </div>
            <div class="container-countdown-child">
              <div class="text-md-h4 text-center">{{counter.seconds}}</div>
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
