<template>
    <div>
    <h3 class="text-white">Logout Successful. Redirecting to home page in {{counter}} seconds...</h3>
    </div>
</template>

<script>

import { isInLogout } from '../helpers/inLogout.js' 

export default {
    
    data () {
        return {
            counter: 3,
            thisRoute: this.$route.path
        }
    },
    created () {
        isInLogout.value = true
        setInterval( () => this.counter--, 1000)
        setTimeout( () => {this.$router.push('/Home'); isInLogout.value = false} , 3000 )
        
        }
    }


</script>