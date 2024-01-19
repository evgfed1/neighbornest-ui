<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col col-4 justify-content-center">
        <div class=" d-flex align-items-center justify-content-center mb-4">
          <h3>Registration Association Form</h3>
        </div>
        <div>
          <SuccessAlert v-if="registrationSuccess" :success-message="successMessage"/>
          <ErrorAlert :error-message="errorMessage"/>
          <div v-if="registrationError" class="alert alert-danger">
            {{errorMessageResponse}}
          </div>
        </div>
        <div class="mb-3">
          <div class="input-group flex-nowrap">
            <span class="input-group-text">Association name</span>
            <input v-model="associationInfo.name" type="text" class="form-control">
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
            <vue-flatpickr v-model="associationInfo.buildingDateOfBuild" type="text"
                           class="form-control"></vue-flatpickr>
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
            <div class="col form-check ms-5 mt-1">
              <input class="form-check-input" type="radio" v-model="associationInfo.buildingLift"
                     :value="true">
              <label class="form-check-label" for="flexRadioDefault1">available</label>
            </div>
            <div class="col form-check mt-1">
              <input class="form-check-input" type="radio" v-model="associationInfo.buildingLift"
                     :value="false">
              <label class="form-check-label" for="flexRadioDefault2">unavailable</label>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <button @keyup.enter="registerNewAssociation" @click="registerNewAssociation" type="submit"
                  class="btn btn-outline-dark">
            Register new association
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'flatpickr/dist/flatpickr.css';
import ErrorAlert from "@/components/alert/ErrorAlert.vue";
import VueFlatpickr from "vue-flatpickr-component";
import SuccessAlert from "@/components/alert/SuccessAlert.vue";

export default {
  name: "RegistrationAssociationView",
  components: {ErrorAlert, VueFlatpickr, SuccessAlert},
  data() {
    return {
      associationInfo: {
        buildingDateOfBuild: null,
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
      registrationSuccess: false,
      registrationError: false,
      successMessage: '',
      errorMessage: '',
      errorMessageResponse: '',
      errorResponse: {
        message: '',
        errorCode: 0,
      },
      validationResponse: {
        regNumber: ''
      },
    }
  },

  methods: {
    registerNewAssociation() {
      if (this.allRequiredFieldsAreFilled()) {
        this.sendRegisterNewAssociationRequest();
      } else {
        this.handleErrorAlert();
      }
    },

    allRequiredFieldsAreFilled() {
      return this.associationInfo.name.length > 0
          && this.associationInfo.buildingAddress.length > 0
          && this.associationInfo.email.length > 0
          && this.associationInfo.phone.length > 0
          && this.associationInfo.buildingCadastral.length > 0
          && this.associationInfo.buildingDateOfBuild.length > 0
          && this.associationInfo.buildingFloors.length > 0
          && this.associationInfo.regNumber.length > 0
          && this.associationInfo.buildingPostIndex > 0
          && this.associationInfo.buildingLift >= 0;
    },

    sendRegisterNewAssociationRequest() {
      this.$http.post("/association/registration", this.associationInfo
      ).then(response => {
        this.handleRegistrationSuccess();
      }).catch(error => {
        this.handelRegistrationError(error.response.data)
      });
    },

    handleRegistrationSuccess() {
      this.registrationSuccess = true;
      this.successMessage = 'Registration success';
      this.clearRegistrationAssociationFormFields();
      setTimeout(() => {
        this.registrationSuccess = false;
      }, 2000)
    },

    clearRegistrationAssociationFormFields() {
      this.associationInfo.buildingDateOfBuild = null;
      this.associationInfo.buildingCadastral = '';
      this.associationInfo.buildingFloors = '';
      this.associationInfo.buildingLift = null;
      this.associationInfo.buildingAddress = '';
      this.associationInfo.buildingPostIndex = '';
      this.associationInfo.name = '';
      this.associationInfo.phone = '';
      this.associationInfo.email = '';
      this.associationInfo.regNumber = '';
    },

    handelRegistrationError(data) {
      this.registrationError = true;
      this.errorMessageResponse = data.message;
      setTimeout(() => {
        this.registrationError = false;
      }, 2000);
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


