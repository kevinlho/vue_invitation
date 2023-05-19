<script>
export default {
  components:{},
  data(){
    return{
      invitationName: ""
    }
  },
  mounted() {
    this.getQueryParams()
  },
  computed:{},
  methods:{
    getQueryParams(){
      let invitationParams = this.$route.query.invitation
      if(invitationParams !== null && invitationParams !== undefined){
        this.invitationName = invitationParams
      }
    },
    redirectToHome(){
      this.$router.push({name: 'Home'})
    },
  },
}
</script>

<template>
<!--  <HeartHeader/>-->
  <div class="ma-0 pa-0 container-root d-flex">
    <v-card class="container-card ma-auto">
      <v-row>
        <v-col cols="12" md="4">
          <v-img
              class="ma-auto"
              width="60vw"
              aspect-ratio="0.75"
              cover
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          />
        </v-col>
        <v-col class="container-details" cols="12" md="8">
          <div class="text-h3"><div class="creattionFonts text-center">Kevin & Tiffany</div></div>
          <div class="text-center">Dear</div>
          <div class="text-center font-weight-bold">{{invitationName}}</div>
          <v-btn
              class="text-none align-center justify-center my-5 button-invitation"
              prepend-icon="mdi-email-outline"
              @click="redirectToHome()"
          >

            Open Invitation
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/variable.scss";

@media (max-width: 1023px) {
  .container-root{
    width: 100vw;
    height: 100vh;
    background-color: $profile_bg;
  }


  .container-card{
    background-color: $home_card;
    width: 90vw;
    min-height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 25% 25% 10px 10px;
    padding: 30px 15px 30px 15px;
  }

  .container-details{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  .button-invitation{
    background-color: $landing_button;
  }

  imageSize{
    width: 60vw;
    height: 80vh;
  }
}

@media (min-width: 1024px) {
  .container-root{
    width: 100vw;
    height: 100vh;
    background-color: $profile_bg;
  }


  .container-card{
    background-color: $home_card;
    width: 85vw;
    height: 85vh;
    display: flex;
    flex-direction: row;
    padding : 10px 20px 20px 10px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }

  .container-details{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  .button-invitation{
    background-color: $landing_button;
  }

  imageSize{
    width: 45vw;
    height: 60vh;
  }
}
</style>
