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
        <input v-model="userInfo.dateOfBirth" type="text" class="form-control">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Username</span>
        <input v-model="userInfo.username" type="text" class="form-control">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Password</span>
        <input v-model="userInfo.password" type="text" class="form-control">
      </div>
    </template>
    <template #footer>
      <button @keyup.enter="registerNewUser" @click="registerNewUser" type="submit" class="btn btn-outline-dark">Register</button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
export default {
  name: "RegistrationModal",
  components: {Modal},
  data() {
    return {
      userInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        username: '',
        password: '',
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
         this.sendValidationRequest();
       } else {
         this.handleErrorAlert();
       }
    },

    allRequiredFieldsAreFilled() {
      return this.password.length > 0
          && this.firstName.length > 0
          && this.lastName.length > 0
          && this.email.length > 0
          && this.phone.length > 0
          && this.dateOfBirth.length > 0
          && this.username.length > 0;
    },

    sendValidationRequest() {
       alert('Validation process started: IF(userData does not exist)')
       alert('True: method: sendRegisterNewUserRequest()')
       alert('False: return errorMessage(same userData is exist)')
    },

    sendRegisterNewUserRequest() {
       this.$http.post("/registration/user", this.userInfo
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
