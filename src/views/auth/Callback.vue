<script>
import * as LocalStorage from '@/LocalStorage.js'
import jwt_decode from "jwt-decode";

export default {
  name: 'Callback',
  async mounted() {
    if(this.$auth.isAuthenticated.value) {
      let token = await this.$auth.getTokenSilently()
      let { userData } = jwt_decode(token)
      // console.log('metadata ', userData)
      LocalStorage.setStorage({
        token,
        userData
        
      })

      this.$store.commit('SET_TOKEN', token)
      this.$store.commit('SET_ID', userData.accountId)

      if(userData.paypalId) {
        this.$store.commit('SET_PAYPAL_ID', userData.paypalId)
      }
      
      this.$router.push({ path: '/admin' })
    }
    if (this.$route.query.error) {
        console.log('error in callback')
      this.$auth.logout({
        returnTo: window.location.origin + `/error?error=${encodeURI(this.$route.query.error)}&error_description=${encodeURI(this.$route.query.error_description)}`
      })
    } 
  }
}
</script>
