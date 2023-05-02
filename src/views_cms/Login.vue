<script>
export default {
  components:{},
  data(){
    return{
    }
  },
  mounted() {},
  methods:{},
  computed:{}
}
</script>

<template>
  <v-container class="ma-0 pa-0 container-root">

  </v-container>
</template>

<style scoped lang="scss">
@import "@/scss/variable.scss";

@media (max-width: 1023px) {
  .container-root{
    min-width: 100vw;
  }

  .container-card{
    background-color: $venue_card_inner;
    max-width: 90vw;
    margin: auto;
  }
}

@media (min-width: 1024px) {
  .container-root{
    min-width: 100vw;
  }
}

</style>
