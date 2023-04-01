<script>

export default {
  data(){
    return{
      title: "Tie The Knot",
      body: "he KnotTie The Knot The KnotTie The Knot The KnotTie The Knot The KnotTie The Knot The KnotTie The Knot The KnotTie The Knot The KnotTie The Knot The KnotTie The Knot"
    }
  },
  mounted() {},
  methods:{
    loadPhoto(){}
  }
}
</script>

<template>
  <v-container class="container-root">
    <v-card class="container-card">
        <v-col>
          <v-row class="text-h2 align-center justify-center">
            <p class="creattionFonts goldText">{{title}}</p>
          </v-row>
          <v-row class="py-5 align-center justify-center">
            <v-col class="pa-0 ma-0 border-seperator"/>
            <v-icon
                class="goldText"
                icon="mdi-bookmark"
                size="50"
            />
            <v-col class="pa-0 ma-0 border-seperator"/>
          </v-row>
          <v-row class="align-center justify-center">
            <p class="text-center card-text">
              {{body}}
            </p>
          </v-row>
        </v-col>
        <v-col>
          <v-img
              style="border-radius: 10px"
              class="ma-auto"
              src="./src/assets/background/home_bg.jpg"
              :width="350"
              aspect-ratio="0.8"
              cover
          />
        </v-col>
    </v-card>
  </v-container>
</template>

<style scoped lang="scss">
@import "@/scss/variable.scss";

.container-root{
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.container-card{
  background-color: $home_card;
  width: 90vw;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 30px 15px 30px 15px;
}

.card-image{
  background-color: red;
  max-height: 45vh;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.border-seperator{
  flex-grow: 1;
  max-width: 25vw;
  height: 1px;
  border-width: 1px;
  border-color: $black;
  border-style: solid;
}

@media (min-width: 1024px) {
  .container-root{
    display: flex;
    min-width: 100vw;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
  }

  .container-card{
    background-color: $home_card;
    width: 85vw;
    height: 85vh;
    display: flex;
    flex-direction: row;
    padding : 10px 20px 20px 10px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }

  .border-seperator{
    flex-grow: 1;
    max-width: 10vw;
    height: 1px;
    border-width: 1px;
    border-color: $black;
    border-style: solid;
  }

  .card-text{
    max-width: 35vw;
  }

  .card-image{
    max-width: 30vw;
    max-height: 75vh;
    overflow: hidden;
    background-color: red;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
