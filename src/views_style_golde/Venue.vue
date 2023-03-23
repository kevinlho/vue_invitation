<script setup>

</script>

<template>
  <div class="rootContainer">
    <div class="venueInformation">
      <div>Where & When</div>
      <div>Wedding Day</div>
      <div>Random Quotes Random Quotes Random Quotes Random Quotes</div>
      <div>-Random Quotes</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/variable.scss";

@media (max-width: 1023px) {
  .rootContainer{
    width: 100vw;
    min-height: 100vh;
    padding-top: 15vh;
    background-color: $profile_bg;
  }

  .textQuotes{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: red;
  }

  .countdownContainer{
    width: 80vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 5vh;
  }

  .countdownText{}

  .countdownContainer div div{
    display: flex;
    justify-content: center;
  }

  .venueInformation{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

@media (min-width: 1024px) {
  .rootContainer{
    width: 100vw;
    min-height: 100vh;
    padding-top: 5vh;
    background-color: $profile_bg;
  }

  .textQuotes{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .countdownContainer{
    width: 50vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10vh;
  }

  .countdownContainer div div{
    display: flex;
    justify-content: center;
    padding: 0 20px 0 20px;
  }
}
</style>
