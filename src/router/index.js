import Vue from 'vue'
import Router from 'vue-router'
import DetailPage from '@/pages/detail'
import TrendPage from '@/pages/TrendPage'
import PricesPage from '@/pages/PricesPage'
import DetailPage2 from  '@/pages/detail2'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/trend',
      name: 'TrendPage',
      component: TrendPage
    },
    {
      path: '/prices',
      name: 'PricesPage',
      component: PricesPage
    },
    {
      path: '/detail',
      name: 'DetailPage',
      component: DetailPage
    },
    {
      path: '/detail2',
      name: 'DetailPage2',
      component: DetailPage2
    }
  ]
})
