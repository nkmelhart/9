<template>
    <nav class="navbar navbar-expand-lg border-bottom bg-dark sticky-top">
        <div class="container">
        
        <router-link class="fw-bolder title" style="text-decoration: none" to="/"><i class="fas fa-route"></i> Vue Router</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class='collapse navbar-collapse mx-5 me-auto' id='navbarNav'>
                <ul class="navbar-nav mt-1 ">
                    <li class="nav-item mx-4">
                        <router-link to="/Home">Home</router-link>
                    </li>
                    <li class="nav-item mx-4">
                        <router-link to="/Content">Content</router-link>
                    </li>
                    <li class="nav-item mx-4">
                        <router-link to="/Aboutus">About Us</router-link>
                    </li>
                    <li class="nav-item mx-4">
                        <router-link to="/Hellothere">Hello There...</router-link>
                    </li>
                    <li class="nav-item mx-4">
                        <router-link to="/ContactUs">Contact Us</router-link>
                    </li>
                </ul>
          </div>
          <div>
              <button type="button" class="btn btn-outline-warning" v-if="!isAuthenticated"><router-link to="/Login" style="text-decoration: none" class="text-white">Login</router-link></button>
              <div v-else>
              <button type="button" class="btn btn-outline-warning me-2" @click="logout"><router-link to="/" style="text-decoration: none" class="text-white">Logout</router-link></button>
                <button type="button" class="btn btn-outline-warning me-2"><router-link to="/Secret" style="text-decoration: none" class="text-white">Secret</router-link></button>
              </div>
          </div>
        </div>
    </nav>
    
</template>

<script setup>

import { isAuthenticated, signOut } from '../helpers/useAuth.js'
import { useRouter } from 'vue-router'

const route = useRouter()

const logout = async () => {
    await signOut()
    route.push('/Logout')
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Play&display=swap');

.router-link-active {
    color: white;
    text-decoration: underline;
}

.btn-outline-warning {
    border-color: #8000FF;
}

.btn-outline-warning:hover {
    background-color: #8000FF;
}

nav {
    font-family: 'Play';
    font-size: 22px;
}

.title {
    font-size: 30px;
    color:#0080FF;
}

li a {
    text-decoration: none;
    color:#0080FF;
}
</style> 

