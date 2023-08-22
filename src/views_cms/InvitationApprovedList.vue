<script>
export default {
  components:{},
  data(){
    return{
      invitation:[
        {
          name: "keps",
          willAttend: "yes",
          noOfAttendees: "2",
          comment: "Neque porro quisquam est qui dolorem ipsum quiae Neque porro quisquam est qui dolorem ipsum quiae eq"
        },
        {
          name: "keps",
          willAttend: "yes",
          noOfAttendees: "2",
          comment: "Neque porro quisquam est qui dolorem ipsum quiae Neque porro quisquam est qui dolorem ipsum quiae eq"
        },
        {
          name: "keps",
          willAttend: "yes",
          noOfAttendees: "2",
          comment: "Neque porro quisquam est qui dolorem ipsum quiae Neque porro quisquam est qui dolorem ipsum quiae eq"
        },
        {
          name: "keps",
          willAttend: "yes",
          noOfAttendees: "2",
          comment: "Neque porro quisquam est qui dolorem ipsum quiae Neque porro quisquam est qui dolorem ipsum quiae eq"
        },
        {
          name: "keps",
          willAttend: "yes",
          noOfAttendees: "2",
          comment: "Neque porro quisquam est qui dolorem ipsum quiae Neque porro quisquam est qui dolorem ipsum quiae eq"
        },
        {
          name: "keps",
          willAttend: "yes",
          noOfAttendees: "2",
          comment: "Neque porro quisquam est qui dolorem ipsum quiae Neque porro quisquam est qui dolorem ipsum quiae eq"
        }
      ]
    }
  },
  mounted() {
    console.log(this.$route.meta.requireAuth)
  },
  methods:{
    getInvitationList(){
      //todo get listinvitation
      this.invitation = [
        {
          name: "keps",
          willAttend: "yes",
          noOfAttendees: "2",
          comment: "Neque porro quisquam est qui dolorem ipsum quiae Neque porro quisquam est qui dolorem ipsum quiae eq"
        }
      ]
    },
    attendClickListener(){
      //to do post attend
      alert("attend")
    },
    deleteClickListener(){
      //to do delete invitation record
      alert("delete")
    }
  },
  computed:{}
}
</script>

<template>
  <div class="container-root ma-0 pa-0" style="background-color: white">
    <v-btn block class="mt-2" @click="getInvitationList">Refresh</v-btn>
      <v-table>
        <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            AttendStatus
          </th>
          <th class="text-left">
            AttendNo
          </th>
          <th class="text-left">
            Comment
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="(item, index) in invitation"
            :key="index"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.willAttend }}</td>
          <td>{{ item.noOfAttendees }}</td>
          <td>{{ item.comment }}</td>
          <td><v-btn block class="mt-2" @click="attendClickListener">Attend</v-btn></td>
          <td><v-btn block class="mt-2" @click="deleteClickListener">Delete</v-btn></td>
        </tr>
        </tbody>
      </v-table>
  </div>
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
