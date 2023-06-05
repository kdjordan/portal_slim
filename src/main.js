// import { createApp } from "vue";
import { createApp } from 'vue';
import router from './router';
import authConfig from '../auth_config.json';
import { setupAuth } from './auth';
import store from './store';
import axios from 'axios';
import * as LocalStorage from '@/LocalStorage.js';

// styles

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/assets/styles/tailwind.css';

// mounting point for the whole app
import App from '@/App.vue';

const storedProfile = LocalStorage.getStorage();

if (storedProfile) {
	axios.defaults.headers.common['Authorization']= `Bearer ${storedProfile.token}`;
	axios.defaults.timeout = 8000;
    axios.defaults.baseURL = `${process.env.VUE_APP_BASE_URL}`

	store.commit('SET_TOKEN', storedProfile.token);
	store.commit('SET_ID', storedProfile.userData.accountId);
	if (storedProfile.userData.paypalId) {
		store.commit('SET_PAYPAL_ID', storedProfile.userData.paypalId);
	}
} 

function callbackRedirect(appState) {
	router.push(
		appState && appState.targetUrl
			? appState.targetUrl
			: '/admin/dashboard'
	);
}

setupAuth(authConfig, callbackRedirect).then((auth) => {
	createApp(App).use(auth).use(router).use(store).mount('#app');
	// App.use(auth).mount('#app')
});
