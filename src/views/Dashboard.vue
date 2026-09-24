<script setup>
import { ref } from 'vue'
import BaseButton from '../components/common/BaseButton.vue'
import BaseCard from '../components/common/BaseCard.vue'
import BaseModal from '../components/common/BaseModal.vue'
import BaseProgressBar from '../components/common/BaseProgressBar.vue'
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
const progresso = ref(0)
const modalAberto = ref(false)

function aumentar() {
  progresso.value = Math.min(progresso.value + 10, 100)
}
function resetar() {
  progresso.value = 0
}
</script>

<template>
  <div class="space-y-6">
    <!-- CARD 1: BOAS-VINDAS -->
    <BaseCard title="Bem-vindo!">
      <p class="text-lg">
        Olá, <span class="font-bold text-blue-600">{{ auth.userName }}</span>!
      </p>
      <BaseButton
        v-if="!auth.isAuthenticated"
        variant="success"
        class="mt-4"
        @click="auth.login('Alcir', 'alcir@teste.com')"
      >
        Fazer Login (teste)
      </BaseButton>
      <BaseButton v-else variant="danger" class="mt-4" @click="auth.logout()">
        Sair
      </BaseButton>
    </BaseCard>

    <!-- CARD 2: PROGRESS BAR -->
    <BaseCard title="Teste de Progress Bar">
      <div class="flex flex-col gap-4">
        <BaseProgressBar :value="progresso" :max="100" variant="brand">
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

    <!-- CARD 3: MODAL -->
    <BaseCard title="Teste de Modal">
      <BaseButton @click="modalAberto = true">Abrir Modal</BaseButton>
    </BaseCard>

    <BaseModal v-model:modelOpen="modalAberto" title="Meu Modal de Teste">
      <p class="text-gray-600">
        Este é o corpo do modal. Feche com ESC, clique fora, ou no botão ×.
      </p>

      <template #footer>
        <BaseButton variant="secondary" @click="modalAberto = false">Cancelar</BaseButton>
        <BaseButton @click="modalAberto = false">Confirmar</BaseButton>
      </template>
    </BaseModal>
  </div>
</template>