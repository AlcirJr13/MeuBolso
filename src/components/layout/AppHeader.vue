<script setup>
// ─── IMPORTS ──────────────────────────────────────────────────
// computed = valor que se recalcula quando dependências mudam
import { computed } from 'vue'
// useRoute = hook para ler a rota atual
import { useRoute } from 'vue-router'
import { useAuthStore } from '../../stores/auth'

// ─── ROTA ATUAL ───────────────────────────────────────────────
const route = useRoute()

// ─── STORE ────────────────────────────────────────────────────
const auth = useAuthStore()

// ─── COMPUTED: TÍTULO DA PÁGINA ───────────────────────────────
// Pega o título do 'meta' da rota atual.
// Se a rota não tiver meta.title, retorna 'MeuBolso' como fallback.
const pageTitle = computed(() => {
  return route.meta.title || 'MeuBolso'
})
</script>

<template>
  <!--
    HEADER — barra do topo.
    sticky top-0    → gruda no topo
    z-10            → fica acima do conteúdo (evita sobreposição estranha)
    bg-white        → fundo branco
    border-b        → borda embaixo
  -->
  <header class="sticky top-0 z-10 bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
    <!-- ─── LADO ESQUERDO: TÍTULO ────────────────────────── -->
    <div>
      <h2 class="text-xl font-bold text-gray-800">{{ pageTitle }}</h2>
      <p class="text-xs text-gray-400">Bem-vindo ao MeuBolso</p>
    </div>

    <!-- ─── LADO DIREITO: USUÁRIO ────────────────────────── -->
    <div class="flex items-center gap-3">
      <!-- Avatar circular com inicial -->
      <div class="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
        <span class="text-sm font-bold text-blue-600">
          {{ auth.userName.charAt(0).toUpperCase() }}
        </span>
      </div>

      <!-- Nome + status -->
      <div class="text-right">
        <p class="text-sm font-medium text-gray-700">{{ auth.userName }}</p>
        <p class="text-xs text-gray-400">
          {{ auth.isAuthenticated ? 'Logado' : 'Visitante' }}
        </p>
      </div>
    </div>
  </header>
</template>