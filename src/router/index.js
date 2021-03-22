import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Count from '@/components/Count'
import Todos from '@/components/todos/todos'
import Json from '@/components/jsonTest/json.vue'
import Test from '@/components/test'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'count',
      component: Count
    },
    {
      path: '/todos',
      name: 'todos',
      component: Todos
    },
    {
      path: '/json',
      name: 'json',
      component: Json
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
