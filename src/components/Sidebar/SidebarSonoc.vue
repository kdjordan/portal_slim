<script>
import * as LocalStorage from '@/LocalStorage.js'

export default {
  data() {
    return {
      collapseShow: "hidden",
    };
  },
  methods: {
    toggleCollapseShow: function (classes) {
      this.collapseShow = classes;
    },
    doLogout() {
      LocalStorage.clearStorage()
      this.$auth.logout({
        returnTo: window.location.origin + `/auth/logout`
      });
    }
  }
};
</script>
<template>
  <nav
    class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
  >
      <!-- Brand -->
      <router-link
        class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
        to="/admin/settings"
      >
      <div class="flex flex-col items-center justify-center">
          <img alt="..." src="@/assets/img/logo-sonoc.png" class="h-auto align-middle border-none max-w-150-px">
        <div>
          CARRIER PORTAL
        </div>
      </div>
      </router-link>
      <!-- Collapse -->
      
        <!-- Collapse header -->
        <hr class="my-4 md:min-w-full" />
        <!-- Heading -->
        <h6
          class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
        >
          MAIN MENU
        </h6>
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none">
          <li class="items-center">
            <router-link
              to="/admin/settings"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fas fa-tv mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Dashboard
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link to="/admin/addfunds" v-slot="{ href, navigate, isActive }">
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fas fa-money-check mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                ADD FUNDS
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              to="/admin/invoices"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fas fa-file-invoice-dollar mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Invoices
              </a>
            </router-link>
          </li>
        </ul>      
        <!-- Divider -->
        <hr class="my-4 md:min-w-full" />
        <!-- Heading -->
        <h6
          class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
        >
          Auth 
        </h6>
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
          <li class="items-center" @click="doLogout()">
            <a
              class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
            >
              <i class="fas fa-fingerprint text-blueGray-300 mr-2 text-sm"></i>
              Logout
            </a>
          </li>
        </ul>

        <!-- Divider -->
        <hr class="my-4 md:min-w-full" />
       
  </nav>
</template>
); 
<style>
a {
  cursor: pointer;
}
  
</style>


