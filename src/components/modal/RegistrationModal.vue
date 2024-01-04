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
         this.sendRegisterNewUserRequest();
       } else {
         this.handleErrorAlert();
       }
    },

    allRequiredFieldsAreFilled() {
      return this.userInfo.password.length > 0
          && this.userInfo.firstName.length > 0
          && this.userInfo.lastName.length > 0
          && this.userInfo.email.length > 0
          && this.userInfo.phone.length > 0
          && this.userInfo.dateOfBirth.length > 0
          && this.userInfo.username.length > 0;
    },

    sendValidationRequest() {
        this.$http.get("/registration/user", {
          params: {
            username: this.userInfo.username,
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
       // alert('Validation process started: IF(userData does not exist)')
       // alert('True: method: sendRegisterNewUserRequest()')
       // alert('False: return errorMessage(same userData is exist)')

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
