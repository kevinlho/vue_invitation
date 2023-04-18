<script>
import Home from './views_style_golde/Home.vue'
import Profile from "./views_style_golde/Profile.vue";
import Venue from "./views_style_golde/Venue.vue";
import Reservation from "./views_style_golde/Reservation.vue";
import Countdown from "./views_style_golde/Countdown.vue";
import Gift from "./views_style_golde/Gift.vue";

import BottomNavbar from './components/BottomNavbar.vue'
import SoundPlayer from './components/SoundPlayer.vue'

export default {
  components: {
    Home,
    Profile,
    Venue,
    Reservation,
    Countdown,
    Gift,
    BottomNavbar,
    SoundPlayer
  },
  data() {
    return {
      sound:{
        play: false,
        duration: 0
      }
    }
  },
  mounted() {},
  methods: {},
}
</script>

<template>
  <div class="rootContainer">
    <Home/>
    <Profile/>
    <Venue/>
    <Reservation/>
    <Countdown/>
    <Gift/>
  </div>
  <SoundPlayer/>
  <BottomNavbar msg="n" />
</template>

<style scoped lang="scss">
@import "@/scss/variable.scss";

.rootContainer{
  width: 100vw;
  background-image: linear-gradient(
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0)
  ),url("@/assets/background/orchid_bg.png");
  background-color: $home_bg;
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
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0)
    ),url("@/assets/background/orchid_bg.png");
    background-color: $home_bg;
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
