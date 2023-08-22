import {createRouter, createWebHistory} from 'vue-router'

import CMSLogin from '../views_cms/Login.vue'
import InventoryList from '../views_cms/InventoryList.vue'
import InventoryAdd from '../views_cms/InventoryAdd.vue'
import InventoryEdit from '../views_cms/InventoryEdit.vue'

import {useLoginStore} from '../stores/LoginStore'

const router = createRouter({
    routes:[
        {
            name: 'Login',
            path: '/',
            component: CMSLogin
        },
        {
            name: 'InventoryList',
            path: '/inventory/list',
            component: InventoryList,
            meta:{
                requireAuth: true
            }
        },
        {
            name: 'InventoryAdd',
            path: '/inventory/add',
            component: InventoryAdd,
            meta:{
                requireAuth: true
            }
        },
        {
            name: 'InventoryEdit',
            path: '/inventory/edit',
            component: InventoryEdit,
            meta:{
                requireAuth: true
            }
        },
    ],
    history: createWebHistory()
})

router.beforeEach((to, from, next)=>{
    if (to.meta.requireAuth) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        // console.log(to.meta.requireAuth)
        const loginStore = useLoginStore();
        if(loginStore.isLogin === false){
            next({ name: 'Login' })
        }
        else {
            next()
        }
    } else {
        next() // does not require auth, make sure to always call next()!
    }
})

export default router
