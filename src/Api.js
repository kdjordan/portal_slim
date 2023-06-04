import axios from 'axios';

let apiClient = axios.create({
	baseURL: `${process.env.VUE_APP_BASE_URL}`,
	timeout: 8000
});

export async function getProfile(accountId, token) {
	console.log('getting profile ', accountId, token, apiClient)
	let { data } = await apiClient.get(
		`/v1/accounts/${accountId}`, 
		{
		headers : { Authorization: `Bearer ${token}` }
		})
	return data;
}

export async function getResources(accountId, token) {
	console.log('getting profile ', accountId, token)
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
