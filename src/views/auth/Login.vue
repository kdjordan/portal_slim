<script>

export default {
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
  },
  beforeUpdate() {
    if(this.$auth.isAuthenticated) {
        this.$router.push({ path: '/admin/settings' })
    }
    if (this.$route.query.error) {
      this.$auth.logout({
        returnTo: window.location.origin + `/error?error=${encodeURI(this.$route.query.error)}&error_description=${encodeURI(this.$route.query.error_description)}`
      })
    }
      
  },
  async mounted() {
    await this.$auth.loginWithRedirect();
  }
}
</script>
<template>
  <div>
  </div>
</template>
