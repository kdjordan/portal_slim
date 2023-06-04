import axios from 'axios';
import * as LocalStorage from '@/LocalStorage.js';

const profile = LocalStorage.getStorage();

let apiClient;

if (profile) {
	apiClient = axios.create({
		baseURL: `${process.env.VUE_APP_BASE_URL}`,
		timeout: 5000
	});
}

export async function getProfile(accountId, token) {
	let { data } = await apiClient.get(
		`/v1/accounts/${accountId}`, 
		{
		headers : { Authorization: `Bearer ${token}` }
		})
	return data;
}

export async function getResources(accountId, token) {
	let { data } = await apiClient.get(
		`/v1/resourceGroups/${accountId}`,
		{
			headers : { Authorization: `Bearer ${token}` }
		})
	return data;
}

export async function getInvoices(accountId, token) {
	const { data } = await apiClient.get(
		`/v1/accounts/${accountId}/invoices`,
		{
			headers : { Authorization: `Bearer ${token}` }
		})
	return data;
}
