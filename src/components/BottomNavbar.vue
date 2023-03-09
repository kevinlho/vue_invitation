<script setup>
defineProps({
  home: {
    type: String,
    required: false
  },
  profile: {
    type: String,
    required: false
  },
  calendar: {
    type: String,
    required: false
  },
  photo: {
    type: String,
    required: false
  },
  gift: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="root-container">
    <div class="imageChild">
      <img alt="Vue logo" class="imageClass" src="@/assets/icon/wedding-invitation.png"/>
    </div>
    <div class="imageChild">
      <img alt="Vue logo" class="imageClass" src="@/assets/icon/wedding-calendar.png"/>
    </div>
    <div class="imageChild">
      <img alt="Vue logo" class="imageClass" src="@/assets/icon/wedding-profile.png"/>
    </div>
    <div class="imageChild">
      <img alt="Vue logo" class="imageClass" src="@/assets/icon/wedding-camera.png"/>
    </div>
    <div class="imageChild">
      <img alt="Vue logo" class="imageClass" src="@/assets/icon/wedding-invitation.png"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/variable.scss";
.root-container {
  max-width: 80vw;
  background-color: $footer_bg;
  margin: auto;
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.root-container div{
  margin: 10px;
}

.imageChild{
  min-width: 25px;
  min-height: 25px;
}

.imageClass{
  width: 25px;
  height: 25px;
  margin-left: 5px;
  margin-right: 5px;
}

@media (min-width: 1024px) {
  .root-container {
    max-width: 65vw;
    background-color: $footer_bg;
    margin: auto;
    border-radius: 20px 20px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .imageChild{
    min-width: 40px;
    min-height: 40px;
  }

  .imageClass{
    width: 40px;
    height: 40px;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
