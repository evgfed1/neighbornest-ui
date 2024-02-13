<template>
  <UpperMenuBar
  :isLoggedIn="isLoggedIn"
  :isEnteredInCoop="isEnteredInCoop"
  />
  <div id="app" class="container-fluid">
    <router-view/>
  </div>

</template>

<script>

import UpperMenuBar from "@/components/header/UpperMenuBar.vue";

export default {
  components: {UpperMenuBar},

  data() {
    return {
      isLoggedIn: false,
      isEnteredInCoop: false,
    }
  },
  methods: {
    updateLoginStatus(isLoggedIn) {
      this.isLoggedIn = isLoggedIn
    }
  }

}

</script>


