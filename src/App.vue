<template>
  <UpperMenuBar/>
  <div id="app">
    <router-view/>
<!--    <Footer/>-->
  </div>
</template>




<script>
import UpperMenuBar from "@/components/header/UpperMenuBar.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  components: {Footer, UpperMenuBar},
}
</script>


