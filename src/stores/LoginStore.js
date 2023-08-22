// stores/counter.js
import { defineStore } from 'pinia'
import {getLoginData, setLoginData} from "../utils/LocalStorage";

export const useLoginStore = defineStore('loginStore', {
    state: () => {
        let loginData = {
            username: null,
            isLogin: null,
            exp: null
        }

        //populate with existing login data
        let existingLoginData = getLoginData()
        if(existingLoginData !== null){
            loginData = {
                username: existingLoginData.username,
                isLogin: existingLoginData.isLogin,
                exp: existingLoginData.exp
            }
        }

        return loginData
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        setLogin(loginData){
            this.username = loginData.username
            this.isLogin = loginData.isLogin
            this.exp = loginData.exp
            setLoginData(loginData.username, loginData.isLogin, loginData.exp)
        }
    },
    getters: {
        getLoginStatus: (state) => {
            return state.isLogin
        }
    }
})
