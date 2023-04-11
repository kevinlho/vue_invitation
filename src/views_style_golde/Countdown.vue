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
      <div class="text-h3">
        <p class="text-center pt-10 creattionFonts">Counting down to our happy day!</p>
        <v-row class="container-countdown ma-auto pt-10">
          <v-col class="container-countdown-child">
            <p class="text-h5 text-center">{{counter.days}}</p>
            <p class="fontsize-countdown-static text-center">Days</p>
          </v-col>
          <v-col class="container-countdown-child">
            <p class="text-h5 text-center">{{counter.hours}}</p>
            <p class="fontsize-countdown-static text-center">Hours</p>
          </v-col>
          <v-col class="container-countdown-child">
            <p class="text-h5 text-center">{{counter.minutes}}</p>
            <p class="fontsize-countdown-static text-center">Minutes</p>
          </v-col>
          <v-col class="container-countdown-child">
            <p class="text-h5 text-center">{{counter.seconds}}</p>
            <p class="fontsize-countdown-static text-center">Seconds</p>
          </v-col>
        </v-row>
      </div>
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

  .container-countdown{
    max-width: 50vw;
  }

  .container-countdown-child{
    background-color: red;
    border-radius: 10px;
  }

  .fontsize-countdown-static{
    font-size: 10px;
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

  .container-countdown{
    max-width: 50vw;
  }

  .container-countdown-child{
    background-color: red;
    border-radius: 10px;
  }

  .fontsize-countdown-static{
    font-size: 12px;
  }
}

</style>
