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
  <div class="footer">
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

<style scoped>
.footer {
  max-width: 90vw;
  background-color: lightgrey;
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

.footer div{
  margin: 10px;
}

.imageChild{
  min-width: 25px;
  min-height: 25px;
}

.imageClass{
  width: 25px;
  height: 25px;
}

@media (min-width: 1024px) {
  .footer {
    max-width: 70vw;
    background-color: lightgrey;
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
    min-width: 50px;
    min-height: 50px;
  }

  .imageClass{
    width: 50px;
    height: 50px;
  }
}
</style>
