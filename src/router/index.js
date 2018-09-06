import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import home from '@/pages/home'
import test1 from '@/pages/test1'
import test2 from '@/pages/test2'
import test3 from '@/pages/test3'
import test4 from '@/pages/test4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login,
      name:'login',
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [{
        path: '',
        component: test1,
        meta: [],
      },{
        path: '/test1',
        component: test1,
        meta: ['一级菜单A', '二级菜单1'],
      },{
        path: '/test2',
        component: test2,
        meta: ['一级菜单A', '二级菜单2'],
      },{
        path: '/test3',
        component: test3,
        meta: ['一级菜单A', '二级菜单3'],
      },{
        path: '/test4',
        component: test4,
        meta: ['一级菜单B'],
      }]
    },
  ]
})
