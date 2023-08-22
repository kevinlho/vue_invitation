<script>
import {URLS, axiosGet} from "../network/AxiosHttps";

import {Inventory} from '../model/inventory'
import router from "../router/router";

export default {
  components:{},
  data(){
    return{
      inventory: [],
      inventoryDetails: new Inventory(),
      overlayShow: false,
      overlayData: {}
    }
  },
  mounted() {
    if(this.$route.meta.requireAuth === false){
      alert("Mohon login terlebih dahulu!")
    }
    else {
      this.getInvitationList()
    }
    this.refreshInventory()
  },
  methods:{
    getInvitationList(){
      axiosGet(URLS.INVITATION_LIST, null, null)
      .then((invitationList)=>{
        console.log(invitationList)
        // if(invitationList && invitationList.length > 0){
        //   this.invitation = invitationList
        // }
      })
    },
    refreshInventory(){
      //inventory Api Logic
      //inventory Dummy
      this.inventory = new Inventory().getListDummy()
    },
    detailClickListener(inventoryData){
      this.inventoryDetails = inventoryData
      this.overlayShow = true
    },
    addInventory(){
      router.push({name: 'InventoryAdd'})
    },
    editInventory(inventoryData){
      //update inventory logic
      router.push({name: 'InventoryEdit'})
    }
  },
  computed:{}
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col
          md="4"
          sm="12"
      >
        <v-text-field
            clearable
            label="Search"
            variant="outlined"
            prepend-icon="mdi-magnify"
            density="compact"
            style="min-width: 300px"
        />
      </v-col>
      <v-col
          v-show="this.$vuetify.display.mdAndUp"
          md="4"
          sm="0">
        <v-btn style="color: black" class="mr-2">Add Product</v-btn>
        <v-btn @click="refreshInventory()" style="color: black" class="ml-2">Refresh</v-btn>
      </v-col>
    </v-row>
    <v-table>
      <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Category
        </th>
        <th class="text-left">
          quantity
        </th>
        <th class="text-left">
          storage
        </th>
        <th class="text-left">
          qtyDesc
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="item in inventory"
          :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.quantity }}</td>
        <td>{{ item.storage }}</td>
        <td>{{ item.quantityDesc }}</td>
        <td><v-btn density="compact" icon="mdi-note-text" @click="editInventory(item)"/></td>
      </tr>
      </tbody>
    </v-table>
  </v-container>
  <v-overlay v-model="overlayShow" class="d-flex align-center justify-center">
    <v-card style="width: 75vw; height: 75vh; overflow-y: scroll" class="d-flex flex-column pa-10">
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
  </v-overlay>
<!--  <InventoryEdit :toggle-show-props="this.overlayShow" :inventory-props="{}"/>-->
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
