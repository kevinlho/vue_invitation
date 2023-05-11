// stores/counter.js
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('loginStore', {
    state: () => {
        return {
            username : "HEHJEIHJE",
            isLogin: false
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        setLogin(loginData){
            this.username = loginData
            this.isLogin = true
        }
    },
})
