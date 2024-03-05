<template>
  <UpperMenuBarTest/>
  <!--  <UpperMenuBar/>-->
  <div id="app" v-if="$store.state.isLoggedIn">
<!--  <div id="app">-->
    <router-view/>
  </div>
  <div class="container-fluid" v-if="!$store.state.isLoggedIn">
    <div class="row">
      <div class="col-4 card text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid asperiores consectetur culpa
        cupiditate fugit, laudantium libero modi nam nesciunt quam quisquam repellat sunt unde, ut vel voluptas.
        Assumenda explicabo fugiat iure nostrum quasi qui.
      </div>
      <div class="col-4 card text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut commodi, debitis deleniti distinctio eius eos
        et ex excepturi fuga illo itaque maxime neque quidem ratione tenetur voluptate. Architecto atque fugiat minima,
        officiis perferendis provident quas repudiandae. Accusamus illo nesciunt praesentium sequi. Totam.
      </div>
      <div class="col-4 card text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, officia!
      </div>
    </div>
  </div>
  <Footer/>
</template>


<script>
import UpperMenuBarTest from "@/components/header/UpperMenuBarTest.vue";
import UpperMenuBar from "@/components/header/UpperMenuBar.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  components: {Footer, UpperMenuBar, UpperMenuBarTest},
}
</script>


