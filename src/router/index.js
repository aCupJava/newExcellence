import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Welcome from '@/pages/Welcome/Welcome'
import Test from '@/pages/Demo/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/Demo',
      name: 'Test',
      component: Test
    },
    {
      path: '/login',
      name: 'HelloWorlild',
      component: Login
    }

  ]
})
