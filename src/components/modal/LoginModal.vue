<template>
  <Modal ref="modalRef" button-name="Login">
</template>


<script>

import Modal from "@/components/modal/Modal.vue";

export default {
  name: "LoginModal",
  components: {Modal},  //LoginModal eshe ne napisali
  data() {
    return {
      errorMessage: '',
      username: '',
      password: '',
      loginResponse: {
        userId: 0,
        roleName: ''
      },
      errorResponse: {
        message: '',
        errorCode: 0,
      }

    }
  },
  methods: {

    login() {
      if (this.allRequiredFieldsAreFilled()) {
        this.sendLoginRequest();
      } this.handleErrorAlert();
    },

    allRequiredFieldsAreFilled: function () {
      return this.password.length > 0 && this.username.length > 0;
    },

    sendLoginRequest: function () {
      this.$http.get("/login", {
        params: {
          username: this.username,
          password: this.password
        }
      }).then(response => {
        this.loginResponse = response.data
        sessionStorage.setItem('userId', this.loginResponse.userId)
        sessionStorage.setItem('roleName', this.loginResponse.roleName)
        this.$refs.modalRef.closeModal()
        this.$emit('event-login-success')
      }).catch(error => {
        this.errorResponse = error.response.data
        const httpStatusCode = error.response.status
        if (httpStatusCode === 403 && this.errorResponse.errorCode === 111) {
          this.errorMessage = this.errorResponse.message
          setTimeout(this.errorMessage = '', 2000)
        }
      })
    },

    handleErrorAlert: function () {
      this.errorMessage = 'Please fill all fields'
      setTimeout(this.errorMessage = '', 2000)
    },

  }
}
</script>

