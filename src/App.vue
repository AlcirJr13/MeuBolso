<script setup>
// ─── IMPORTS ──────────────────────────────────────────────────
import { RouterView } from 'vue-router';
import AppHeader from './components/layout/AppHeader.vue';
import AppSidebar from './components/layout/AppSidebar.vue';
</script>

<template>
  <!--
    LAYOUT PRINCIPAL
    flex      → coloca a Sidebar e o "resto" lado a lado
    min-h-screen → altura mínima de 100% da tela
    bg-gray-50 → fundo cinza MUITO claro para o conteúdo respirar
  -->
  <div class="flex min-h-screen bg-gray-50">
    <!-- Sidebar fixa à esquerda -->
    <AppSidebar />

    <!-- Área direita: Header + Conteúdo -->
    <!--
      flex-1 = pega todo o espaço restante à direita da sidebar.
      min-w-0 = permite o conteúdo "encolher" (evita overflow em telas estreitas).
      flex flex-col = empilha Header em cima, conteúdo embaixo.
    -->
    <div class="flex-1 flex flex-col min-w-0">
      <!-- Header (fica dentro da área direita) -->
      <AppHeader />

      <!-- Conteúdo: as páginas são injetadas aqui -->
      <main class="flex-1 p-8">
        <RouterView />
      </main>
    </div>
  </div>
</template>