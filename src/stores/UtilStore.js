// stores/counter.js
import { defineStore } from 'pinia'

export const useUtilStore = defineStore('utilStore', {
    state: () => {
        return {
            snackbar:{
                title: "",
                duration: 1000,
                show: false
            }
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        showSnackbar(title){
            this.snackbar = {
                ...this.snackbar,
                title: title,
                show: true
            }
        }
    },
})
