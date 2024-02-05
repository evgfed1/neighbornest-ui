<template>
  <UpperMenuBar />
  <div id="app" class="container-fluid">
    <router-view/>
  </div>

</template>

<script>

import UpperMenuBar from "@/components/header/UpperMenuBar.vue";

export default {
  components: {UpperMenuBar},


}

</script>


