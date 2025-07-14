// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['@/assets/styles/main.css'],
  modules: [
    '@primevue/nuxt-module',
    '@azoom/az-icons',
    '@nuxtjs/google-fonts'
  ],
  primevue: {
    autoImport: false,
    options: {
      theme: {
        preset: Aura,
      },
    },
    components: {
      // BUG: in primevue v4 auto import and prefix doesn't work, include components we are using in the below include array https://github.com/primefaces/primevue/issues/6051
      prefix: 'v',
      include: ['Breadcrumb', 'Button', 'ColorPicker', 'Column', 'DataTable', 'Dialog', 'FloatLabel', 'InputNumber', 'InputText', 'Menubar', 'Message', 'Password', 'Select', 'SelectButton', 'Toast'],
    },
    importTheme: { from: '@/assets/themes/azoom-theme.ts' },
  },
})
