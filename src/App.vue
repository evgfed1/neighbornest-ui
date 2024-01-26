<template>
  <LoginModal ref="loginModalRef" @event-login-success="handleLogin"/>
  <LogOutModal ref="logOutModal" @event-execute-logout="handleLogout"/>
  <RegistrationModal ref="registrationModalRef" @event-registration-success="handleRegistration"/>

  <div class="container-fluid">

    <div class="row">

      <div class="col-12 text-center mb-1">
        <img src="/blackStripe.png" alt="blackStripe" class="stretched-image">
      </div>

      <div class="col-4 bg-body-secondary text-emphasis-info">
        <div>
          <router-link to="/homepage">
            <h3>NeighborNest</h3>
          </router-link>
          <div v-if="isLoggedIn">
            <h4 class="mt-3">{{ firstName }} {{ lastName }}</h4>
          </div>
          <div>
            TEST 2
          </div>
        </div>
      </div>

      <div class="col-4 container-fluid text-center bg-body-secondary text-emphasis-info">
        TEST 3

        <MainButtonsIsLoggedOut v-if="!isLoggedIn"/>
        <MainButtonsIsLoggedIn v-if="isLoggedIn"/>


        <div v-if="isLoggedIn && isEnteredInCoop" class="row bg-body-secondary text-emphasis-info">
          <div class="col-4">
            <button @click="$router.push('/news')" type="button" class="btn btn-outline-dark ms-1 me-1">News</button>
          </div>
          <div class="col-4">
            <button @click="$router.push('/consumption')" type="button" class="btn btn-outline-dark ms-1 me-1">
              Consumption
            </button>
          </div>
          <div class="col-4">
            <button @click="$router.push('/conversation')" type="button" class="btn btn-outline-dark ms-1 me-1">
              Conversation
            </button>
          </div>
        </div>
      </div>



      <div class="col-4 text-end bg-body-secondary text-emphasis-info">
        TEST 4
        <div v-if="isLoggedIn">
          <button @click="openLogoutModal" type="button" class="btn btn-outline-dark ms-1 me-1">Log out</button>
        </div>

        <div v-else>
          <button @click="openLoginModal" type="button" class="btn btn-outline-dark ms-2 me-2">Login</button>
          <button @click="openRegisterNewUserModal" type="button" class="btn btn-outline-dark">
            Registration
          </button>

        </div>
      </div>
      <div class="row  bg-body-secondary text-emphasis-info">
      <div class="col text-center">
        TEST 5
      </div>

      <div class="col text-center">
        TEST 6
      </div>


      <div class="col text-center">
        TEST 7
      </div>
      </div>
      <hr class="mt-2">

      <div id="=app" class="container-fluid">
        <router-view/>
      </div>

      <hr v-if="isLoggedIn" class="mt-5">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <h1 v-if="!isLoggedIn" class="text-center"> Welcome to our pet-project</h1>

    </div>
  </div>

</template>


<script>

import LoginModal from "@/components/modal/LoginModal.vue";
import RegistrationModal from "@/components/modal/RegistrationModal.vue";
import router from "@/router";
import LogOutModal from "@/components/modal/LogOutModal.vue";
import MainButtonsIsLoggedIn from "@/components/MainButtonsIsLoggedIn.vue";
import MainButtonsIsLoggedOut from "@/components/MainButtonsIsLoggedOut.vue";

export default {
  components: {MainButtonsIsLoggedIn, MainButtonsIsLoggedOut, LogOutModal, RegistrationModal, LoginModal},
  data() {
    return {
      isEnteredInCoop: false,
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
.bg-success {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
}
</style>

