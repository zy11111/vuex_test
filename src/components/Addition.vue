<template>
  <div>
    <!-- <h3>当前的count值为：{{this.$store.state.count}}</h3> -->
    <h3>{{this.$store.getters.showNum}}</h3>
    <!-- this可省略 -->
    <button @click="btnhHndle1">+1</button>
    <button @click="btnhHndle2">+N</button>
    <button @click="btnhHndle3">+1 Async</button>
    <button @click="btnhHndle4">+N Async</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    btnhHndle1() {
      this.$store.commit('add');
    },
    btnhHndle2() {
      this.$store.commit('addN', 3);
    },
    btnhHndle3() {
      this.$store.dispatch('addAsync')
    },
    btnhHndle4() {
      this.$store.dispatch('addNAsync', 5)
    }
  }
}
</script>