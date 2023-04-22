<script>
import protocol_app from '../assets/icon/protocol/protocol_app.png'
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
        <div class="text-h5 text-md-h3"><p class="text-center pt-10 creattionFonts">Health Protocol</p></div>
        <div class="text-body-1 text-center pa-5">It’s important to us that everyone stays safe, please read carefully our Wedding Day Covid-19 Guidance before attending the event:</div>
        <v-col>
          <v-row class="py-3">
            <v-col cols="6">
              <v-row class="align-center justify-center" style="background-color: red">
                <div class="align-center">
                  <v-img
                      class="mr-3"
                      width="64px"
                      height="64px"
                      aspect-ratio="1"
                      src="@/assets/icon/protocol/protocol_mask.png"
                  />
                </div>
                <div class="align-center justify-center">Must use masks during the event</div>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row class="align-center justify-center" style="background-color: red">
                <div class="align-center">
                  <v-img
                      class="mr-3"
                      width="64px"
                      height="64px"
                      aspect-ratio="1"
                      src="../assets/icon/protocol/protocol_app.png"
                  />
                </div>
                <div class="align-center justify-center">Must use masks during the event</div>
              </v-row>
            </v-col>
          </v-row>
          <v-row class="py-3">
            <v-col cols="6">
              <v-row class="align-center justify-center" style="background-color: red">
                <div class="align-center">
                  <v-img
                      class="mr-3"
                      width="64px"
                      height="64px"
                      aspect-ratio="1"
                      src="../assets/icon/protocol/protocol_app.png"
                  />
                </div>
                <div class="align-center justify-center">Must use masks during the event</div>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row class="align-center justify-center" style="background-color: red">
                <div class="align-center">
                  <v-img
                      class="mr-3"
                      width="64px"
                      height="64px"
                      aspect-ratio="1"
                      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                  />
                </div>
                <div class="align-center justify-center">Must use masks during the event</div>
              </v-row>
            </v-col>
          </v-row>
          <v-row class="py-3">
            <v-col cols="6">
              <v-row class="align-center justify-center" style="background-color: red">
                <div class="align-center">
                  <v-img
                      class="mr-3"
                      width="64px"
                      height="64px"
                      aspect-ratio="1"
                      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                  />
                </div>
                <div class="align-center justify-center">Must use masks during the event</div>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row class="align-center justify-center" style="background-color: red">
                <div class="align-center">
                  <v-img
                      class="mr-3"
                      width="64px"
                      height="64px"
                      aspect-ratio="1"
                      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                  />
                </div>
                <div class="align-center justify-center">Must use masks during the event</div>
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
