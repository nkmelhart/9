<template>
<!-- <div class="container mt-3 b-round shadow">
  <Navbar />
    <Main>
      <router-view />
    </Main>
</div> -->

<Navbar v-if="amIInLogout === false"/>
    <Main>
      <router-view />
    </Main>
  
</template>

<script>

import Navbar from './components/Navbar.vue'
import Main from './components/Main.vue'
import { isInLogout } from './helpers/inLogout.js'

export default {
  name: 'App',
  components: {
    Navbar,
    Main,
    isInLogout,
  },
  computed: {
    amIInLogout() {
      return isInLogout.value
    }
  }
}

</script>

<style scoped>

.b-round {
  background-image: url('./assets/3357954.jpg');
  height: 95vh;
  overflow: hidden;
}

</style>