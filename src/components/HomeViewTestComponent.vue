<template>
  <div class="row justify-content-center">
    <div class="col-4">
      <h1>Component 1</h1>
      <p v-if="value5 === 6">Son. Value 5 = 6</p>
      <HomeViewTestComponent2
          :value5="value5"
      />
    </div>
  </div>
</template>

<script>
import HomeViewTestComponent2 from "@/components/HomeViewTestComponent2.vue";

export default {
  name: "HomeViewTestComponent",
  components: {HomeViewTestComponent2},
  props: {
    value1: Number,
    value2: Boolean,
    value3: String,
    value4: Boolean,
    value5: Number,
  },
  data() {
    return {
      testComponentValue: true,
    }
  },
}
</script>


