<template>
  <div class="row justify-content-center">
    <div>
      <h4 :style="{ color: $store.state.comp1 ? 'green' : 'black' }">Component 1</h4>
      <p :style="{ color: $store.state.comp1 ? 'green' : 'black' }" v-if="$store.state.comp1 === true">comp1 = true</p>
      <p v-if="$store.state.comp1 === false">comp1 = false</p>
      <button @click="$store.commit('changeComp1Stat')">comp1 {{$store.state.comp1}}</button>

      <button @click="buttonComp1">Hello {{this.comp1}}</button>
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
      comp1: true,
    }
  },
methods: {
  buttonComp1() {
    this.comp1 = !this.comp1
  },

},
}
</script>