// stores/counter.js
import { defineStore } from 'pinia'
import {getLoginData, setLoginData} from "../utils/LocalStorage";

export const useLoginStore = defineStore('loginStore', {
    state: () => {
        return {
            username : getLoginData(),
            isLogin: false
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        setLogin(loginData){
            setLoginData(loginData)
            this.isLogin = true
        }
    },
})
