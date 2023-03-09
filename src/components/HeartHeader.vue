<script setup>
defineProps({})
</script>

<template>
  <div class="heartContainer">
    <div class="leftContent"/>
    <div class="rightContent"/>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/variable.scss";
.heartContainer{
  margin-bottom: -5px;
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
}

.heartContainer div{
  flex-grow: 1;
}

.leftContent {
  border-top-right-radius: 100%;
  background-color: $profile_bg;
}

.rightContent {
  border-top-left-radius: 100%;
  background-color: $profile_bg;
}

@media (min-width: 1024px) {
  .heartContainer{
    width: 100vw;
    height: 20vh;
    display: flex;
    flex-direction: row;
  }

  .heartContainer div{
    flex-grow: 1;
  }

  .leftContent {
    border-top-right-radius: 100%;
    background-color: $profile_bg;
  }

  .rightContent {
    border-top-left-radius: 100%;
    background-color: $profile_bg;
  }
}
</style>
