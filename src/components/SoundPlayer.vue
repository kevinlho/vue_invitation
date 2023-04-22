<script setup>
import {onMounted} from 'vue';

import SelectedMusic from '../assets/music/beautiful_in_white.mp3'

const audioPlayer = new Audio(SelectedMusic)

defineProps({
  audioPlayerCallback: {
    type: String,
    required: false
  }
})

let data = {
  audioPlayer:{
    isPlaying: false,
    duration: 0
  }
}

onMounted(() => {
  // audioPlayer.loop = true;
  // clickPlay()
})

function clickPlay(){
  if(audioPlayer.paused){
    audioPlayer.play()
  }
  else {
    audioPlayer.pause()
  }
}

</script>

<template>
  <v-container class="root-container align-content-center">
    <div style="background-color: white; border-radius: 50%">
      <v-icon
          @click="clickPlay"
          class="align-center justify-center pa-0 ma-0"
          color="black"
          icon="mdi-play"
          size="50"
      />
    </div>
  </v-container>
</template>

<style scoped lang="scss">
@import "@/scss/variable.scss";
.root-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  margin: 0 0 15px 15px;
  position: fixed;
  bottom: 0;
  left: 0;
}

@media (min-width: 1024px) {
  .root-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    margin: 0 0 15px 15px;
    position: fixed;
    bottom: 0;
    left: 0;
  }
}
</style>
