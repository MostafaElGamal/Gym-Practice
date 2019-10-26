import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import add from '@/components/add'
import edit from '@/components/edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/edit-practice/:slugName',
      name: 'edit',
      component: edit
    }
  ]
})
