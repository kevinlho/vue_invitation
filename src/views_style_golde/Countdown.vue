<script setup>

</script>

<template>
  <div class="rootContainer">
    <div class="textQuotes">
      <div class="text-h5">Countdown to</div>
      <div class="text-h3">Our Happy Day</div>
      <div class="countdownContainer">
        <div>
          <div class="text-h4">000</div>
          <div class="text-h6">Days</div>
        </div>
        <div>
          <div class="text-h4">00</div>
          <div class="text-h6">Hours</div>
        </div>
        <div>
          <div class="text-h4">00</div>
          <div class="text-h6">Minutes</div>
        </div>
        <div>
          <div class="text-h4">00</div>
          <div class="text-h6">Seconds</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/variable.scss";

@media (max-width: 1023px) {
  .rootContainer{
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
}

@media (min-width: 1024px) {
  .rootContainer{
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
