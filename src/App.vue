<script setup>
import Home from './views/Home.vue'
import Profile from "./views/Profile.vue";

import BottomNavbar from './components/BottomNavbar.vue'


// export default {
//   data() {
//     return {
//       count: 0
//     }
//   },
//   mounted() {},
//   methods: {
//     increment() {
//       this.count++
//     }
//   }
// }
</script>

<template>
  <div class="rootContainer">
    <Home/>
    <Profile/>
  </div>
  <BottomNavbar msg="n" />
</template>

<style scoped lang="scss">
@import "@/scss/variable.scss";
.rootContainer{
  width: 100vw;
  background-image: linear-gradient(
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
  ),url("@/assets/background/home_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .rootContainer{
    width: 100vw;
    background-image: linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
    ),url("@/assets/background/home_bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
  }
}
</style>
