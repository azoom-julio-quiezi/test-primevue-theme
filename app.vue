<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup>
import ConfirmationService from 'primevue/confirmationservice'

const nuxtApp = useNuxtApp()
nuxtApp.vueApp.use(ConfirmationService)
</script>

