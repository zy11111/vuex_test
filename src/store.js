import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    list: [],
    //文本框内容
    inputValue: 'aaa',
    nextId: 5,
    viewKey: 'all'
  },
  mutations: {
    add(state) {
      state.count++
    },
    reduce(state) {
      state.count--
    },
    addN(state, step) {
      state.count += step
    },
    reduceN(state, step) {
      state.count -= step
    },
    //为list赋值
    initList(state, list) {
      state.list = list
    },
    //为inputValue赋值
    setInputValue(state, value) {
      state.inputValue = value
      console.log(state.inputValue)
    },
    //向list添加数据
    addItem(state) {
      const obj = {
        id: state.nextId,
        info: state.inputValue.trim(),
        done: false
      }
      state.list.push(obj)
      state.nextId++;
      state.inputValue == ''
    },
    //根据id删除数据
    removeItem(state, id) {
      //根据id查找对应项的索引
      const i = state.list.findIndex(x => x.id === id)
      //根据所有删除数据
      if(i !== -1) {
        state.list.splice(i, 1)
      }
    },
    //同步选中状态
    changeStatus(state, param) {
      const i = state.list.findIndex(x => x.id === param.id)
      if(i !== -1) {
        state.list[i].done = param.status
      }
    },
    //清除已完成的任务
    cleanDone(state) {
      state.list = state.list.filter(x => x.done === false)
    },
    //修改视图的关键字
    changeViewKey(state, key) {
      state.viewKey = key
    }
  },
  actions: {
    addAsync(context) {
      setTimeout(() => {
        context.commit('add')
      },1000)
    },
    addNAsync(context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      },1000)
    },
    reduceAsync(context) {
      setTimeout(() => {
        context.commit('reduce')
      },1000)
    },
    reduceNAsync(context, step) {
      setTimeout(() => {
        context.commit('reduceN', step)
      },1000)
    },
    //获取list,异步
    getList(context) {
      axios.get('/static/list.json').then(({data}) => {
        console.log(data);
        //调用mutations中的initList方法为list赋值
        context.commit('initList', data)
      })
    }
  },
  getters: {
    showNum(state) {
      return '当前最新的数量是【' + state.count + '】'
    },
    //统计未完成的任务条数
    unDoneLength(state) {
      return state.list.filter(x => x.done === false).length
    },
    //切换列表
    infoList(state) {
      if(state.viewKey === 'all') {
        return state.list
      } else if(state.viewKey === 'undone') {
        return state.list.filter(x => x.done === false)
      } else if(state.viewKey === 'done') {
        return state.list.filter(x => x.done === true)
      } else {
        return state.list
      }
    }
  }
})