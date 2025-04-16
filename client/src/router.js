import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import TestingView from './views/TestingView.vue'
import TagsView from './views/TagsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/testing', component: TestingView },
  { path: '/tags', component: TagsView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
