<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">My Account # {{profileData.id}}</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Carrier Information
        </h6>
        <div v-if="status === 'loading'" class="w-full px-4 margin-auto text-center">
          <Loading />
        </div>
        <div v-else-if="status === 'error'" class="w-full px-4 margin-auto text-center text-red-500 uppercase">
          <p>Error Loading {{errorStatus.type}}.</p>
          <p>Please Log Out and contact your account manager.</p>
        </div>
        <div v-else-if="status === 'success'" class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Account Name
              </label>
              <div class="px-3 py-3 text-blueGray-600 rounded text-sm shadow w-full ease-linear transition-all duration-150">
                {{profileData.acronym}}
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Current Balance
              </label>
              <div class="px-3 py-3 text-blueGray-600  rounded text-sm shadow w-full ease-linear transition-all duration-150">
                <i class="fas fa-dollar-sign text-emerald-500 mr-1"></i>
                {{profileData.balance}}
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                TOTAL PORTS
              </label>
              <div class="px-3 py-3 text-blueGray-600  rounded text-sm shadow w-full ease-linear transition-all duration-150">
                300
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              >
                CPS
              </label>
              <div class="px-3 py-3 text-blueGray-600  rounded text-sm shadow w-full ease-linear transition-all duration-150">
                {{ resourceData.callCount }}
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                IPS
              </label>
              <div class="px-3 py-3 text-blueGray-600  rounded text-sm shadow w-full ease-linear transition-all duration-150">
                {{ resourceData.ipAddress }}
              </div>
            </div>
          </div>
          <!-- <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                CURRENT RATE DECK
              </label>
              <div class="px-3 py-3 text-blue-600  rounded text-sm shadow w-full ease-linear transition-all duration-150">
                <a href="#" class="underline text-lightBlue-500">
                  xyz_tele.zip
                </a>
              </div>
            </div>
          </div> -->
          <!-- <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                TECH PREFIX
              </label>
              
              <div class="px-3 py-3 text-blueGray-600  rounded text-sm shadow w-full ease-linear transition-all duration-150">
                  1234#
              </div>
            </div>
          </div> -->
        </div>

        <!-- <hr class="mt-6 border-b-1 border-blueGray-300" /> -->

        <!-- <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Email Contacts
        </h6> -->
         <!-- <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                COMMERCIAL 
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value="commercial@xyztele.com"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                ACCOUNTING 
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value="accounting@xyztele.com"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                RATES 
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value="rates@xyztele.com"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                NOC 
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value="noc@xyztele.com"
              />
            </div>
          </div>
        </div> -->
      </form>
      <!-- {{ resourceData }}
      {{ profileData }} -->
      <!-- {{ status }} -->
    </div>
  </div> 
</template>

<script>  
import Loading from "@/components/Loading.vue";
import { mapState } from "vuex"

export default {
  computed : mapState({
    profileData: state => state.profile,
    resourceData: state => state.resources,
    status: state => state.status,
    errorStatus: state => state.errors
    
  }),
  components: {
    Loading
  }

}
</script>
<style>

</style>
