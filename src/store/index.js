import { createStore } from 'vuex';
import { getProfile, getResources, getInvoices } from '@/Api.js';
console.log('loaded store ******************************')

export default createStore({
	state: {
		status: 'loading',
		token: '',
		invoices: [],
		profile: {},
		accountId: null,
		paypalId : null,
		resources: {},
		errors: null,
	},
	getters: {
		GET_INVOICES(state) {
			return state.invoices;
		},
		GET_TOKEN(state) {
			return state.token;
		},
	},
	mutations: {
		SET_ID(state, payload) {
			console.log('setting id', payload);
			state.accountId = payload;
		},
		SET_PAYPAL_ID(state, payload) {
			console.log('setting paypal', payload);
			state.paypalId = payload;
		},
		SET_INVOICES(state, invoices) {
			state.invoices = invoices;
		},
		SET_PROFILE(state, invoices) {
			state.profile = invoices;
		},
		SET_RESOURCES(state, payload) {
			state.resources = payload;
		},
		SET_STATUS(state, payload) {
			state.status = payload;
		},
		SET_TOKEN(state, payload) {
			console.log('setting token', payload);
			state.token = payload;
		},
		SET_ERROR(state, payload) {
			console.log('setting error', payload);
			state.errors = payload;
		},
	},
	actions: {
		//action to retrieve data for Settings View
		async loadSettings({ commit, state }) {
			console.log('trying to hit API')
			console.log('state is ', state.accountId, state.token);
			try {
				commit('SET_STATUS', 'loading');
				const profileData = await getProfile(state.accountId, state.token);
				const resourseData = await getResources(state.accountId, state.token);
				commit('SET_RESOURCES', resourseData);
				commit('SET_PROFILE', profileData);
				commit('SET_STATUS', 'success');
			} catch (e) {
				console.log('got an error ', e.message);
				commit('SET_ERROR', { type: 'settings', mssg: e.message });
				console.log('setError', this.state.errors);
				commit('SET_STATUS', 'error');
			}
		},
		async loadInvoices({ commit, state }) {
			//action to retrieve data for Invoices View
			try {
				commit('SET_STATUS', 'loading');
				const data = await getInvoices(state.accountId, state.token);
				console.log('got invoice data', data);
				commit('SET_INVOICES', data._embedded.invoices);
				commit('SET_STATUS', 'success');
			} catch (e) {
				console.log('got an error ', e.message);
				commit('SET_ERROR', { type: 'invoice', mssg: e.message });
				console.log('setError', this.state.errors);
				commit('SET_STATUS', 'error');
			}
		},
		async loadProfile({ commit }) {
			try {
				commit('SET_LOADING', true);
				console.log('calling load profile ***');
				const data = await getProfile();
				console.log('got data', data);
				commit('SET_PROFILE', data);
				commit('SET_LOADING', false);
			} catch (e) {
				console.log('got an error ', e.message);
				commit('SET_ERROR', { type: 'profile', mssg: e.message });
				console.log('setError', this.state.errors);
				commit('SET_LOADING', false);
			}
		},
		async loadResources({ commit }) {
			try {
				commit('SET_LOADING', true);
				console.log('calling load resources');
				const data = await getResources();
				console.log('got resources', data);
				commit('SET_RESOURCES', data);
				commit('SET_LOADING', false);
			} catch (e) {
				console.log('got an error ', e.message);
				commit('SET_ERROR', { type: 'resources', mssg: e.message });
				console.log('setError', this.state.errors);
				commit('SET_LOADING', false);
			}
		},
	},
});

// /v3/api-docs
