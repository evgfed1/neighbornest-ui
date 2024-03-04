<template>
  <div class="row justify-content-center">
    <div class="col-6">

      <h4 :style="{ color: comp2 ? 'red' : 'black' }">Component 2</h4>
      <p :style="{ color: comp2 ? 'red' : 'black' }" v-if="comp2 === true">comp2 = true</p>
      <p v-if="comp2 === false">comp2 = false</p>
      <button @click="changeComp2Stat">comp2 {{comp2}}</button>

    </div>
  </div>
</template>

<script>
export default {
  name: "TestComp2",
  props: {

  },
  data() {
    return {
      testComponent2Value: true,
      comp2: true,
    }
  },
  methods: {

    changeComp2Stat() {
      this.comp2 = !this.comp2
      this.$emit("comp2-status-updated", this.comp2);
    },
  }
}
</script>


