<script setup>
defineProps({
  home: {
    type: String,
    required: false
  }
})

// export default {
//   data(){
//     return{
//
//     }
//   },
//   mounted() {},
//   methods:{
//     loadPhoto(){
//       return require(`../assets/background/home_bg.jpg`);
//     }
//   }
// }
</script>

<template>
  <div class="container-root">
    <div class="container-card">
      <div class="card-text">
        <div class="text-h3 text-center">Tie The Knot</div>
        <div class="d-flex flex-row align-center justify-center">
          <div class="border-seperator flex-grow-1"/>
          <v-icon
              class="px-5"
              icon="mdi-bookmark"
              size="50"
          />
          <div class="border-seperator flex-grow-1"/>
        </div>
        <div class="text-h8 text-center">
          (QS Ar-Rum : 21) (QS Ar-Rum : 21)(QS Ar-Rum : 21)(QS Ar-Rum : 21)(QS Ar-Rum : 21)  )(QS Ar-Rum : 21)(QS Ar-Rum : 21) )(QS Ar-Rum : 21)(QS Ar-Rum : 21) )(QS Ar-Rum : 21)(QS Ar-Rum : 21) )(QS Ar-Rum : 21)(QS Ar-Rum : 21) )(QS Ar-Rum : 21)(QS Ar-Rum : 21) (QS Ar-Rum : 21)
        </div>
        <div class="text-center py-4">
          (QS Ar-Rum : 21)
        </div>
      </div>
      <div class="card-image">
        <v-img
            src="./src/assets/background/home_bg.jpg"
            width="25vw"
            aspect-ratio="0.8"
            cover
        />
      </div>
    </div>
  </div>
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
  background-color: $profile_bg;
  width: 90vw;
  height: 90vh;
  display: flex;
  padding : 10px 20px 20px 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.card-text{
  max-height: 45vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 5px 0px 5px;
}

.card-image{
  background-color: red;
  max-height: 45vh;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.border-seperator{
  flex-grow: 1;
  max-width: 25vw;
  height: 1px;
  border-width: 1px;
  border-color: $black;
  border-style: solid;
}

.card-header{

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
    flex-grow: 1;
    padding: 0 35px 0 35px;
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
