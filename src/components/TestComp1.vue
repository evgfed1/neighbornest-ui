<template>
  <div class="row justify-content-center">
    <div>
      <h4 :style="{ color: comp1 ? 'green' : 'black' }">Component 1</h4>
      <p :style="{ color: comp1 ? 'green' : 'black' }" v-if="comp1 === true">comp1 = true</p>
      <p v-if="comp1 === false">comp1 = false</p>
      <button @click="changeComp1Stat">comp2 {{comp1}}</button>

      <TestComp2 @comp2-status-updated="updateComp2Status"/>  <!--added-->

    </div>
  </div>
</template>

<script>
import TestComp2 from "@/components/TestComp2.vue";

export default {
  name: "TestComp1",
  components: {TestComp2,},
  props: {
    comp1: Boolean,
    comp2: Boolean,
  },
  data() {
    return {
      // testComponent1Value: true,
      comp1: false,
    }
  },
  methods: {
    changeComp1Stat() {
      this.comp1 = !this.comp1
      this.$emit("comp1-status-updated", !this.comp1);
    },
    updateComp2Status(comp2Status) {   //added
      this.$emit("comp2-status-updated", comp2Status);
    },
  }
}
</script>