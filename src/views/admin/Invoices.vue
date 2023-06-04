<script>
import InvoiceTableSonoc from "@/components/Cards/InvoiceTableSonoc.vue";
import { useStore } from "vuex"


export default {
  components: {
    InvoiceTableSonoc,
  },
  async created() {
    const store = useStore()
    await store.dispatch('loadInvoices')
    
  }
};
</script>
<template>
  <div class="flex flex-wrap mt-32">
    <div class="w-full lg:w-12/12 px-4">
    <InvoiceTableSonoc />
  </div>
  </div>
</template>


