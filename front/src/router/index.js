import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuizView from '../views/QuizView.vue'
import TestQuiz from '../views/TestQuiz.vue'
import ResultView from '../views/ResultView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: QuizView
  },
  {
    path: '/test',
    name: 'test',
    component: TestQuiz
  },
  {
    path: '/result',
    name: 'result',
    component: ResultView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
