<template>
  <div>
    <div class="form">
      <form>
        <div v-for="(item, index) in dataList" :key="index">
          <p>{{ item.title }}：</p>
          <select v-if="item.type=='select'">
            <option value="i.value" v-for="i in item.options" :key="i.id">{{i.value}}</option>
          </select>
          <!-- <div v-for="i in item.options" :key="i.id"> -->
            <div v-for="v in item.options.children" :key="v.id">
              <p>{{ v.title }}：</p>
              <input v-if="v.label=='input'" :type="v.type" :value="v.value">
            </div>
          <!-- </div> -->
        </div>
        
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: []
    }
  },
  created() {
    this.$axios.get("../../../static/json/data.json")
    .then(res => {
      console.log(res.data.data);
      this.dataList = res.data.data;
    })
  },
  methods: {

  }
}
</script>

<style lang="" scoped>
  
</style>