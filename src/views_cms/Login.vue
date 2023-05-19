<script setup>
  import {ref, onMounted} from "vue";
  import router from '../router';
  import {axiosGet} from '../network/AxiosHttps'
  import URLS from '../network/AxiosUrls'

  import {useLoginStore} from '../stores/LoginStore'
  import {useUtilStore} from '../stores/UtilStore'
  import {setLoginData, getLoginData} from "../utils/LocalStorage";

  const loginStore = useLoginStore();
  const utilStore = useUtilStore();
  // const router = useRouter();

  const username = ref("keps")
  const password = ref("keps")

  onMounted(()=>{
    getExistingLogin()
  })

  function getExistingLogin(){
    let loginData = getLoginData()
    alert(loginData.isLogin)
    if(loginData.isLogin){
      router.push({ name: 'InvitationList'})
    }
  }

  async function clickLogin(){
    if(this.username === "keps" && this.password === "keps"){
      let body = {
        username: this.username,
        password: this.password
      }
      let loginResponse = await axiosGet(URLS.LOGIN, null, null)
      if(loginResponse){
        setLoginData({
          username: "kepbzbzs",
          isLogin: true,
          exp: null
        })
        router.push({ name: 'InvitationList'})
      }
    }
    else {
      utilStore.showSnackbar("Password Salah")
    }
  }
</script>

<template>
  <v-container class="container-root ma-0 pa-0 d-flex">
      <v-card class="container-card ma-auto d-flex">
        <v-row class="ma-auto">
          <v-col class="ma-auto" cols="8" md="3">
            <v-img
                class="profileImage my-5"
                aspect-ratio="1"
                src="./src/assets/icon/wedding-ring.png"
            />
          </v-col>
          <v-col class="ma-auto" cols="12" md="6">
              <v-text-field
                  v-model="username"
                  label="Username"
              />
              <v-text-field
                  v-model="password"
                  label="Password"
              />
              <v-btn type="submit" block class="mt-2" @click="clickLogin()">Login</v-btn>
          </v-col>
        </v-row>
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
    min-width: 85vw;
    min-height: 50vh;
  }
}

@media (min-width: 1024px) {
  .container-card{
    min-width: 50vw;
    min-height: 50vh;
  }
}

</style>
