<script>
import {URLS, axiosGet} from "../network/AxiosHttps";

import {Inventory} from '../model/inventory'

export default {
  components:{
  },
  data(){
    return{
      inventoryDetails: {
        name: "",
        category: "",
        quantity: 0,
        quantityDesc: "",
        storage: ""
      }
    }
  },
  mounted() {
    if(this.$route.meta.requireAuth === false){
      alert("Mohon login terlebih dahulu!")
    }
  },
  methods:{
    getInvitationList(){
      //Todo: get invitation details here
    },
    editInventory(inventoryData){
      //update inventory logic
    }
  },
  computed:{}
}
</script>

<template>
  <v-container>
    <v-card class="d-flex flex-column pa-10 align-self-center">
      <span class="mb-10 align-self-center">Edit Inventory</span>
      <v-row>
        <v-text-field
            :model-value="inventoryDetails.name"
            label="Name"
            variant="outlined"
        />
      </v-row>
      <v-row>
        <v-text-field
            :model-value="inventoryDetails.category"
            label="Category"
            variant="outlined"
        />
      </v-row>
      <v-row>
        <v-text-field
            :model-value="inventoryDetails.quantity"
            label="Quantity"
            variant="outlined"
        />
      </v-row>
      <v-row>
        <v-text-field
            :model-value="inventoryDetails.quantityDesc"
            label="Description"
            variant="outlined"
        />
      </v-row>
      <v-row>
        <v-text-field
            :model-value="inventoryDetails.storage"
            label="Storage"
            variant="outlined"
        />
      </v-row>
      <v-btn style="color: black; max-width: 128px; align-self: center" class="mt-5">Submit</v-btn>
    </v-card>
  </v-container>
</template>

<style scoped lang="scss">

.container-root{
  width: 100vw;
  height: 100vh;
}

@media (max-width: 1023px) {
  .container-card{
  }
}

@media (min-width: 1024px) {
  .container-card{
  }
}

</style>
