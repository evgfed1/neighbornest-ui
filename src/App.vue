<template>
  <LoginModal ref="loginModalRef" @event-login-success="handleLogin"/>
  <LogOutModal ref="logOutModal" @event-execute-logout="handleLogout"/>
  <RegistrationModal ref="registrationModalRef" @event-registration-success="handleRegistration"/>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <img src="/blackStripe.png" alt="blackStripe" class="stretched-image">
      </div>
      <div class="col-4">
        <div>
          <router-link to="/homepage">
            <h3>NeighborNest</h3>
          </router-link>
          <div v-if="isLoggedIn">
            <h4 class="mt-3">{{ firstName }} {{ lastName }}</h4>
          </div>
        </div>
      </div>
      <div class="col-4 container-fluid text-center">
        <div v-if="!isLoggedIn" class="row">
          <div class="col-4">
            <button type="button" class="btn btn-outline-dark ms-1 me-1 mt-2">Price</button>
          </div>
          <div class="col-4">
            <button type="button" class="btn btn-outline-dark ms-1 me-1 mt-2">About</button>
          </div>
          <div class="col-4">
            <button type="button" class="btn btn-outline-dark ms-1 me-1 mt-2">Contact</button>
          </div>
        </div>
        <div v-if="isLoggedIn" class="row">
          <div class="col-4">
            <button @click="$router.push('/news')" type="button" class="btn btn-outline-dark ms-1 me-1 mt-2">News</button>
          </div>
          <div class="col-4">
            <button @click="$router.push('/consumption')" type="button" class="btn btn-outline-dark ms-1 me-1 mt-2">Consumption</button>
          </div>
          <div class="col-4">
            <button @click="$router.push('/conversation')" type="button" class="btn btn-outline-dark ms-1 me-1 mt-2">Conversation</button>
          </div>
        </div>
      </div>

      <div class="col-4 text-end">
        <div v-if="isLoggedIn">
          <button @click="$router.push('/registration')" type="button" class="btn btn-outline-dark ms-1 me-1 mt-2">
            Registration Association
          </button>
          <button @click="openLogoutModal" type="button" class="btn btn-outline-dark ms-1 me-1 mt-2">Log out</button>
        </div>

        <div v-else>
          <button @click="openLoginModal" type="button" class="btn btn-outline-dark ms-2 me-2 mt-2">Login</button>
          <button @click="openRegisterNewUserModal" type="button" class="btn btn-outline-dark mt-2">
            Registration
          </button>
        </div>
      </div>

      <div v-if="isLoggedIn" id="=app" class="container-fluid">
        <router-view/>
      </div>

    </div>
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
        router.push('/homepage')
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


<style>
.stretched-image {
  width: 100%;
  height: auto;
}
</style>