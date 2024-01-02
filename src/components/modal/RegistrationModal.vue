<template>

</template>

<script>
import Modal from "@/components/modal/Modal.vue";
export default {
  name: "RegistrationModal",
  components: {Modal},
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      username: '',
      password: '',
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
       alert('True: method: sendRegisterUserRequest()')
       alert('False: return errorMessage(same userData is exist)')
    },

    handleErrorAlert() {
      this.errorMessage = 'Please fill all fields'
      setTimeout(this.errorMessage = '', 2000)
    },
  }
}
</script>
