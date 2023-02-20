import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/js/bootstrap.min'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'

    const app = createApp(App)
    app.use(router)
    app.use(VueSweetalert2);
    app.mount('#app')

