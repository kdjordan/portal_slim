<template>
  <div>
    <sidebar-sonoc />
    <div class="relative md:ml-64 bg-transparent">
      <div class="px-4 md:px-10 mx-auto w-full">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import SidebarSonoc from "@/components/Sidebar/SidebarSonoc.vue";
export default {
  name: "admin-layout",
  components: {
    SidebarSonoc,
  }
};
</script>
