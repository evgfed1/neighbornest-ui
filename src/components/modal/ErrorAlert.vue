<template>
  <div v-if="errorMessage.length > 0" class="alert alert-danger" role="alert">
    {{errorMessage}}
  </div>

</template>

<script>
export default {
  name: "ErrorAlert",
  props: {
    errorMessage: String
  }

}
</script>



