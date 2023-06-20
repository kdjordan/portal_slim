<template>
  <div 
    class="flex flex-col  w-full shadow-lg rounded justify-center"
    :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
  >
    <div class="rounded-t mb-0 px-6 py-6 border-0  justify-start">
      <h6 class="text-blueGray-700 text-xl font-bold">Invoices : <span>{{  }}</span></h6>
    </div>
    <div v-if="status === 'loading'" class="p-4 margin-auto text-center">
      <Loading />
    </div>
    <div v-else class="block w-full overflow-x-auto">
      <!-- Invoices table -->
      <table class="w-full bg-transparent border-collapse bg-blueGray-50">
        <thead>
          <tr class="whitespace-nowrap">
            <th
              class="px-6 align-middle py-3 text-xs uppercase font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              ID
            </th>
            <th
              class="px-6 align-middle py-3 text-xs uppercase  font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
             INVOICE
            </th>
            <th
              class="px-6 align-middle py-3 text-xs uppercase  font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
             PERIOD
            </th>
            <th
              class="px-6 align-middle py-3 text-xs uppercase  font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
             INVOICE DATE
            </th>
            <th
              class="px-6 align-middle py-3 text-xs uppercase  font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
             INVOICE AMOUNT
            </th>
            <th
              class="px-6 align-middle py-3 text-xs uppercase  font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
             DUE DATE
            </th>
            <th
              class="px-6 align-middle py-3 text-xs uppercase  font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
             DOWNLOAD
            </th>
          </tr>
        </thead>  
        <tbody>
          <tr v-for="invoice in invoiceData.slice(0, 9)" :key="invoice"  class="whitespace-nowrap">
            <th 
              class="px-6 py-4 align-middle text-xs text-center"
            >
              <span
                class="ml-3 font-bold text-blueGray-600"
              >
                {{invoice.invoiceId}}
              </span>
            </th>
            <td
              class="px-6 py-4 align-middle text-xs  text-center"
              
            >
              {{invoice.numInvoice}}
            </td>
            <td
              class="px-6 py-4 align-middle text-xs  text-center"
              
            >
              {{invoice.period}}
            </td>
            <td
              class="px-6 py-4 align-middle text-xs  text-center"
              
            >
              {{invoice.endDate}}
            </td>
            <td
              class="px-6 py-4 align-middle text-xs  text-center"
              
            >
              {{invoice.amount}}
            </td>
            <td
              class="px-6 py-4 align-middle text-xs  text-center"
              
            >
              {{invoice.dueDate}}
            </td>
            <td
              class="px-6 py-4 align-middle text-xs  text-center"
            >
            <a :href="`https://billing-portal-api.glotell.sonoc.io/invoices/${invoice.invoiceId}/download`"  
                class="text-xl"
                target="_blank" 
                rel="noopener"
                
                > 
              &#8595;
            </a>
            </td>
          </tr>
         
          
        </tbody>
      </table>
    </div>
  <!-- {{ invoiceData }} -->
  </div>
</template>
<script>
import { mapState } from "vuex";
import Loading from "@/components/Loading.vue";


export default {
  components: {
    Loading
  },
  computed : mapState({
    invoiceData: state => state.invoices,
    status: state => state.status,
    errorStatus: state => state.error,
  }),
  props: {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
}

</script>
<style scoped>

tr:nth-child(odd) {
  background-color:whitesmoke;
}

a {
  color: rgba(71, 85, 105);
  padding: 5px 9px;
  border: 1px solid rgba(71, 85, 105); 
  border-radius: 50%;
  cursor: pointer;
}

a:hover {
  transition: all .4s ease;
  background-color: #29b4ff;
  opacity: 35%;
}
</style>
