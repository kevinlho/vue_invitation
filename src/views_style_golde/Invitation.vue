<script>
import Home from './Home.vue'
import Profile from "./Profile.vue";
import Venue from "./Venue.vue";
import Reservation from "./Reservation.vue";
import Countdown from "./Countdown.vue";
import Gift from "./Gift.vue";
import Gallery from "./Gallery.vue";
import HealthProtocol from "./HealthProtocol.vue";
import InstagramFilter from "./InstagramFilter.vue";
import Thankyou from "./ThankyouPage.vue";

import BottomNavbar from '../components/BottomNavbar.vue'
import SoundPlayer from '../components/SoundPlayer.vue'

export default {
  components: {
    Home,
    Profile,
    Venue,
    Reservation,
    Countdown,
    Gift,
    Gallery,
    HealthProtocol,
    InstagramFilter,
    Thankyou,
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
    <Gallery/>
    <HealthProtocol/>
    <InstagramFilter/>
    <Thankyou/>
  </div>
  <SoundPlayer/>
<!--  <BottomNavbar msg="n" />-->
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
