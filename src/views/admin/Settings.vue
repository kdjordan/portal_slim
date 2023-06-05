<template>
  <div class="flex flex-wrap mt-32">
    <div class="w-full lg:w-12/12 px-4">
      <SettingsSonoc />
    </div>
  </div>
</template>

<script>
import SettingsSonoc from "@/components/Cards/SettingsSonoc.vue";
import { useStore } from "vuex";

export default {
  components: {
    SettingsSonoc,
  },
  async created() {
    const store = useStore()

    if (!store.state.profile.id) {
      await store.dispatch('loadSettings')
    }
  }
};
</script>
