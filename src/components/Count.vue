<template>
  <div id="count">
    <my-addition></my-addition>
    <p>-----------------------------------------------------</p>
    <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import Addition from './Addition';
import Subtraction from './Subtraction';
export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    "my-addition": Addition,
    "my-subtraction": Subtraction
  }
}
</script>

<style>
</style>