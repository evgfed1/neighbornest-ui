<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 d-flex align-items-center justify-content-center">
          <h3>Registration Association Form</h3>
        </div>

        <!-- Имя -->
        <div class="col-4 mb-3">
          <div class="input-group flex-nowrap">
            <span class="input-group-text">Eesnimi</span>
            <input v-model="firstName" type="text" class="form-control">
          </div>
        </div>

        <!-- Фамилия -->
        <div class="col-12 mb-3">
          <div class="input-group flex-nowrap">
            <span class="input-group-text">Perekonnanimi</span>
            <input v-model="lastName" type="text" class="form-control">
          </div>
        </div>

        <!-- E-mail -->
        <div class="col-12 mb-3">
          <div class="input-group flex-nowrap">
            <span class="input-group-text">E-maili aadress</span>
            <input v-model="email" type="text" class="form-control">
          </div>
        </div>

      </div>
    </div>
  </div>
</template>






<script>
import 'flatpickr/dist/flatpickr.css';
import VueFlatpickr from "vue-flatpickr-component";
import ErrorAlert from "@/components/modal/ErrorAlert.vue";

export default {
  name: "RegistrationAssociationView"}
  // components: {ErrorAlert, VueFlatpickr}
//   data() {
//     return {
//       associationInfo: {
//         buildingDateOfBuild: '',
//         buildingCadastral: '',
//         buildingFloors: '',
//         buildingLift: null,
//         buildingAddress: '',
//         buildingPostIndex: '',
//         name: '',
//         phone: '',
//         email: '',
//         regNumber: '',
//       },
//       errorMessage: '',
//       errorResponse: {
//         message: '',
//         errorCode: 0,
//       },
//       validationResponse: {
//         regNumber: ''
//       },
//     }
//   },
//   methods: {
//     registerNewAssociation() {
//       if (this.allRequiredFieldsAreFilled()) {
//         this.sendRegisterNewUserRequestTest();
//       } else {
//         this.handleErrorAlert();
//       }
//     },
//
//     allRequiredFieldsAreFilled() {
//       return this.associationInfo.firstName.length > 0
//           && this.associationInfo.userPassword.length > 0
//           && this.associationInfo.lastName.length > 0
//           && this.associationInfo.email.length > 0
//           && this.associationInfo.phone.length > 0
//           && this.associationInfo.birthdate.length > 0
//           && this.associationInfo.userUsername.length > 0;
//     },
//
//     sendRegisterNewUserRequestTest() {
//       this.$http.post("/user/registration", this.associationInfo
//       ).then(response => {
//         this.registerResponse = response.data
//         sessionStorage.setItem('userId', this.registerResponse.userId)
//         sessionStorage.setItem('roleName', this.registerResponse.roleName)
//         sessionStorage.setItem('firstName', this.registerResponse.firstName)
//         sessionStorage.setItem('lastName', this.registerResponse.lastName)
//         this.$refs.modalRef.closeModal()
//         this.$emit('event-registration-success')
//       })
//
//
//     },
//
//     handleErrorAlert() {
//       this.errorMessage = 'Please fill all fields'
//       setTimeout(() => {
//         this.errorMessage = '';
//       }, 2000)
//     },
//   }
// }
</script>
