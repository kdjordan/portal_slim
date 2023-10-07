<template>
	<div class="container mx-auto px-4 h-full mt-32">
		<div
			class="flex content-center items-center justify-center h-full"
		>
			<div class="w-full lg:w-6/12 px-4">
				<div
					class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
				>
					<div class="rounded-t mb-0 px-6 py-6">
						<div class="text-center mb-3">
							<h6 class="text-blueGray-500 text-xl font-bold">
								PAY WITH PAYPAL
							</h6>
							<hr
								class="h-px my-8 bg-red-400 border-0 dark:bg-red-400"
							/>
						</div>
					</div>
					<div class="flex-auto px-4 lg:px-10 py-10 pt-0">
						<form submit.prevent="handleSubmit">
							<div class="relative w-3/4 my-3">
								<label
									class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
									htmlFor="grid-password"
								>
									Amount
								</label>
								<input
									type="text"
									class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder="$"
									v-model="amount"
								/>
							</div>
						</form>
						<div>
							<!-- PayPal Logo -->
							<table
								border="0"
								cellpadding="10"
								cellspacing="0"
								align="center"
							>
								<tr>
									<td align="center"></td>
								</tr>
								<tr>
									<td align="center">
										<a
											href="https://www.paypal.com/c2/webapps/mpp/home?locale.x=en_C2"
											title="Check out with PayPal"
											onclick="javascript:window.open('https://www.paypal.com/c2/webapps/mpp/home?locale.x=en_C2','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"
											><img
												src="https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/C2/logos-buttons/44_Blue_CheckOut_Pill_Button.png"
												alt="Check out with PayPal"
										/></a>
									</td>
								</tr>
							</table>
							<!-- PayPal Logo -->
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
		></div>
	</div>
</template>
<script>
	import paypal from '@/assets/img/paypal.svg';
	import stripe from '@/assets/img/stripe.svg';

	export default {
		data() {
			return {
				paypal,
				stripe,
				amount: '',
			};
		},
		methods: {
			handleSubmit() {
				console.log('sending ', this.amount);
			},
		},
	};
</script>
