<script setup>
defineProps({
  home: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="container-root">
    <div class="container-card">
      <div class="card-text">
        <div class="text-h3 text-center">Tie The Knot</div>
        <div class="d-flex flex-row align-center justify-center">
          <div class="border-seperator flex-grow-1"/>
          <v-icon icon="mdi-vuetify"></v-icon>
          <div class="border-seperator flex-grow-1"/>
        </div>
        <div class="text-h8 text-center">
          (QS Ar-Rum : 21) (QS Ar-Rum : 21)(QS Ar-Rum : 21)(QS Ar-Rum : 21)(QS Ar-Rum : 21)  )(QS Ar-Rum : 21)(QS Ar-Rum : 21) )(QS Ar-Rum : 21)(QS Ar-Rum : 21) )(QS Ar-Rum : 21)(QS Ar-Rum : 21) )(QS Ar-Rum : 21)(QS Ar-Rum : 21) )(QS Ar-Rum : 21)(QS Ar-Rum : 21) (QS Ar-Rum : 21)
        </div>
        <div>
          (QS Ar-Rum : 21)
        </div>
      </div>
      <div class="card-image">
        <img
            width="300"
            height="400"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/variable.scss";
.container-root{
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.container-card{
  background-color: $profile_bg;
  width: 90vw;
  height: 85vh;
  display: flex;
  padding : 10px 20px 20px 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.card-header{

}

@media (min-width: 1024px) {
  .container-root{
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }

  .container-card{
    background-color: $profile_bg;
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
    max-width: 42.5vw;
    background-color: blue;
    flex-grow: 1;
  }

  .card-image{
    max-width: 42.5vw;
    background-color: red;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
