<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="row justify-content-center">
        <p class="form-control">{{ textVnuk }}</p>

        <HomeViewTestComponent
            :value1="value1"
            :value2="value2"
            :value3="value3"
            :value4="value4"
            :value5="value5"
            @updateTextVnuk="handleInput"
        />
      </div>
      <div class="col-4 text-center">

        <br>
        <br>
        <br>
        <br>
        <h2 class="display-5">Welcome to </h2>
        <h1 class="display-5">NeighborNest</h1>
        <div class="justify-content-center">
          <img src="/apple-touch-icon.png"/>
        </div>
        <br>
        <br>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import HomeViewTestComponent from "@/components/HomeViewTestComponent.vue";
export default {
  name: "HomeView",
  components: {HomeViewTestComponent},
  data() {
    return {
      value1: 5,
      value2: false,
      value3: 'Jupako',
      value4: false,
      value5: 6,
      value6: false,
      value7: 'NeighborNest',
      value8: false,
      textVnuk: ''
    }
  },
  methods: {
    handleInput(textVnuk) {
      this.textVnuk = textVnuk;
    }
  }
}
</script>

