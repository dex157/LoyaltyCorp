import Vue from 'vue'
import Router from 'vue-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about-us',
      component: About
    },
    {
      path: '/contact-us',
      component: Contact
    }
  ]
})
