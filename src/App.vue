<template>
  <LoginModal ref="loginModalRef" @event-login-success="handleLogin"/>
  <RegistrationModal ref="registrationModalRef"/>

  <div class="d-flex justify-content-between ms-5 me-5 mt-4 mb-5">
    <div class="">
      <router-link to="/">
        <h1>NeighborNest</h1>
      </router-link>
    </div>

    <div>
      <nav class="mt-3">
        <template v-if="isLoggedIn">
          <button @click="$router.push('/homepage')">To home page</button>
        </template>
        <template v-else>
          <button @click="openLoginModal">Login</button>
          <button @click="openRegisterNewUserModal">Registration</button>
        </template>
      </nav>
    </div>

  </div>
  <div id="=app" class="ms-5 me-5">
    <router-view/>
  </div>
</template>

<script>

import LoginModal from "@/components/modal/LoginModal.vue";
import router from "@/router";
import RegistrationModal from "@/components/modal/RegistrationModal.vue";

export default {
  components: {RegistrationModal, LoginModal},
  data() {
    return {
      isLoggedIn: false,
      userId: 0
    }
  },
  methods: {
    openLoginModal() {
      this.$refs.loginModalRef.$refs.modalRef.openModal()
    },

    openRegisterNewUserModal() {
      this.$refs.registrationModalRef.$refs.modalRef.openModal()
    },

    handleLogin() {
      this.userId = parseInt(sessionStorage.getItem('userId'));
      if (this.userId > 0 ) {
        this.isLoggedIn = true;
      }
    },




  }
}



</script>
