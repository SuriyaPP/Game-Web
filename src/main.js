import { createApp } from 'vue'
import App from './App.vue'
//import header from './components/Header'
import router from './router'












const app = createApp(App)

//Vue.component('myHeader', Header)
app.use(router)

app.mount('#app')
