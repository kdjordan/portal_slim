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
			console.log('refreshing @@@@@@', LocalStorage);
			const { token, accountId } = LocalStorage.getStorage();
			store.commit('SET_TOKEN', token);
			store.commit('SET_ID', accountId);
		},
	};
</script>
