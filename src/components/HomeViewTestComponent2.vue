<template>
  <div class="row justify-content-center">
    <div class="col-6">
      <h1>Component 2</h1>
      <p v-if="value5 === 5">Vnuk. Value 5 = 5</p>
      <input v-model="textVnuk"
             type="text"
             class="form-control"
             placeholder="give me text"
             @input="emitInput"
      >


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
      textVnuk: ''
    }
  },
  methods: {
    emitInput() {
      this.$emit('updateTextVnuk', this.textVnuk);
    },
  }
}
</script>


