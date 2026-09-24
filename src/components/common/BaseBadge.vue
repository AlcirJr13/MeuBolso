<script setup>
// ─── PROPS ────────────────────────────────────────────────────
// variant = cor do badge (como no BaseButton)
// size    = tamanho do badge
const props = defineProps({
  variant: { type: String, default: 'neutral' }, // neutral | success | danger | warning | info
  size:    { type: String, default: 'md' },      // sm | md
})

// ─── MAPAS DE CLASSES ─────────────────────────────────────────
// Cada variante tem fundo + texto combinados.
// Usamos cores claras no fundo e escuras no texto (padrão de UI moderna).
const variantClasses = {
  neutral: 'bg-gray-100 text-gray-700',
  success: 'bg-green-100 text-green-700',
  danger:  'bg-red-100 text-red-700',
  warning: 'bg-orange-100 text-orange-700',
  info:    'bg-blue-100 text-blue-700',
}

const sizeClasses = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-1',
}
</script>

<template>
  <!--
    :class = combina classes fixas + variante + tamanho.
    'inline-flex items-center' = faz o badge caber no tamanho do texto.
  -->
  <span
    :class="[
      'inline-flex items-center rounded-full font-medium',
      variantClasses[variant],
      sizeClasses[size],
    ]"
  >
    <!-- Slot: o texto dentro do badge vem do pai -->
    <slot />
  </span>
</template>