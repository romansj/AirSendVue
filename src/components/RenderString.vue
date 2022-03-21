<script setup>
import { h } from 'vue'

</script>

<template>
  <div>
      {{text}}
  </div>
</template>


<script>

export default {
  props: {
    text: String
  },


  render() {
    // return h('div', this.text)
    return h('div', this.$slots.default())
  }

}

</script>



