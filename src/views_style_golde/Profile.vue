<script>
import HeartHeader from '@/components/HeartHeader.vue'

export default {
  components:{
    HeartHeader
  },
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
      }
    }
  },
  mounted() {},
  methods:{}
}
</script>

<template>
  <HeartHeader/>
  <v-container class="ma-0 pa-0 container-root">
    <v-col class="py-10">
      <div class="text-h3">
        <p class="quotesTitle creattionFonts goldText text-center">{{titleQuotes.title}}</p>
      </div>
      <p class="quotesMsg text-center">{{titleQuotes.msg}}</p>
      <p class="quotesDesc text-center">{{titleQuotes.quotes}}</p>
    </v-col>
    <div class="container-profile">
      <v-col>
        <v-img
            class="profileImage"
            cover
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        />
        <v-col style="padding-top: 15px">
          <p class="text-h6">{{groomDetail.name}}</p>
          <div class="borderSeperator"/>
          <p>Son of</p>
          <p>{{groomDetail.father}}</p>
          <p>&</p>
          <p>{{groomDetail.mother}}</p>
        </v-col>
      </v-col>
      <v-col>
        <v-img
            class="profileImage"
            cover
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        />
        <v-col style="padding-top: 15px">
          <p class="text-h6">{{brideDetail.name}}</p>
          <div class="borderSeperator"/>
          <p>Daughter of</p>
          <p>{{brideDetail.father}}</p>
          <p>&</p>
          <p>{{brideDetail.mother}}</p>
        </v-col>
      </v-col>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
@import "@/scss/variable.scss";

@media (max-width: 1023px) {
  .container-root{
    min-width: 100vw;
    background-color: $profile_bg;
  }

  .quotesTitle{
    padding: 30px 0 30px 0;
  }

  .quotesMsg{
    width: 75vw;
    margin: auto;
  }

  .quotesQ{

  }

  .container-profile{
    width: 100vw;
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

  .quotesTitle{
    padding: 30px 0 30px 0;
  }

  .quotesMsg{
    width: 75vw;
    margin: auto;
  }

  .quoteQ{

  }

  .container-profile{
    width: 100vw;
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
