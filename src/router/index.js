import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', name: 'dashboard', component: () => import('../views/Dashboard.vue') },
  { path: '/transactions', name: 'transactions', component: () => import('../views/Transactions.vue') },
  { path: '/budget', name: 'budget', component: () => import('../views/Budget.vue') },
  { path: '/savings-goals', name: 'savings-goals', component: () => import('../views/SavingsGoals.vue') },
  { path: '/investments', name: 'investments', component: () => import('../views/Investments.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router