<script>
import HeartHeader from '@/components/HeartHeader.vue'

export default {
  components:{},
  data(){
    return{
      titleQuotes: {
        title: "Groom & Bride",
        msg: "he KnotTie The Knot he KnotTie The Knot he KnotTie The Knot he KnotTie The Knothe KnotTie The Knot he KnotTie The Knot The KnotTie The Knot The KnotTie The Knot The KnotTie The Knot The KnotTie The Knot The KnotTie The Knot The KnotTie",
        quotes: "-Quotes"
      },
      groomDetail:{
        name: "Kevin Susanto",
        father: "Heri Susanto",
        mother: "Herlina Gozali"
      },
      brideDetail:{
        name: "Tiffany Thunung Pitoby",
        father: "Heri Susanto",
        mother: "Herlina Gozali"
      },
      image:{
        rings: require(`@/assets/icon/wedding-invitation.png`)
      }
    }
  },
  mounted() {},
  methods:{}
}
</script>

<template>
  <v-container class="ma-0 pa-0 container-root">
    <v-card class="container-card-outer my-5">
      <v-col class="py-10">
        <p class="goldText text-center">Which will be held on</p>
      </v-col>
      <v-card class="container-card-inner py-5">
        <v-col>
          <v-img
              class="profileImage ma-auto"
              aspect-ratio="1"
              cover
              :src="require(`../assets/icon/wedding-profile.png`)"
          />
          <v-col class="text-center" style="padding-top: 15px">
            <p class="text-h6">{{groomDetail.name}}</p>
            <div class="borderSeperator mx-auto"/>
            <p>Son of</p>
            <p>{{groomDetail.father}}</p>
            <p>&</p>
            <p>{{groomDetail.mother}}</p>
          </v-col>
        </v-col>
        <v-col>
          <v-img
              class="profileImage ma-auto"
              cover
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          />
          <v-col class="text-center" style="padding-top: 15px">
            <p class="text-h6">{{groomDetail.name}}</p>
            <div class="borderSeperator mx-auto"/>
            <p>Son of</p>
            <p>{{groomDetail.father}}</p>
            <p>&</p>
            <p>{{groomDetail.mother}}</p>
          </v-col>
        </v-col>
      </v-card>
    </v-card>
  </v-container>
</template>

<style scoped lang="scss">
@import "@/scss/variable.scss";

@media (max-width: 1023px) {
  .container-root{
    min-width: 100vw;
  }

  .container-card-outer{
    max-width: 90vw;
    background-color: $venue_card_outer;
    border-radius: 20px;
    margin: auto;
  }

  .container-card-inner{
    max-width: 80vw;
    background-color: $venue_card_inner;
    border-radius: 20px;
    margin: auto;
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
    width: 60vw;
    height: 80vw;
    border-radius: 20% 20% 10px 10px;;
  }

  .borderSeperator{
    width: 35vw;
    height: 3px;
    background-color: #3a3a3a;
    margin-top: 3vh;
    margin-bottom: 3vh;
  }
}

@media (min-width: 1024px) {
  .container-root{
    min-width: 100vw;
    background-color: $profile_bg;
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
    width: 30vw;
    height: 40vw;
    border-radius: 20% 20% 10px 10px;
  }

  .borderSeperator{
    width: 35vw;
    height: 3px;
    background-color: #3a3a3a;
    margin-top: 3vh;
    margin-bottom: 3vh;
  }
}
</style>
