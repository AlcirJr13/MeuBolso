import { createRouter, createWebHistory } from 'vue-router'

// ─── ROTAS ────────────────────────────────────────────────────
// Cada rota agora tem um 'meta' com um título amigável.
// O Header do app vai ler esse título e exibir automaticamente.
const routes = [
  { path: '/', redirect: '/dashboard' },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: { title: 'Dashboard' },
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: () => import('../views/Transactions.vue'),
    meta: { title: 'Lançamentos' },
  },
  {
    path: '/budget',
    name: 'budget',
    component: () => import('../views/Budget.vue'),
    meta: { title: 'Orçamento' },
  },
  {
    path: '/savings-goals',
    name: 'savings-goals',
    component: () => import('../views/SavingsGoals.vue'),
    meta: { title: 'Cofrinhos' },
  },
  {
    path: '/investments',
    name: 'investments',
    component: () => import('../views/Investments.vue'),
    meta: { title: 'Investimentos' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router