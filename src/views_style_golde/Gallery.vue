<script>

export default {
  components:{},
  data(){
    return{
      videoLink:{
        src: "https://www.youtube.com/embed/yo2bMGnIKE8"
      },
      images:[1,2,3,4,5,6,7,8],
      timeline:[
        {
          date: "05 August 2023",
          event: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
          date: "05 August 2023",
          event: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
      ]
    }
  },
  mounted() {},
  methods:{
    imageHeight(index){
      if(index % 2 === 0){
        return '30vh'
      }
      else {
        return '40vh'
      }
    }
  },
  computed:{}
}
</script>

<template>
  <v-container class="ma-0 pa-0 container-root">
    <v-card class="container-card my-5">
      <p class="text-center creattionFonts headerText">Our Journey Start Here</p>
      <v-row class="py-5">
        <iframe
            class="container-video ma-auto"
            :src="videoLink.src"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen/>
      </v-row>
      <v-row class="px-3 pb-3">
        <v-col v-for="(image, index) in images" cols="6" md="4">
          <v-img
              v-if="(index % 2)+Math.floor(Math.random()*2) === 0"
              class="profileImage"
              cover
              width="30vw"
              height="40vw"
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          />
          <v-img
              v-else
              class="profileImage"
              cover
              width="30vw"
              height="30vw"
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          />
        </v-col>
      </v-row>
      <v-row v-for="(item, index) in timeline" class="px-5">
        <v-col cols="4" md="2" class="ma-auto">
          <div class="text-center align-center font-weight-bold">{{item.date}}</div>
        </v-col>
        <v-col cols="8" md="1" class="ma-auto">
          <div style="background-color: black; height: 2px"/>
        </v-col>
        <v-col cols="12" md="9" class="ma-auto">
          <div class="mb-3">{{item.event}}</div>
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

  .container-video{
    width: 75vw;
    height: 75vw * 0.5625;
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

  .container-video{
    width: 75vw;
    height: 75vw * 0.5625;
  }

}

</style>
