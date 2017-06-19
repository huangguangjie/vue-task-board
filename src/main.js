import Vue from 'vue';
import App from './app';
import router from './router'
import store from './store'

new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
});
