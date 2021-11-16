import Home from './pages/Home.js'
import Page1 from './pages/Page1.js'

export default {
  root: 'home',
  routes: [
    {
      path: 'home',
      component: Home,
      widgets: ['Menu'],
    },
    {
      path: 'page1',
      component: Page1,
      widgets: ['Menu'],
    },
  ],
}
