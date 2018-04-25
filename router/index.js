import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'
import DetailPage2 from '@/pages/detail2'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/detail',
      name:'DetailPage',
      component: DetailPage
    },
    {
      path: '/detail2',
      name:'DetailPage2',
      component: DetailPage2
    }

  ]
})
