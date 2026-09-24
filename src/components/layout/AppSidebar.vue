<script setup>
//--- MENU ---
// Array com os itens da navegação
// Depois podemos trocar emojis por SVGs ou lucide-vue-next
const menuItems = [
  { to: '/dashboard',     label: 'Dashboard',     icon: '📊' },
  { to: '/transactions',  label: 'Lançamentos',   icon: '💰' },
  { to: '/budget',        label: 'Orçamento',     icon: '💵' },
  { to: '/savings-goals', label: 'Cofrinhos',     icon: '🐷' },
  { to: '/investments',   label: 'Investimentos', icon: '📈' },
]
</script>

<template>
  <aside class="w-64 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0">
    <!-- LOGO -->
    <div class="px-6 py-5 border-b border-gray-200">
      <h1 class="text-2xl font-bold text-blue-600">MeuBolso</h1>
      <p class="text-xs text-gray-400 mt-1">Controle financeiro</p>
    </div>

    <!-- NAVEGAÇÃO -->
    <nav class="flex-1 p-3 space-y-1">
      <RouterLink
        v-for="item in menuItems"
        :key="item.to"
        :to="item.to"
        class="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 transition"
        active-class="bg-blue-50 text-blue-700 font-semibold"
      >
        <span class="text-lg">{{ item.icon }}</span>
        <span class="text-sm">{{ item.label }}</span>
      </RouterLink>
    </nav>

    <!-- RODAPÉ -->
    <div class="p-4 border-t border-gray-200">
      <p class="text-xs text-gray-400 text-center">v0.1.0 — Em desenvolvimento</p>
    </div>
  </aside>
</template>