<template>
  <div class="row justify-content-center">
    <div class="col-6">
      <h1>Component 2</h1>
      <p v-if="value5 === 5">Vnuk. Value 5 = 5</p>
      <input v-model="TextVnuk" type="text" class="form-control">

      <h1>{{TextVnuk}}</h1>

    </div>
  </div>
</template>

<script>
export default {
  name: "HomeViewTestComponent2",
  props: {
    value5: Number,
    value6: Boolean,
  },
  data() {
    return {
      testComponentValue: 'Vnuk',
      TextVnuk: '',
    }
  },
}
</script>


