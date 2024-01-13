<template>
  <Modal ref="modalRef" button-name="Register">
    <template #header>
      Registration
      <div class="col col">
        <!--        ErrorAlert-->
      </div>
    </template>
    <template #body>
      <div class="input-group mb-3">
        <span class="input-group-text">First name</span>
        <input v-model="userInfo.firstName" type="text" class="form-control">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Last name</span>
        <input v-model="userInfo.lastName" type="text" class="form-control">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Email</span>
        <input v-model="userInfo.email" type="text" class="form-control">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Phone</span>
        <input v-model="userInfo.phone" type="text" class="form-control">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Date of birth</span>
        <vue-flatpickr v-model="userInfo.birthdate" class="form-control"></vue-flatpickr>
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Username</span>
        <input v-model="userInfo.userUsername" type="text" class="form-control">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Password</span>
        <input v-model="userInfo.userPassword" type="text" class="form-control">
      </div>
    </template>
    <template #footer>
      <button @keyup.enter="registerNewUser" @click="registerNewUser" type="submit" class="btn btn-outline-dark">
        Register
      </button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import VueFlatpickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  name: "RegistrationModal",
  components: {Modal, VueFlatpickr},
  data() {
    return {
      userInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthdate: null,
        userUsername: '',
        userPassword: '',
      },
      errorMessage: '',
      errorResponse: {
        message: '',
        errorCode: 0,
      },
      validationResponse: {
        username: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
    registerNewUser() {
      if (this.allRequiredFieldsAreFilled()) {
        this.sendRegisterNewUserRequest();
      } else {
        this.handleErrorAlert();
      }
    },

    allRequiredFieldsAreFilled() {
      return this.userInfo.firstName.length > 0
          && this.userInfo.userPassword.length > 0
          && this.userInfo.lastName.length > 0
          && this.userInfo.email.length > 0
          && this.userInfo.phone.length > 0
          && this.userInfo.birthdate.length > 0
          && this.userInfo.userUsername.length > 0;
    },

    sendValidationRequest() {
      this.$http.get("/user/registration/", {
        params: {
          username: this.userInfo.userUsername,
          phone: this.userInfo.phone,
          email: this.userInfo.email
        }
      })
          .then(response => {
            this.validationResponse = response.data
            sessionStorage.setItem('username', this.validationResponse.username)
            sessionStorage.setItem('phone', this.validationResponse.phone)
            sessionStorage.setItem('email', this.validationResponse.email)

          })
          .catch(error => {
            const errorResponseBody = error.response.data
          })
    },

    sendRegisterNewUserRequest() {
      this.$http.post("/user/registration/", this.userInfo
      ).then(response => {
        this.$refs.modalRef.closeModal()
      })
    },

    handleErrorAlert() {
      this.errorMessage = 'Please fill all fields'
      setTimeout(this.errorMessage = '', 2000)
    },
  }
}
</script>
