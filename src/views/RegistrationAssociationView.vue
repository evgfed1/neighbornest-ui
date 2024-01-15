<template>
  <div>
    <div class="container">

      <div class="row justify-content-center">

        <div class="col col-4 justify-content-center">

          <div class=" d-flex align-items-center justify-content-center mb-4">
            <h3>Registration Association Form</h3>
          </div>

          <div class="mb-3">
            <div class="input-group flex-nowrap">
              <span class="input-group-text">Association name</span>
              <input v-model="associationInfo.name" type="text" class="form-control">
            </div>
          </div>

          <div class="mb-3">
            <div class="input-group flex-nowrap">
              <span class="input-group-text">Phone</span>
              <input v-model="associationInfo.phone" type="text" class="form-control">
            </div>
          </div>


          <div class="mb-3">
            <div class="input-group flex-nowrap">
              <span class="input-group-text">Email</span>
              <input v-model="associationInfo.email" type="text" class="form-control">
            </div>
          </div>

          <div class="mb-3">
            <div class="input-group flex-nowrap">
              <span class="input-group-text">Reg number</span>
              <input v-model="associationInfo.regNumber" type="text" class="form-control">
            </div>
          </div>

          <div class="mb-3">
            <div class="input-group flex-nowrap">
              <span class="input-group-text">Date of build</span>
              <input v-model="associationInfo.buildingDateOfBuild" type="text" class="form-control">
            </div>
          </div>

          <div class="mb-3">
            <div class="input-group flex-nowrap">
              <span class="input-group-text">Cadastral</span>
              <input v-model="associationInfo.buildingCadastral" type="text" class="form-control">
            </div>
          </div>
          <div class="mb-3">
            <div class="input-group flex-nowrap">
              <span class="input-group-text">Floors</span>
              <input v-model="associationInfo.buildingFloors" type="text" class="form-control">
            </div>
          </div>
          <div class="mb-3">
            <div class="input-group flex-nowrap">
              <span class="input-group-text">Lift</span>
              <input v-model="associationInfo.buildingLift" type="text" class="form-control">
            </div>
          </div>

          <div class="mb-3">
            <div class="input-group flex-nowrap">
              <span class="input-group-text">Address</span>
              <input v-model="associationInfo.buildingAddress" type="text" class="form-control">
            </div>
          </div>

          <div class="mb-3">
            <div class="input-group flex-nowrap">
              <span class="input-group-text">Post index</span>
              <input v-model="associationInfo.buildingPostIndex" type="text" class="form-control">
            </div>
          </div>


        </div>
      </div>

    </div>
  </div>
</template>


<script>
import 'flatpickr/dist/flatpickr.css';

export default {
  name: "RegistrationAssociationView",

  // components: {ErrorAlert, VueFlatpickr},
  data() {
    return {
      associationInfo: {
        buildingDateOfBuild: '',
        buildingCadastral: '',
        buildingFloors: '',
        buildingLift: null,
        buildingAddress: '',
        buildingPostIndex: '',
        name: '',
        phone: '',
        email: '',
        regNumber: '',
      },
      errorMessage: '',
      errorResponse: {
        message: '',
        errorCode: 0,
      },
      validationResponse: {
        regNumber: ''
      },
    }
  },
}


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
