<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-md">
      <div class="max-w-6xl mx-auto px-4 py-3 flex items-center gap-6">
        <span class="text-xl font-bold text-blue-600">MeuBolso</span>
        <RouterLink to="/dashboard" class="text-gray-700 hover:text-blue-600 transition">Dashboard</RouterLink>
        <RouterLink to="/transactions" class="text-gray-700 hover:text-blue-600 transition">Lançamentos</RouterLink>
        <RouterLink to="/budget" class="text-gray-700 hover:text-blue-600 transition">Orçamento</RouterLink>
        <RouterLink to="/savings-goals" class="text-gray-700 hover:text-blue-600 transition">Cofrinhos</RouterLink>
        <RouterLink to="/investments" class="text-gray-700 hover:text-blue-600 transition">Investimentos</RouterLink>
      </div>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>