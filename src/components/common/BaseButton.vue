<script setup>
// ─── PROPS ────────────────────────────────────────────────────
// defineProps = forma do Vue 3 de RECEBER dados do componente pai.
// O componente pai é quem usa <BaseButton variant="danger" />.
const props = defineProps({
  // variant = estilo visual do botão
  // type: tipo esperado, default: valor padrão se o pai não passar nada
  variant: { type: String, default: 'primary' }, // primary | secondary | danger | success

  // size = tamanho do botão
  size: { type: String, default: 'md' },          // sm | md | lg

  // disabled = desabilita o botão
  disabled: { type: Boolean, default: false },
})

// ─── MAPAS DE CLASSES ─────────────────────────────────────────
// Cada variante tem um conjunto de classes Tailwind.
// Quando o pai pedir variant="danger", pegamos variantClasses['danger'].
const variantClasses = {
  primary:   'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
  danger:    'bg-red-500 hover:bg-red-700 text-white',
  success:   'bg-green-500 hover:bg-green-700 text-white',
}

const sizeClasses = {
  sm: 'py-1 px-3 text-sm',
  md: 'py-2 px-4 text-base',
  lg: 'py-3 px-6 text-lg',
}
</script>

<template>
  <!--
    :disabled = binding dinâmico (com dois-pontos).
                Se disabled for true, o atributo disabled aparece.
    :class    = binding dinâmico de classe. Passamos um ARRAY:
                - string fixa  → 'font-bold rounded transition'
                - variante     → variantClasses[variant]  (ex: 'bg-blue-600 ...')
                - tamanho      → sizeClasses[size]
                - condicional  → se disabled, adiciona 'opacity-50 cursor-not-allowed'
  -->
  <button
    :disabled="disabled"
    :class="[
      'font-bold rounded transition',
      variantClasses[variant],
      sizeClasses[size],
      disabled ? 'opacity-50 cursor-not-allowed' : '',
    ]"
  >
    <!-- <slot /> = "buraco" onde o TEXTO do botão é injetado pelo pai.
         Se o pai escreve <BaseButton>Salvar</BaseButton>, o "Salvar"
         aparece aqui dentro. -->
    <slot />
  </button>
</template>