<script setup>
import HeartHeader from '@/components/HeartHeader.vue'

</script>

<template>
  <div>
    <HeartHeader/>
    <div class="rootContainer">
      <div class="textQuotes">
        <div class="text-h5">The Beloved</div>
        <div class="text-h3">Groom & Bride</div>
        <div>
          <div>Random Quotes Random Quotes Random Quotes Random Quotes</div>
          <div>
            <span class="align-center">-SI RANDOM</span>
          </div>
        </div>
      </div>
      <div class="profileContainer">
        <div>
          <v-img
              class="profileImage"
              width="30vw"
              height="40vw"
              cover
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          />
          <div style="padding-top: 15px">
            <div class="text-h6">Groom's Name</div>
            <div class="borderSeperator"/>
            <div>
              <span>Son of</span>
            </div>
            <div>
              <span>Groom's Father</span>
            </div>
            <div>
              <span>Groom's Mother</span>
            </div>
          </div>
        </div>
        <div class="flex-grow-0">
          <span>&</span>
        </div>
        <div>
          <v-img
              class="profileImage"
              width="30vw"
              height="40vw"
              cover
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          />
          <div style="padding-top: 15px">
            <div>
              <span class="text-h6">Bride's Name</span>
            </div>
            <div class="borderSeperator"/>
            <div>
              <span>Daughter of</span>
            </div>
            <div>
              <span>Bride's Father</span>
            </div>
            <div>
              <span>Bride's Mother</span>
            </div>
          </div>
        </div>
      </div>
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

  .profileContainer{
    width: 100vw;
    display: flex;
    flex-direction: row;
    padding-bottom: 15vh;
  }

  .profileContainer div{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: red;
  }

  .profileImage{
    border-radius: 10px;
  }

  .borderSeperator{
    width: 35vw;
    height: 3px;
    background-color: #3a3a3a;
    margin-top: 3vh;
    margin-bottom: 3vh;
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

  .profileContainer{
    width: 100vw;
    display: flex;
    flex-direction: row;
    padding-bottom: 15vh;
  }

  .profileContainer div{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .profileImage{
    border-radius: 10px;
  }

  .borderSeperator{
    width: 35vw;
    height: 3px;
    background-color: #3a3a3a;
    margin-top: 3vh;
    margin-bottom: 3vh;
  }
}
</style>
