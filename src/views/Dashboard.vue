<script setup>
// ─── IMPORTS ──────────────────────────────────────────────────
import BaseButton from '../components/common/BaseButton.vue';
import BaseCard from '../components/common/BaseCard.vue';
import { useAuthStore } from '../stores/auth';

// ─── STORE ────────────────────────────────────────────────────
const auth = useAuthStore()
</script>

<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold text-blue-600">Dashboard</h1>
    <p class="text-gray-600 mt-2 mb-6">Visão geral das finanças</p>

    <!--
      Repare que agora usamos <BaseCard> em vez de escrever
      <div class='bg-white rounded-lg shadow-md p-6'>.
      O parâmetro 'title' vira o <h2> do card.
    -->
    <BaseCard title="Bem-vindo!">
      <p class="text-lg">
        Olá, <span class="font-bold text-blue-600">{{ auth.userName }}</span>!
      </p>
      <p class="text-sm text-gray-500 mt-1">
        Status: {{ auth.isAuthenticated ? 'Logado' : 'Deslogado' }}
      </p>

      <!--
        Repare: variantes e tamanhos diferentes no mesmo componente.
        O '@click' funciona por baixo dos panos (attribute fallthrough).
      -->
      <div class="mt-4 flex gap-3">
        <BaseButton
          v-if="!auth.isAuthenticated"
          variant="success"
          size="md"
          @click="auth.login('Alcir', 'alcir@teste.com')"
        >
          Fazer Login (teste)
        </BaseButton>

        <BaseButton
          v-else
          variant="danger"
          size="md"
          @click="auth.logout()"
        >
          Sair
        </BaseButton>

        <BaseButton variant="secondary" size="sm">
          Secundário
        </BaseButton>

        <BaseButton variant="primary" size="lg" disabled>
          Desabilitado
        </BaseButton>
      </div>
    </BaseCard>
  </div>
</template>