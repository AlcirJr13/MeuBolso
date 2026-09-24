<script setup>
// ─── IMPORTS ──────────────────────────────────────────────────
// watch = observa mudanças em variáveis e reage
// onMounted / onUnmounted = ciclos de vida do componente
import { onMounted, onUnmounted, watch } from 'vue'

// ─── PROPS ────────────────────────────────────────────────────
// modelOpen = estado do modal (v-model)
// title     = título no cabeçalho
// size      = largura máxima do modal
const props = defineProps({
  modelOpen: { type: Boolean, default: false },
  title:     { type: String, default: '' },
  size:      { type: String, default: 'md' }, // sm | md | lg | xl
})

// ─── EMITS ────────────────────────────────────────────────────
// update:modelOpen = para o v-model funcionar
// close            = evento extra para o pai saber que fechou
const emit = defineEmits(['update:modelOpen', 'close'])

// ─── AÇÕES ────────────────────────────────────────────────────
// Fecha o modal emitindo os dois eventos.
function close() {
  emit('update:modelOpen', false)
  emit('close')
}

// Detecta clique fora do conteúdo (no fundo escuro).
// event.target === event.currentTarget significa: cliquei no CONTAINER do fundo,
// não em algo DENTRO dele. Só nesse caso fechamos.
function handleBackdropClick(event) {
  if (event.target === event.currentTarget) {
    close()
  }
}

// Fecha com a tecla ESC (acessibilidade e UX).
function handleEscape(event) {
  if (event.key === 'Escape' && props.modelOpen) {
    close()
  }
}

// ─── CICLO DE VIDA ────────────────────────────────────────────
// onMounted = quando o componente entra na tela
// onUnmounted = quando o componente sai da tela
// Aqui, adicionamos/removemos o "ouvinte" do teclado.
// Por que? Se não removermos, o listener fica "vazando" na memória.
onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})
onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
})

// ─── WATCHER: TRAVAR SCROLL DO FUNDO ──────────────────────────
// Quando o modal abre, o <body> não pode rolar.
// Adicionamos/removemos a classe overflow-hidden do Tailwind.
watch(
  () => props.modelOpen,
  (isOpen) => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }
)

// ─── MAPAS DE TAMANHO ─────────────────────────────────────────
const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-2xl',
}
</script>

<template>
  <!--
    TELEPORT
    Move o modal para fora da árvore DOM (vai direto pro <body>).
    Por que? Se o modal ficasse dentro de um container com z-index
    ou overflow-hidden, ele poderia ficar "preso". O Teleport garante
    que ele flutue acima de TUDO.
  -->
  <Teleport to="body">
    <!--
      v-if="modelOpen" → o modal só existe no DOM quando está aberto.
      Quando fecha, o Vue "desmonta" o componente (libera memória).
    -->
    <div
      v-if="modelOpen"
      @click="handleBackdropClick"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <!--
        CONTEÚDO DO MODAL
        @click.stop = impede que o clique aqui "suba" para o backdrop
        (senão, clicar dentro do modal fecharia ele — bug clássico!)
      -->
      <div
        @click.stop
        class="bg-white rounded-lg shadow-xl w-full"
        :class="sizeClasses[size]"
      >
        <!-- ─── CABEÇALHO ─────────────────────────────────── -->
        <div class="flex justify-between items-center px-6 py-4 border-b">
          <h2 class="text-lg font-bold text-gray-800">
            <!-- Slot de título: se o pai passar, usa; senão, usa a prop title -->
            <slot name="header">{{ title }}</slot>
          </h2>
          <button
            @click="close"
            class="text-gray-400 hover:text-gray-600 text-2xl leading-none transition"
            aria-label="Fechar"
          >
            ×
          </button>
        </div>

        <!-- ─── CORPO ─────────────────────────────────────── -->
        <div class="px-6 py-4">
          <!-- Slot principal (sem name) = conteúdo padrão -->
          <slot />
        </div>

        <!-- ─── RODAPÉ (opcional) ─────────────────────────── -->
        <!--
          Slot NOMEADO 'footer'. Se o pai não preencher, o <div> inteiro
          não é renderizado (por causa do $slots.footer).
        -->
        <div
          v-if="$slots.footer"
          class="px-6 py-4 border-t flex justify-end gap-3"
        >
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Teleport>
</template>