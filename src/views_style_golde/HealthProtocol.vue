<script>
import protocol_mask from '@/assets/icon/protocol/protocol_mask.png'
import protocol_distance from '@/assets/icon/protocol/protocol_distance.png'
import protocol_temperature from '@/assets/icon/protocol/protocol_temperature.png'
import protocol_vaccine from '@/assets/icon/protocol/protocol_vaccine.png'
import protocol_sanitizer from '@/assets/icon/protocol/protocol_sanitizer.png'
import protocol_app from '@/assets/icon/protocol/protocol_app.png'

export default {
  components:{},
  data(){
    return{
      protocol:[
        {
          imgPath: protocol_mask,
          imgDesc: 'Must use masks during the event'
        },
        {
          imgPath: protocol_distance,
          imgDesc: 'Keeping each other apart when attending events'
        },
        {
          imgPath: protocol_temperature,
          imgDesc: 'Check the temperature when entering the event room'
        },{
          imgPath: protocol_vaccine,
          imgDesc: 'Minimum second dose of vaccines is required'
        },
        {
          imgPath: protocol_sanitizer,
          imgDesc: 'Wash hands and use Hand Sanitizer'
        },
        {
          imgPath: protocol_app,
          imgDesc: 'Check in using the PeduliLindungi App before entering the venue'
        }
      ]
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
      <p class="quotesTitle creattionFonts text-center headerText">Health Protocol</p>
        <div class="text-body-1 text-center pa-5">It’s important to us that everyone stays safe, please read carefully our Wedding Day Covid-19 Guidance before attending the event:</div>
        <v-col>
          <v-row class="py-3">
            <v-col cols="6" v-for="(item, index) in protocol">
              <v-row class="ma-1 justify-center">
                <v-cols cols="12" md="4">
                  <v-img
                      class="mb-3"
                      width="64px"
                      height="64px"
                      aspect-ratio="1"
                      :src="item.imgPath"
                  />
                </v-cols>
                <v-cols cols="12" md="8" class="text-center ma-auto">
                  {{item.imgDesc}}
                </v-cols>
                </v-row>
            </v-col>
          </v-row>
        </v-col>
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
