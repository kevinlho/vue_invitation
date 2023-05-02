import {createRouter, createWebHashHistory} from 'vue-router'
import Invitation from '../Invitation.vue'

import CMSLogin from '../views_cms/Login.vue'
import CMSInvitationList from '../views_cms/InvitationList.vue'

const router = createRouter({
    routes:[
        {
            name: 'home',
            path: '/',
            component: Invitation
        },
        {
            name: 'login',
            path: '/login',
            component: CMSLogin
        },
        {
            name: 'invitation',
            path: '/invitation',
            component: CMSInvitationList,
            meta:{
                requireAuth: true
            }
        },
    ],
    history: createWebHashHistory(),
})

router.beforeEach((to, from, next)=>{
    console.log(to)
    if (to.meta && to.meta.requireAuth) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        // if (!store.getters.isLoggedIn) {
        //     next({ name: 'Login' })
        // } else {
        //     next() // go to wherever I'm going
        // }
    } else {
        next() // does not require auth, make sure to always call next()!
    }
})

export default router
