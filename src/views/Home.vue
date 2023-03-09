<script setup>
defineProps({
  home: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="root-container">
    <div>
      <span>The Wedding of</span>
    </div>
    <div>
      <span>Test Nama Panjang 0303erkoe & test nama juielelei iej</span>
    </div>
    <div>
      <span>tanggal ny bos</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/variable.scss";
.root-container{
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (min-width: 1024px) {
  .root-container{
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
