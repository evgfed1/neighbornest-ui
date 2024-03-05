<template>
  <div class="row justify-content-center">
    <div class="col-6">

      <h4 :style="{ color: $store.state.comp2 ? 'red' : 'black' }">Component 2</h4>
      <p :style="{ color: $store.state.comp2 ? 'red' : 'black' }" v-if="$store.state.comp2 === true">comp2 = true</p>
      <p v-if="$store.state.comp2 === false">comp2 = false</p>
      <button @click="$store.commit('changeComp2Stat')">comp2 {{ $store.state.comp2 }}</button>

    </div>
  </div>
</template>

<script>
export default {
  name: "TestComp2",
  props: {
  },


}
</script>


