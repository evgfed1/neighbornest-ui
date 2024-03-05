<template>
  <LoginModal ref="loginModalRef" @event-login-success="handleLogin"/>
  <LogOutModal ref="logOutModal" @event-execute-logout="handleLogout"/>
  <RegistrationModal ref="registrationModalRef" @event-registration-success="handleRegistration"/>

  <div class="container-fluid">


    <div class="row">

      <div class="col-12 text-center bg-dark text-white" style="height: 15px;"></div>


      <div id="grad1" class="container">
        <div class="row">

          <div class="col-4">
            <div>
              <router-link to="/homepage">
                <h3>NeighborNest</h3>
              </router-link>
              <router-link to="/testing">
                <h3>Testing</h3>
              </router-link>
              <div>
                <DateFormatter :date="someDate"/>
              </div>
              <div v-if="isLoggedIn">
                <h4 class="mt-3">{{ firstName }} {{ lastName }}</h4>
              </div>
            </div>
          </div>

          <div class="col-4 container-fluid text-center">
            <MainButtonsIsLoggedOut v-if="!isLoggedIn"/>
            <MainButtonsIsLoggedIn v-if="isLoggedIn && !isEnteredInCoop"/>
            <MainButtonsIsEnteredInCoop v-if="isLoggedIn && isEnteredInCoop"/>
          </div>

          <div class="col-4 text-end">
            <div v-if="isLoggedIn">
              <button @click="openLogoutModal" type="button" class="btn btn-outline-dark ms-1 me-1 mt-2">Log out
              </button>
            </div>

            <div v-else class="mt-2">
              <button @click="openLoginModal" type="button" class="btn btn-outline-dark ms-2 me-2">Login</button>
              <button @click="openRegisterNewUserModal" type="button" class="btn btn-outline-dark">
                Registration
              </button>
            </div>
          </div>

          <div class="container-fluid">
            <div class="row">
              <div class="col-4 text-start">
                Menu 1
              </div>
              <div class="col-4 text-center">
                Menu 2
              </div>
              <div class="col-4 text-end">
                Menu 3
              </div>
            </div>
          </div>


        </div>
      </div>


      <hr class="mt-2">

      <div v-if="!isLoggedIn" class="container-fluid text-center">
        <div class="bg-image">
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import MainButtonsIsLoggedOut from "@/components/MainButtonsIsLoggedOut.vue";
import DateFormatter from "@/components/date/DateFormatter.vue";
import MainButtonsIsEnteredInCoop from "@/components/MainButtonsIsEnteredInCoop.vue";
import LoginModal from "@/components/modal/LoginModal.vue";
import LogOutModal from "@/components/modal/LogOutModal.vue";
import RegistrationModal from "@/components/modal/RegistrationModal.vue";
import MainButtonsIsLoggedIn from "@/components/MainButtonsIsLoggedIn.vue";
import router from "@/router";

export default {
  name: "UpperMenuBar",
  props: {
    // isLoggedIn: Boolean,
  },
  components: {
    MainButtonsIsLoggedIn,
    RegistrationModal,
    LogOutModal,
    LoginModal,
    MainButtonsIsEnteredInCoop,
    DateFormatter,
    MainButtonsIsLoggedOut
  },
  data() {
    return {
      isEnteredInCoop: false,
      isLoggedIn: false,
      userId: 0,
      firstName: '',
      lastName: '',
      someDate: new Date()
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
        this.storeMethod()
        this.firstName = String(sessionStorage.getItem("firstName"))
        this.lastName = String(sessionStorage.getItem("lastName"))
        router.push('/homepage')
      }
    },

    openLogoutModal() {
      this.$refs.logOutModal.$refs.modalRef.openModal()
    },
    storeMethod() {
      this.$store.commit('testMethod')
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

    changeStatusForCoop() {
      this.isEnteredInCoop = !this.isEnteredInCoop;
      alert("isEnteredInCoop: " + this.isEnteredInCoop)
    }
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

#grad1 {
  height: auto;
  background-color: #ffffff; /* For browsers that do not support gradients */
  background-image: linear-gradient(rgba(119, 119, 119, 0.34), white);
}

a {
  color: #209bed !important; /* Используйте !important для переопределения стилей Bootstrap, если это необходимо */
}

</style>

