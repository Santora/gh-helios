

import { createWebHistory, createRouter } from "vue-router"
import About from '@/views/About.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import Home from '@/views/Home.vue'
import WarehouseDetail from '@/views/WarehouseDetail.vue'
import UnderConstruction from '@/views/UnderConstruction.vue'
import Antes from '@/views/Antes.vue'

const routes = [
  {
    path: "/gh-helios/",
    name: "Home",
    component: Home,
  },
  {
    path: '/gh-helios/about',
    name: "About",
    component: About,
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
  path: '/gh-helios/warehouse/:code',
  name: "WarehouseDetail",
  component: WarehouseDetail,
  // children: [
  //   {
  //     path: 'destinations',
  //     name: 'AirportDestinations',
  //     component: AirportDestinations
  //   }
  // ]
  },
  {
    path: '/gh-helios/warehouse/Antes',
    name: "Antes",
    component: Antes //() => import('../views/Antes.vue')
  },
  {
    path: '/gh-helios/warehouse/Helios',
    name: "Helios",
    component: () => import('@/views/Helios.vue')
  },
  {
    path: '/gh-helios/warehouse/Kedit',
    name: "Kedit",
    component:  () => import('@/views/Kedit.vue')
  }
]



const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
