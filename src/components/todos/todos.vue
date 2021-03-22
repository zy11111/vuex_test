<template>
  <div>
    <a-input placeholder="请输入任务" class="my_iput" :value="inputValue" @change="handleInputChange" />
    <a-button type="primary" @click="addItemToList">
      添加事项
    </a-button>
    <a-list bordered :data-source="infoList" class="dt_list">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-checkbox :checked="item.done" @change="(e) => {change(e, item.id)}">{{ item.info }}</a-checkbox>
        <a slot="actions" @click="RemoveItemById(item.id)">删除</a>
      </a-list-item>
      <div slot="footer" class="footer">
        <span>{{unDoneLength}}条剩余</span>
        <a-button-group>
          <a-button :type="viewKey === 'all'?'primary':'default'" @click="changeList('all')">
            全部
          </a-button>
          <a-button :type="viewKey === 'undone'?'primary':'default'" @click="changeList('undone')">未完成</a-button>
          <a-button :type="viewKey === 'done'?'primary':'default'" @click="changeList('done')">已完成</a-button>
        </a-button-group>
        <a slot="actions" @click="clean">清除已完成</a>
      </div>
    </a-list>
  </div>
</template>

<script>
//按需导入
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      // list: [],
    }
  },
  computed: {
    ...mapState(['inputValue', 'viewKey']),
    ...mapGetters(['unDoneLength', 'infoList'])
  },
  created() {
    this.$store.dispatch('getList')
  },
  methods: {
    getCurrentAnchor() {
      return '#components-anchor-demo-static';
    },
    handleInputChange(e) {
      console.log(e.target.value)
      this.$store.commit('setInputValue', e.target.value)
    },
    //向列表中新增记录
    addItemToList() {
      if(this.inputValue.trim().length <= 0) {
        return this.$message.warning("文本框内容不能为空")
      } else {
        this.$store.commit('addItem')
      }
    },
    //删除数据
    RemoveItemById(id) {
      console.log(id)
      this.$store.commit('removeItem', id)
    },
    //监听复选框状态
    change(e, id) {
      //通过e.target.checked可以获取最新的选中状态
      // console.log(`checked = ${e.target.checked}`);
      console.log(e.target.checked, id)
      const param = {
        id: id,
        status: e.target.checked
      }
      this.$store.commit('changeStatus', param)
    },
    //清除已完成
    clean() {
      this.$store.commit('cleanDone')
    },
    //修改页面上展示的列表数据
    changeList(key) {
      console.log(key)
      this.$store.commit('changeViewKey', key)

    }
  }
}
</script>

<style scoped>
  .my_iput {
    width: 500px;
    margin-right: 10px;
  }
  .dt_list {
    width: 500px;
    margin-top: 10px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>