<script>
import Home from './views_style_golde/Home.vue'
import Profile from "./views_style_golde/Profile.vue";
import Venue from "./views_style_golde/Venue.vue";
import Reservation from "./views_style_golde/Reservation.vue";
import Countdown from "./views_style_golde/Countdown.vue";

import BottomNavbar from './components/BottomNavbar.vue'

import Sample01 from './assets/music/sample01.mp3'

const audioPlayer = new Audio(Sample01)

export default {
  components: {
    Home,
    Profile,
    Venue,
    Reservation,
    Countdown,
    BottomNavbar
  },
  data() {
    return {}
  },
  mounted() {
    this.playSound(true);
  },
  methods: {
    playSound(playStatus){
      if(playStatus){
        const audio = new Audio(Sample01);
        audio.play()
      }
    }
  },
}
</script>

<template>
  <div class="rootContainer">
    <Home/>
    <Profile/>
    <Venue/>
    <Reservation/>
    <Countdown/>
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
  padding-bottom: 50px;
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
    padding-bottom: 50px;
  }
}
</style>
