<template>
    <div v-if="isAuthenticated" class="container-fluid d-flex align-items-center justify-content-center" style="height: 90vh;">
        <p class="text-center fw-bold text-white animate__animated animate__bounce" style="font-size:xxx-large">Hello {{user?.displayName}}! Click on a navbar button to try the Vue Router out!</p>
    </div>
    <div v-else class="container-fluid d-flex align-items-center justify-content-center" style="height: 90vh;">
        <p class="text-center fw-bold text-white animate__animated animate__bounce" style="font-size:xxx-large">Click on a navbar button to try the Vue Router out!</p>
    </div>

</template>

<script setup>

import { user, isAuthenticated } from '../helpers/useAuth.js';

</script>