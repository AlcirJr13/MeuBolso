import { defineStore } from "pinia";
import { computed, ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  //STATE (os dados)
  const user = ref(null)
  const isAuthenticated = ref(false)

  //GETTERS (dados derivados)
  const userName = computed(() => {
    return user.value ? user.value.name : 'Visitante'
  })

  // ACTIONS (funções que mudam o state)
  function login(name, email) {
    user.value = { name, email }
    isAuthenticated.value = true
  }

  function logout() {
    user.value = null
    isAuthenticated.value = false
  }

  return {
    user,
    isAuthenticated,
    userName,
    login,
    logout
  }
})