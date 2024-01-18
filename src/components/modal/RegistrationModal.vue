<template>
  <div @keydown.enter="registerNewUser">
    <Modal ref="modalRef" button-name="Register">
      <template #header>
        <div class="d-flex justify-content-between">
          <div>
            Registration
          </div>
          <div class="ms-5">
            <ErrorAlert :error-message="errorMessage"/>
          </div>
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
  </div>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import VueFlatpickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import ErrorAlert from "@/components/alert/ErrorAlert.vue";

export default {
  name: "RegistrationModal",
  components: {ErrorAlert, Modal, VueFlatpickr},
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
      },
      registerResponse: {
        userId: 0,
        roleName: '',
        firstName: '',
        lastName: '',
      },
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

    sendRegisterNewUserRequest() {
      this.$http.post("/user/registration", this.userInfo
      ).then(response => {
        this.registerResponse = response.data
        sessionStorage.setItem('userId', this.registerResponse.userId)
        sessionStorage.setItem('roleName', this.registerResponse.roleName)
        sessionStorage.setItem('firstName', this.registerResponse.firstName)
        sessionStorage.setItem('lastName', this.registerResponse.lastName)
        this.$refs.modalRef.closeModal()
        this.$emit('event-registration-success')
      })


    },

    handleErrorAlert() {
      this.errorMessage = 'Please fill all fields'
      setTimeout(() => {
        this.errorMessage = '';
      }, 2000)
    },
  }
}
</script>
