import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import goodsInfor from '@/components/page/GoodsInfor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: layout,
      children: [{
        path: '/goodsInfor/:id',
        name: 'goodsInfor',
        component: goodsInfor
      }]
    }
  ]
})
