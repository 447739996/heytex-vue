import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import topnav from '../views/topnav.vue'
import history from '../views/history.vue'
import news from '../views/news.vue'
import Recruitment from '../views/recruitment.vue'
import product from '../views/product.vue'
import location from '../views/location.vue'
import vision from '../views/vision.vue'
import responsibility from '../views/responsibility.vue'
import ball from '../views/ball.vue'
import search from '../views/search.vue'
import newsdetail from '../views/newsdetail.vue'
import article from '../views/article.vue'
import part from '../views/part.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/part',
    name: 'part',
    component: part
  },
  {
    path: '/article',
    name: 'article',
    component: article
  },
  {
    path: '/newsdetail',
    name: 'newsdetail',
    component: newsdetail
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/ball',
    name: 'ball',
    component: ball
  },
  {
    path: '/responsibility',
    name: 'responsibility',
    component: responsibility
  },
  {
    path: '/vision',
    name: 'vision',
    component: vision
  },
  {
    path: '/location',
    name: 'location',
    component: location
  },
  {
    path: '/product',
    name: 'product',
    component: product
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/topnav',
    name: 'topnav',
    component: topnav
  },
  {
    path: '/history',
    name: 'history',
    component: history
  },
  {
    path: '/news',
    name: 'news',
    component: news
  },
  {
    path: '/Recruitment',
    name: 'Recruitment',
    component: Recruitment
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
