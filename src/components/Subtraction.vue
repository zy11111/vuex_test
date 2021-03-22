<template>
  <div>
    <!-- <h3>当前的count值为：{{count}}</h3> -->
    <h3>{{showNum}}</h3>
    <button @click="btnHandle1">-1</button>
    <button @click="btnHandle2">-N</button>
    <button @click="reduceAsync">-1 Async</button>
    <button @click="reduceNAsync(5)">-N Async</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['reduce', 'reduceN']),
    ...mapActions(['reduceAsync', 'reduceNAsync']),
    btnHandle1() {
      this.reduce()
    },
    btnHandle2() {
      this.reduceN(3)
    },
    btnHandle4() {
      this.reduceNAsync(5)
    }
  }
}
</script>