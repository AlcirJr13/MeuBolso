<script setup>
import { useAuthStore } from '../stores/auth';

const auth = useAuthStore()
</script>

<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold text-blue-600">Dashboard</h1>
    <p class="text-gray-600 mt-2">Visão geral das finanças</p>

    <div class="mt-6 p-4 bg-white rounded-lg shadow">
      <p class="text-lg">
        Olá, <span class="font-bold text-blue-600">{{ auth.userName }}</span>!
      </p>
      <p class="text-sm text-gray-500 mt-1">
        Status: {{ auth.isAuthenticated ? 'Logado' : 'Deslogado' }}
      </p>

      <button
        v-if="!auth.isAuthenticated"
        @click="auth.login('Alcir', 'alcir@teste.com')"
        class="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition"
      >
        Fazer Login (teste)
      </button>

      <button
        v-else
        @click="auth.logout()"
        class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
      >
        Sair
      </button>
    </div>
  </div>
</template>