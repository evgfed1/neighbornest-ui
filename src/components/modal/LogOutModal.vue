<template>
  <Modal ref="modalRef" close-button-name="No">
    <template #header>
      Log out
    </template>
    <template #body>
      Are you sure?
    </template>
    <template #footer>
      <button @click="executeLogout" class="btn btn-outline-dark" type="submit">yes</button>
      <button @click="closeLogoutModal" class="btn btn-outline-dark">no</button>
    </template>
  </Modal>

</template>

<script>

import Modal from "@/components/modal/Modal.vue";

export default {
  name: 'LogOutModal',
  components: {Modal},
  methods: {
    executeLogout() {
      this.$emit('event-execute-logout')
      this.$refs.modalRef.closeModal()
    },
    closeLogoutModal() {
      this.$refs.modalRef.closeModal()
    },
  }
}
</script>



