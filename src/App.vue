<template>
  <UpperMenuBarTest/>
<!--  <UpperMenuBar/>-->
  <div id="app">
    <router-view/>
    <Footer/>
  </div>
</template>




<script>
import UpperMenuBarTest from "@/components/header/UpperMenuBarTest.vue";
import UpperMenuBar from "@/components/header/UpperMenuBar.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  components: {Footer, UpperMenuBar,UpperMenuBarTest},
}
</script>


