<template>
  <div @keydown.enter="login">
    <Modal ref="modalRef" button-name="Login">
      <template #header>
        <div class="d-flex justify-content-between">
          <div>
            Login
          </div>
          <div class="ms-5">
            <ErrorAlert :error-message="errorMessage"/>
          </div>
        </div>
      </template>
      <template #body>
        <div class="input-group mb-3">
          <span class="input-group-text">Username</span>
          <input v-model="username" type="text" class="form-control">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">Password</span>
          <input v-model="password" type="text" class="form-control">
        </div>
      </template>
      <template #footer>
        <button @click="login" type="submit" class="btn btn-outline-dark">Login</button>
      </template>
    </Modal>
  </div>
</template>


<script>

import Modal from "@/components/modal/Modal.vue";
import ErrorAlert from "@/components/modal/ErrorAlert.vue";

export default {

  name: "LoginModal",
  components: {Modal, ErrorAlert},
  data() {
    return {
      errorMessage: '',
      username: '',
      password: '',
      loginResponse: {
        userId: 0,
        roleName: '',
        firstName: '',
        lastName: '',
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
      } else {
        this.handleErrorAlert()
      }
    },

    allRequiredFieldsAreFilled() {
      return this.password.length > 0 && this.username.length > 0;
    },

    sendLoginRequest() {
      this.$http.get("/user/login", {
        params: {
          username: this.username,
          password: this.password
        }
      }).then(response => {
        this.loginResponse = response.data
        sessionStorage.setItem('userId', this.loginResponse.userId)
        sessionStorage.setItem('roleName', this.loginResponse.roleName)
        sessionStorage.setItem('firstName', this.loginResponse.firstName)
        sessionStorage.setItem('lastName', this.loginResponse.lastName)
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

    handleErrorAlert() {
      this.errorMessage = 'Please fill all fields';
      setTimeout(() => {
        this.errorMessage = '';
      }, 2000);
    }
  }
}
</script>

