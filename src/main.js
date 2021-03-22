import { createApp } from 'vue'
import App from './App.vue'
import '../css/styles.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/popper.js/dist/popper.min.js'
import '../node_modules/animate.css/animate.min.css'
import { router } from './router.js'
import '../node_modules/@fortawesome/fontawesome-free/js/all.js'
import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
