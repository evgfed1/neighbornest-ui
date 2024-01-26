<template>

  <div class="row">
    <div class="col-4">
      <button @click="$router.push('/price')" type="button" class="btn btn-outline-dark ms-1 me-1">Price</button>
    </div>
    <div class="col-4">
      <button @click="$router.push('/about')" type="button" class="btn btn-outline-dark ms-1 me-1">About</button>
    </div>
    <div class="col-4">
      <button @click="$router.push('/contact')" type="button" class="btn btn-outline-dark ms-1 me-1">Contact</button>
    </div>
  </div>

</template>


<script>
export default {
  name: "MainButtonsIsLoggedOut"
}
</script>
