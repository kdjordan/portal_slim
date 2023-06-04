<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	import { useStore } from 'vuex';
	import * as LocalStorage from '@/LocalStorage.js';

	export default {
		async created() {
			/* populate all data with API calls */
			const store = useStore();
			const profile = LocalStorage.getStorage();
			if (profile) {
				// console.log('refreshing @@@@@@', profile);
				store.commit('SET_TOKEN', profile.token);
				store.commit('SET_ID', profile.userData.accountId);
				store.commit('SET_PAYPAL_ID', profile.userData.paypalId);
			}
		},
	};
</script>
