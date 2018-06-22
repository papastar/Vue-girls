import Vue from 'vue'
import Router from 'vue-router'
import InfiniteImg from '@/components/InfiniteImg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InfiniteImg',
      component: InfiniteImg
    }
  ]
})
