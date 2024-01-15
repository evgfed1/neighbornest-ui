<template>

  <LoginModal ref="loginModalRef" @event-login-success="handleLogin"/>
  <LogOutModal ref="logOutModal" @event-execute-logout="handleLogout"/>
  <RegistrationModal ref="registrationModalRef" @event-registration-success="handleRegistration"/>

  <div class="d-flex justify-content-between ms-5 me-5 mt-4 mb-5">
    <div class="">
      <router-link to="/">
        <h1 class="display-5">NeighborNest</h1>
      </router-link>
    </div>
    <div>
      <nav class="mt-3">
        <template v-if="isLoggedIn">
          <button @click="$router.push('/homepage')" type="button" class="btn btn-outline-dark ms-1 me-1">To home page
          </button>
          <button @click="openLogoutModal" type="button" class="btn btn-outline-dark ms-1 me-1">Log out</button>
          <div class="d-flex justify-content-center align-items-center">
            <h4 class="mt-3">Welcome, {{ firstName }} {{ lastName }}!</h4>
          </div>
        </template>



        <template v-else>
          <button @click="openLoginModal" type="button" class="btn btn-outline-dark ms-2 me-1">Login</button>
          <button @click="openRegisterNewUserModal" type="button" class="btn btn-outline-dark ms-1 me-1">Registration
          </button>
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
import RegistrationModal from "@/components/modal/RegistrationModal.vue";
import router from "@/router";
import LogOutModal from "@/components/modal/LogOutModal.vue";

export default {
  components: {LogOutModal, RegistrationModal, LoginModal},
  data() {
    return {
      isLoggedIn: false,
      userId: 0,
      firstName: '',
      lastName: '',
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
      if (this.userId > 0) {
        this.isLoggedIn = true;
        this.firstName = String(sessionStorage.getItem("firstName"))
        this.lastName = String(sessionStorage.getItem("lastName"))
      }
    },
    openLogoutModal() {
      this.$refs.logOutModal.$refs.modalRef.openModal()
    },
    handleLogout() {
      sessionStorage.clear();
      const userId = sessionStorage.getItem('userId');
      this.isLoggedIn = userId !== null;
      router.push('/')
    },
    handleRegistration() {

      this.userId = parseInt(sessionStorage.getItem('userId'));
      if (this.userId > 0) {
        this.isLoggedIn = true;
        this.firstName = String(sessionStorage.getItem("firstName"))
        this.lastName = String(sessionStorage.getItem("lastName"))
      }
    },
  }
}

</script>
