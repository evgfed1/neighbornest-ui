<template>

  <div class="container-fluid">
    <div class="row">
      <div class="text-center">
        <h3 :style="{ color: $store.state.comp2 ? 'blue' : 'black' }">Value: </h3>
        <button @click="$store.commit('changeTestStat')">test {{test}}</button>
        <br>
        <br>
      </div>
    </div>

    <div class="row">
      <div class="col-6 card">
        <TestComp1 :comp1="comp1" :comp2="comp2" @comp1-status-updated="updateComp1Status" @comp2-status-updated="updateComp2Status" />
      </div>

      <div class="col-6 card">
        <TestComp2 @comp2-status-updated="updateComp2Status" />
      </div>
    </div>

  </div>

</template>


<script>
import TestComp1 from "@/components/TestComp1.vue";
import TestComp2 from "@/components/TestComp2.vue";


export default {
  name: "TestingView",
  components: {TestComp1, TestComp2,},
  data() {
    return {
      testValue: true,
      test: false,
      comp1: false,
      comp2: true,
    };
  },
  methods: {
    changeTestStat() {
      if ($store.state.comp2 === true) {
        alert("comp2 = true" + $store.state.comp2)
      }else {
        alert("comp2 = false" + $store.state.comp2)

      }
      // $store.state.comp2
      // this.test = !this.test
    },
    // Метод для обработки обновленного статуса comp1 из TestComp1
    updateComp1Status(comp1Status) {
      this.comp1 = comp1Status;
    },

    // Метод для обработки обновленного статуса comp2 из TestComp2
    updateComp2Status(comp2Status) {
      this.comp2 = comp2Status;
    },
  }
}
</script>



