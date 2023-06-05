import axios from 'axios';

export async function getProfile(accountId) {
	// console.log('getting profile ', accountId, axios.defaults.headers.common)
	let { data } = await axios.get(
		`/v1/accounts/${accountId}`,)
	
	return data;
}

export async function getResources(accountId, token) {
	// console.log('getting profile ', accountId, token)
	let { data } = await axios.get(
		`/v1/resourceGroups/${accountId}`,
		{
			headers : { Authorization: `Bearer ${token}` }
		})
	return data;
}

export async function getInvoices(accountId, token) {
	const { data } = await axios.get(
		`/v1/accounts/${accountId}/invoices`,
		{
			headers : { Authorization: `Bearer ${token}` }
		})
	return data;
}
