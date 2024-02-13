<template>
  <UpperMenuBar
  :isLoggedIn="isLoggedIn"
  :isEnteredInCoop="isEnteredInCoop"
  @update-login-status="updateLoginStatus"
  />
  <div id="app" class="container-fluid">
    <router-view/>
  </div>

</template>

<script>

import UpperMenuBar from "@/components/header/UpperMenuBar.vue";
import AssociationEnterView from "@/views/AssociationEnterView.vue";

export default {
  components: {UpperMenuBar},

  data() {
    return {
      isLoggedIn: false,
      isEnteredInCoop: AssociationEnterView.data().isEnteredInCoop
    }
  },
  methods: {
    alertLogin() {
      alert('in App.vue isLoggedIn = ' + this.isLoggedIn)
      alert('in App.vue isEnteredInCoop = ' + this.isEnteredInCoop)
    },
    alertCoop() {
      alert('in App.vue isLoggedIn = ' + this.isLoggedIn)
      alert('in App.vue isEnteredInCoop = ' + this.isEnteredInCoop)
    },
    updateLoginStatus(isLoggedIn) {
      this.alertLogin();
      this.isLoggedIn = isLoggedIn
      this.alertCoop();
    },

    alert() {
      this.alertLogin()
      this.alertCoop()
    }
    // updateCoopStatus(){
    //   this.isEnteredInCoop = AssociationEnterView.is
    // }
  }

}

</script>


