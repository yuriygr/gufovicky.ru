//import 'es6-promise/auto'
import Vue from 'vue'
import App from '@/components/App'

// some styles
import '@/assets/reset.css'
import '@/assets/style.css'

// create the app instance.
const app = new Vue({
	...App
})

// actually mount to DOM
app.$mount('#app')