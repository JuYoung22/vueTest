// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
  ],

  components: {
    dirs: ['pages', 'components'],
		// components 하위의 파일들을 자동으로 import 합니다.
  },

  imports: {
    dirs: ['stores'],
		// stores 하위의 파일들을 자동으로 import 합니다.
  },
})
