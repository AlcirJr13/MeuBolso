<script setup>
// ─── PROPS ────────────────────────────────────────────────────
const props = defineProps({
  // title = título opcional exibido no topo do card
  // Se não passar, o título nem aparece (usamos v-if no template)
  title: { type: String, default: '' },
})
</script>

<template>
  <!-- Container principal: fundo branco, cantos arredondados, sombra, padding -->
  <div class="bg-white rounded-lg shadow-md p-6">
    <!--
      v-if="title"  → só renderiza o <h2> se 'title' tiver conteúdo.
      Repare: 'title' sem ':' é o valor (String), não a prop.
      No template, referências a props são diretas (sem props.title).
    -->
    <h2 v-if="title" class="text-xl font-bold text-gray-800 mb-4">
      {{ title }}
    </h2>

    <!-- Slot para o conteúdo livre (qualquer coisa que o pai quiser colocar) -->
    <slot />
  </div>
</template>