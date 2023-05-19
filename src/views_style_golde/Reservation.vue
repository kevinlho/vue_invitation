<script>

export default {
  components:{},
  data(){
    return{
      reservation:{
        name: "",
        wishes: "",
        willAttend: null,
        noOfAttendees: 0
      },
      wishes:[
        {
          name: "Kevin Susanto",
          comment: "HAPPY WEDDINGGGG HAPPY WEDDINGGGG HAPPY WEDDINGGGGHAPPY WEDDINGGGGHAPPY WEDDINGGGG HAPPY WEDDINGGGGHAPPY WEDDINGGGG HAPPY WEDDINGGGG HAPPY WEDDINGGGG"
        },
        {
          name: "Kevin Susanto",
          comment: "HAPPY WEDDINGGGG"
        },
        {
          name: "Kevin Susanto",
          comment: "HAPPY WEDDINGGGG"
        },
        {
          name: "Kevin Susanto",
          comment: "HAPPY WEDDINGGGG"
        },
        {
          name: "Kevin Susanto",
          comment: "HAPPY WEDDINGGGG"
        },
        {
          name: "Kevin Susanto",
          comment: "HAPPY WEDDINGGGG"
        },
        {
          name: "Kevin Susanto",
          comment: "HAPPY WEDDINGGGG"
        },
        {
          name: "Kevin Susanto",
          comment: "HAPPY WEDDINGGGG"
        },
        {
          name: "Kevin Susanto",
          comment: "HAPPY WEDDINGGGG"
        }
      ],
      items: Array.from({ length: 1000 }, (k, v) => v + 1),
    }
  },
  mounted() {},
  methods:{},
  computed:{
    temtems(){
      return[
          "1","2","3"
      ]
    }
  }
}
</script>

<template>
  <v-container class="ma-0 pa-0 container-root">
    <v-card class="container-card my-5">
      <div>
        <p class="text-center creattionFonts headerText">Reservation</p>
        <div class="container-card-outer py-5">
          <v-card class="container-card-inner-form my-6 mx-4">
            <v-col>
              <p>Please kindly help us prepare everything better by confirming your attendance to our wedding event with the following RSVP form:</p>
              <v-form>
                <v-container>
                  <v-text-field
                      v-model="reservation.name"
                      label="First name"
                      required
                  />
                  <v-textarea
                      v-model="reservation.wishes"
                      label="Wishes"
                      clearable
                      required
                  />
                  <p>Will you attend?</p>
                  <v-radio-group v-model="reservation.willAttend">
                    <v-radio label="Yes" value="yes"></v-radio>
                    <v-radio label="No" value="no"></v-radio>
                  </v-radio-group>

                  <p>No of Guest</p>
                  <v-radio-group v-model="reservation.noOfAttendees">
                    <v-radio label="1" value="1"></v-radio>
                    <v-radio label="2" value="2"></v-radio>
                  </v-radio-group>

                  <v-btn block>
                    Send
                  </v-btn>
                </v-container>
              </v-form>
            </v-col>
          </v-card>
          <v-card class="container-card-inner-comment my-6 mx-4 py-2 overflow-auto">
            <v-card class="container-card-comment mx-3 my-2 pa-2" v-for="item in wishes">
              <p class="py-2 font-weight-bold">{{item.name}}</p>
              <p class="py-2">{{item.comment}}</p>
            </v-card>
          </v-card>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<style scoped lang="scss">
@import "@/scss/variable.scss";

@media (max-width: 1023px) {
  .container-root{
    min-width: 100vw;
    background-color: $profile_bg;
  }

  .container-card{
    background-color: $venue_card_inner;
    max-width: 90vw;
    margin: auto;
  }

  .container-card-outer{
    max-width: 80vw;
    border-radius: 20px;
    margin: auto;
  }

  .container-card-inner-form{
  }


  .container-card-inner-comment{
  }

  .container-card-comment{
    background-color: $reservation_card_comment;
  }

  .button-direction{
    background-color: #3a3a3a;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
  }
}

@media (min-width: 1024px) {
  .container-root{
    min-width: 100vw;
    background-color: $profile_bg;
  }

  .container-card{
    background-color: $venue_card_inner;
    max-width: 85vw;
    margin: auto;
    padding-bottom: 25px;
  }

  .container-card-outer{
    display: flex;
    flex-direction: row;
    max-width: 80vw;
    justify-content: center;
    border-radius: 20px;
    margin: auto;
  }

  .container-card-inner-form{
    width: 45vw;
  }

  .container-card-inner-comment{
    width: 45vw;
    max-height: 100vh;
  }

  .container-card-comment{
    background-color: $reservation_card_comment;
  }

  .button-direction{
    background-color: #3a3a3a;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
  }
}
</style>
