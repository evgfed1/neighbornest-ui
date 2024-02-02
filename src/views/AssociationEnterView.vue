<template>

  <h1 class="text-center">Association info</h1>

<div v-if="!showRegistrationForm" class="container-fluid">
<div class="row justify-content-center">
  <div class="col-4">
    <AssociationChoose/>
  </div>
</div>
</div>

<div v-if="!showRegistrationForm" class="container-fluid">
<div class="row justify-content-center">
  <div class="col-4">
    <AssociationEnterRequest/>
  </div>
</div>
  <br>
  <br>
</div>


  <div class="text-center">
    <p class="margin-top-3">Are You the chairman of association?</p>
    <button @click="showRegistrationForm = !this.showRegistrationForm" type="button" class="btn btn-outline-dark ms-1 me-1">
      Registration form
    </button>
  </div>

<div class="container-fluid">
<div class="row justify-content-center">
  <div class="col-9">
    <RegistrationAssociationForm v-if="showRegistrationForm"/>
  </div>
</div>
</div>

</template>


<script>
import RegistrationAssociationForm from "@/components/authorization/RegistrationAssociationForm.vue";
import AssociationChoose from "@/components/authorization/AssociationChoose.vue";
import AssociationEnterRequest from "@/components/authorization/AssociationEnterRequest.vue";

export default {
  name: "AssociationEnterView",
  components: {RegistrationAssociationForm, AssociationChoose, AssociationEnterRequest},
  data() {
    return {
      showRegistrationForm: false,
      isEnteredInCoop: sessionStorage.getItem('isEnteredInCoop'),
      isLoggedIn: sessionStorage.getItem('isLoggedIn')
    }
  }
}
</script>