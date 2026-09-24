<script setup>
// --- IMPORTS ---
//computed = cria uma variavel REATIV que se atualiza automaticamente quando suas dependencias mudam
import { computed } from 'vue'

//--- PROPS ---
//value = valor atual
//max = valor máximo
//showLabel = mostra o "81.9%" ao lado da barra
//variant = cor da barra (primary, secondary, success, warning, danger)
//size = altura da barra (sm, md, lg)
const props = defineProps({
  value: {type: Number, default: 0},
  max: {type: Number, default:100},
  showLabel: {type: Boolean, default: true},
  variant: {type: String, default: 'primary'},
  size: {type: String, default: 'md'},
})

// --- COMPUTED: PERCENTUAL ---
//Calcula a % de preenchimento da barra com base no valor atual e no valor máximo
//Math.min = limita o valor máximo a 100% (não deixa passar de 100%)
//Math.max = limita o valor mínimo a 0% (não deixa passar de 0%)
const percentage = computed(()=>{
  const pct = (props.value / props.max) * 100
  return Math.min(Math.max(pct, 0), 100)
})

// Texto formatado do percentual
const percentageLabel = computed(()=>{
  return percentage.value.toFixed(1) + '%'
})

// --- MAPAS DE CLASSES ---
//Classes do tailwind por variante. A barra de preenchimento usa isso.
const variantClasses ={
  brand: 'bg-blue-600',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  danger: 'bg-red-500',
}

//Altura da barra por tamanho.
const sizeClasses = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4',
}
</script>

<template>
  <div class="w-full">
    <!-- Cabeçalho opcional: rótulo de percentual alinhado à direita -->
    <div v-if="showLabel"class="flex justify-between items-center mb-1">
      <span class="text-xs text-gray-500">
        <!-- Slot opcional para texto à esquerda (ex: "R$ 36.850 de R$ 45.000") -->
         <slot name="info"/>
      </span>
      <span class="text-xs font-medium text-gray-700">
        {{ percentageLabel }}
      </span>
    </div>

    <!--
      Barra de fundo (cinza) — ocupa 100% do container
      A barra interna colorida fica DENTRO dela, com width dinâmico.
      overflow-hidden = corta a barra interna se passar dos limites.
    -->
      <div
      class="w-full bg-gray-200 rounded-full overflow-hidden"
      :class="sizeClasses[size]"
    >
      <!--
        :style="{ width: percentage + '%' }" = binding de ESTILO inline.
        Diferente de :class (que troca classes), :style aplica CSS direto.
        Aqui é ideal porque o valor (81.9%) é dinâmico e numérico.
      -->
      <div
        class="h-full transition-all duration-500 ease-out"
        :class="variantClasses[variant]"
        :style="{ width: percentage + '%' }"
      />
    </div>
  </div>
</template>