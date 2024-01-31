<template>
  <div class="row bg-body-secondary text-emphasis-info">
    <div class="col-4">
      <button @click="$router.push('/news')" type="button" class="btn btn-outline-dark ms-1 me-1">
        News
      </button>
    </div>
    <div class="col-4">
      <button @click="$router.push('/consumption')" type="button" class="btn btn-outline-dark ms-1 me-1">
        Consumption
      </button>
    </div>
    <div class="col-4">
      <button @click="$router.push('/conversation')" type="button" class="btn btn-outline-dark ms-1 me-1">
        Conversation
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainButtonsIsEnteredInCoop",
}
</script>