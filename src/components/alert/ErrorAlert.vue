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

<style scoped>
.alert {
  text-align: center;
  padding: 10px;
  margin: 10px;
}
</style>



