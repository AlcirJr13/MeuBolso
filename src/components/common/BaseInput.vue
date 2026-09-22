<script setup>
//---- PROPS ----
//modelValue = valor do input (padrão do Vue para v-model)
//label = texto exibido acima do input
//type = tipo do input (text, password, email, etc.)
//placehopolder = texto exibido dentro do input quando vazio
//error = mensagem de erro exibida abaixo do input (se existir, mostra em vermelho)

const props = defineProps({
  modelValue:{type: [String, Number],default:''},
  label: {type: String, default: ''},
  type: {type: String, default: 'text'},
  placeholder: {type: String, default: ''},
  error: {type: String, default: ''}
})

//---- EMITS ----
//Declaramos quais eventos este componente pode emitir
//'update:modelValue' = evento emitido quando o valor do input muda (padrão do Vue para v-model)
const emit = defineEmits(['update:modelValue'])

//--- HANDLER ---
//Função chamada quando o valor do input muda
//event.target.value = novo valor do input
//emit(...) = emite o evento 'update:modelValue' com o novo valor
function handleInput(event){
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <!--
        v-if="label" -> só mostra o <label> se o pai passar um texto.
        Sem 'for' associado pois é um caso simples. Em acessibilidade completa, ligariamos ao id do input.
    -->
    <label v-if="label" class="text-sm font-medium text-gray-700">
      {{ label }}
    </label>

    <!--
      INPUT —
        • bg-white       → fundo branco explícito (corrige o modo escuro)
        • text-gray-900  → cor do texto explícita (não herda do navegador)
        • placeholder:text-gray-400 → cor do placeholder (só no placeholder)
      Sem essas 3 classes, o navegador em modo escuro aplica estilos próprios
      e o input fica quase preto, destoando do resto do app.

      :value=modelValue" -> exibe o valor atgual que veio do pai (v-model)
      @input="handleInput" -> chama a função handleInput quando o usuário digita algo, que emite o evento 'update:modelValue' para o pai atualizar o valor
      :type="type" -> define o tipo do input (text, password, email, etc.)
      :placeholder="placeholder" -> define o texto exibido dentro do input quando vazio
      :class="..." -> aplica classes do Tailwind CSS para estilizar o input, incluindo borda vermelha se houver erro
    -->
    <input
      :value="modelValue"
      @input="handleInput"
      :type="type"
      :placeholder="placeholder"
      :class="[
        'w-full px-3 py-2 border transition',
        'bg-white text-gray-900 placeholder:text-gray-400',
        'focus:outline-none focus:ring-2 focus:ring-blue-500',
        error
          ? 'border-red-500 focus:ring-red-500'
          : 'border-gray-300 focus:ring-blue-500',
      ]"
    />

    <!-- Mensagem de erro: Aparece se o pai passou um texto -->
      <p v-if="error" class="text-sm text-red-500">
      {{ error }}
    </p>
  </div>
</template>