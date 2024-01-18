<template>
  <div v-if="successMessage.length > 0" class="alert alert-success" role="alert">
    {{successMessage}}
  </div>
</template>

<script>
export default {
  name: "SuccessAlert",
  props: {
    successMessage: String
  },
}
</script>

<style scoped>
.alert {
  text-align: center;
  padding: 10px;
  margin: 10px;
}
</style>
