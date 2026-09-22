<script setup>
// ─── IMPORTS ──────────────────────────────────────────────────
import { ref } from 'vue'
import BaseBadge from '../components/common/BaseBadge.vue'
import BaseButton from '../components/common/BaseButton.vue'
import BaseCard from '../components/common/BaseCard.vue'
import BaseInput from '../components/common/BaseInput.vue'
import { useAuthStore } from '../stores/auth'

// ─── STORE ────────────────────────────────────────────────────
const auth = useAuthStore()

// ─── ESTADO LOCAL (para testar o v-model) ─────────────────────
// ref = variável reativa. Quando o input mudar, este valor atualiza.
const nomeTeste = ref('')
const emailTeste = ref('')
</script>

<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold text-blue-600">Dashboard</h1>
    <p class="text-gray-600 mt-2 mb-6">Visão geral das finanças</p>

    <!-- CARD 1: boas-vindas (como antes) -->
    <BaseCard title="Bem-vindo!">
      <p class="text-lg">
        Olá, <span class="font-bold text-blue-600">{{ auth.userName }}</span>!
      </p>
      <p class="text-sm text-gray-500 mt-1">
        Status: {{ auth.isAuthenticated ? 'Logado' : 'Deslogado' }}
      </p>

      <div class="mt-4 flex gap-3">
        <BaseButton
          v-if="!auth.isAuthenticated"
          variant="success"
          @click="auth.login('Alcir', 'alcir@teste.com')"
        >
          Fazer Login (teste)
        </BaseButton>

        <BaseButton v-else variant="danger" @click="auth.logout()">
          Sair
        </BaseButton>
      </div>
    </BaseCard>

    <!-- CARD 2: teste dos novos componentes -->
    <div class="mt-6">
      <BaseCard title="Teste de Input + Badge">
        <!--
          v-model="nomeTeste" → liga a variável 'nomeTeste' ao input.
          O que você digitar aqui aparece no parágrafo abaixo em tempo real.
        -->
        <div class="flex flex-col gap-4 max-w-md">
          <BaseInput
            v-model="nomeTeste"
            label="Nome"
            placeholder="Digite seu nome"
          />

          <BaseInput
            v-model="emailTeste"
            label="E-mail"
            type="email"
            placeholder="voce@email.com"
          />

          <BaseInput
            label="Campo com erro"
            placeholder="Este tem erro"
            error="Este campo é obrigatório"
          />
        </div>

        <!-- Parágrafo que mostra o valor das variáveis em tempo real -->
        <div class="mt-6 p-3 bg-gray-50 rounded">
          <p class="text-sm text-gray-600">
            Nome digitado:
            <span class="font-bold">{{ nomeTeste || '(vazio)' }}</span>
          </p>
          <p class="text-sm text-gray-600">
            Email digitado:
            <span class="font-bold">{{ emailTeste || '(vazio)' }}</span>
          </p>
        </div>

        <!-- Badges (só visual, sem interação) -->
        <div class="mt-4 flex gap-2 flex-wrap">
          <BaseBadge variant="neutral">Neutro</BaseBadge>
          <BaseBadge variant="success">Essencial</BaseBadge>
          <BaseBadge variant="warning">Importante</BaseBadge>
          <BaseBadge variant="danger">Luxo</BaseBadge>
          <BaseBadge variant="info" size="sm">Small</BaseBadge>
        </div>
      </BaseCard>
    </div>
  </div>
</template>