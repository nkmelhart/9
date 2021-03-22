import { createRouter, createWebHistory }
    from 'vue-router'

import Landing from './views/Landing.vue'
import Home from './views/Home.vue'
import Content from './views/Content.vue'
import Aboutus from './views/Aboutus.vue'
import Hellothere from './views/Hellothere.vue'
import Contactus from './views/Contactus.vue'
import Login from './views/Login.vue'
import Secret from './views/Secret.vue'
import Logout from './views/Logout.vue'
import NotFound from './views/NotFound.vue'
import Signup from './views/Signup.vue'
import Modal from './views/Modal.vue'

import { isAuthenticated } from './helpers/useAuth.js'

const routes = [
    { path: '/', component: Landing },
    { path: '/Home', component: Home },
    { path: '/Content', component: Content },
    { path: '/AboutUs', component: Aboutus },
    { path: '/HelloThere', component: Hellothere },
    { path: '/ContactUs', component: Contactus },
    { path: '/Login', component: Login },
    { path: '/Signup', component: Signup },
    {
        path: '/Secret', component: Secret,
        beforeEnter: (to, from) => {
            if (isAuthenticated.value) return true
            return '/Login'
        },
    },
    {
        path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound
    },
    { path: '/Logout', component: Logout },
    { path: '/Modal', component: Modal },
]

export const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes
})