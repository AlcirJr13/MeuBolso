<script setup>
import { ref } from 'vue'
import BaseButton from '../components/common/BaseButton.vue'
import BaseCard from '../components/common/BaseCard.vue'
import BaseModal from '../components/common/BaseModal.vue'
import BaseProgressBar from '../components/common/BaseProgressBar.vue'
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()

// Estado para testar o progresso
const progresso = ref(0)

// Estado para controlar o modal
const modalAberto = ref(false)

// Função só pra simular "aumentar progresso"
function aumentar() {
  if (progresso.value < 100) {
    progresso.value = Math.min(progresso.value + 10, 100)
  }
}
function resetar() {
  progresso.value = 0
}
</script>

<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold text-blue-600">Dashboard</h1>
    <p class="text-gray-600 mt-2 mb-6">Visão geral das finanças</p>

    <BaseCard title="Bem-vindo!">
      <p class="text-lg">
        Olá, <span class="font-bold text-blue-600">{{ auth.userName }}</span>!
      </p>
      <BaseButton
        v-if="!auth.isAuthenticated"
        variant="success"
        @click="auth.login('Alcir', 'alcir@teste.com')"
      >
        Fazer Login (teste)
      </BaseButton>
      <BaseButton v-else variant="danger" @click="auth.logout()">Sair</BaseButton>
    </BaseCard>

    <!-- Teste da barra de progresso -->
    <div class="mt-6">
      <BaseCard title="Teste de Progress Bar">
        <!--
          showLabel = true → mostra o "30.0%" no topo
          Slot #info   → texto à esquerda da barra
        -->
        <div class="flex flex-col gap-4">
          <BaseProgressBar
            :value="progresso"
            :max="100"
            variant="brand"
          >
            <template #info>Progresso: {{ progresso }}%</template>
          </BaseProgressBar>

          <BaseProgressBar :value="progresso" :max="100" variant="success" size="lg">
            <template #info>Cor verde (success)</template>
          </BaseProgressBar>

          <BaseProgressBar :value="progresso" :max="100" variant="warning">
            <template #info>Cor laranja (warning)</template>
          </BaseProgressBar>

          <BaseProgressBar :value="progresso" :max="100" variant="danger" size="sm">
            <template #info>Cor vermelha (danger) + size sm</template>
          </BaseProgressBar>
        </div>

        <div class="mt-4 flex gap-3">
          <BaseButton @click="aumentar">+10%</BaseButton>
          <BaseButton variant="secondary" @click="resetar">Resetar</BaseButton>
        </div>
      </BaseCard>
    </div>

    <!-- Teste do modal -->
    <div class="mt-6">
      <BaseCard title="Teste de Modal">
        <BaseButton @click="modalAberto = true">Abrir Modal</BaseButton>
      </BaseCard>
    </div>

    <!--
      v-model:modelOpen="modalAberto" → liga a prop modelOpen do modal
                                        à variável modalAberto local
    -->
    <BaseModal v-model:modelOpen="modalAberto" title="Meu Modal de Teste">
      <p class="text-gray-600">
        Este é o corpo do modal. Você pode colocar qualquer conteúdo aqui.
      </p>
      <p class="text-gray-600 mt-2">
        Tente fechar clicando fora, apertando ESC, ou no botão "×" no topo.
      </p>

      <!-- Slot nomeado 'footer' — só aparece se este bloco existir -->
      <template #footer>
        <BaseButton variant="secondary" @click="modalAberto = false">
          Cancelar
        </BaseButton>
        <BaseButton @click="modalAberto = false">Confirmar</BaseButton>
      </template>
    </BaseModal>
  </div>
</template>