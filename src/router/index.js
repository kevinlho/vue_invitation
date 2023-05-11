import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import InvitationLanding from '../views_style_golde/InvitationLanding.vue'
import Invitation from '../views_style_golde/Invitation.vue'

import CMSLogin from '../views_cms/Login.vue'
import CMSInvitationList from '../views_cms/InvitationList.vue'
import {useLoginStore} from '../stores/LoginStore'

const router = createRouter({
    routes:[
        {
            name: 'InvitationLanding',
            path: '/',
            component: InvitationLanding
        },
        {
            name: 'Home',
            path: '/home',
            component: Invitation
        },
        {
            name: 'Login',
            path: '/login',
            component: CMSLogin
        },
        {
            name: 'InvitationList',
            path: '/invitationList',
            component: CMSInvitationList,
            meta:{
                requireAuth: true
            }
        },
    ],
    history: createWebHashHistory()
})

router.beforeEach((to, from, next)=>{
    // const loginStore = useLoginStore();
    if (to.meta.requireAuth) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        // if(!loginStore.isLogin){
        //     next({route: '/login'})
        // }
        // else {
        //     next()
        // }
        next()
    } else {
        next() // does not require auth, make sure to always call next()!
    }
})

export default router
