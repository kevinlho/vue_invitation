<script>

export default {
  components:{},
  data(){
    return{
      akad:{
        date: "Sunday, December 31st 2023",
        time: "09.00 WIB",
        venue: "Auditorium Poltekkes Medan Jl. Jamin Ginting Km. 13,5 Kelurahan Lau Cih, Kecamatan Medan Tuntungan, Kota Medan"
      },
      reception:{
        date: "Sunday, December 31st 2023",
        time: "09.00 WIB",
        venue: "Auditorium Poltekkes Medan Jl. Jamin Ginting Km. 13,5 Kelurahan Lau Cih, Kecamatan Medan Tuntungan, Kota Medan"
      }
    }
  },
  mounted() {},
  methods:{}
}
</script>

<template>
  <v-container class="ma-0 pa-0 container-root">
    <v-card class="container-card my-5">
      <div>
        <p class="text-center creattionFonts headerText">Which will be held on</p>
        <div class="container-card-outer py-5">
          <v-card class="container-card-inner my-6 mx-4">
            <v-col>
              <v-img
                  class="profileImage ma-auto my-5"
                  aspect-ratio="1"
                  src="./src/assets/icon/wedding-ring.png"
              />
              <v-col class="text-center" style="padding-top: 15px">
                <p class="text-h6">Akad</p>
                <p>{{akad.date}}</p>
                <p>{{akad.time}}</p>
                <p class="py-10">{{akad.venue}}</p>
                <v-row class="button-direction my-5 mx-3">
                  <v-icon
                      class="whiteText my-2"
                      icon="mdi-map-marker"
                      size="25"
                  />
                  <p class="whiteText ml-2">Get Direction</p>
                </v-row>
              </v-col>
            </v-col>
          </v-card>
          <v-card class="container-card-inner my-6 mx-4">
            <v-col>
              <v-img
                  class="profileImage ma-auto my-5"
                  aspect-ratio="1"
                  src="./src/assets/icon/wedding-ring.png"
              />
              <v-col class="text-center" style="padding-top: 15px">
                <p class="text-h6">Reception</p>
                <p>{{reception.date}}</p>
                <p>{{reception.time}}</p>
                <p class="py-10">{{akad.venue}}</p>
                <v-row class="button-direction my-5 mx-3">
                  <v-icon
                      class="whiteText my-2"
                      icon="mdi-map-marker"
                      size="25"
                  />
                  <p class="whiteText ml-2">Get Direction</p>
                </v-row>
              </v-col>
            </v-col>
          </v-card>
        </div>
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

  .container-card-outer{
    max-width: 80vw;
    border-radius: 20px;
    margin: auto;
  }

  .container-card-inner{
  }

  .container-profile{
    width: 85vw;
    border-radius: 10px;
    padding-bottom: 5vh;
  }

  .container-profile div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .profileImage{
    width: 15vw;
    height: 15vw;
    border-radius: 20% 20% 10px 10px;;
  }

  .borderSeperator{
    width: 35vw;
    height: 3px;
    background-color: #3a3a3a;
    margin-top: 3vh;
    margin-bottom: 3vh;
  }

  .button-direction{
    background-color: #a31717;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
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

  .container-card-outer{
    display: flex;
    flex-direction: row;
    max-width: 80vw;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    margin: auto;
  }

  .container-card-inner{
    display: flex;
    flex-direction: row;
  }

  .container-profile{
    width: 85vw;
    display: flex;
    flex-direction: row;
    padding-bottom: 15vh;
  }

  .container-profile div{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .profileImage{
    width: 15vw;
    height: 15vw;
    border-radius: 20% 20% 10px 10px;
  }

  .borderSeperator{
    width: 35vw;
    height: 3px;
    background-color: #3a3a3a;
    margin-top: 3vh;
    margin-bottom: 3vh;
  }

  .button-direction{
    background-color: #3a3a3a;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
  }
}
</style>
