<template>
  <div v-if="isVisible" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
    <div class="bg-[#111] border border-amber-200 p-8 rounded-xl shadow-2xl max-w-sm w-full text-center">
      <h2 class="text-2xl font-bold text-white mb-2">Select Language</h2>
      <p class="text-gray-400 mb-6">Selecciona tu idioma / Select your language</p>
      
      <div class="flex flex-col gap-4">
        <button 
          @click="selectLanguage('es')" 
          class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2"
        >
          <span class="text-xl">🇪🇸</span> Español
        </button>
        <button 
          @click="selectLanguage('en')" 
          class="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2"
        >
          <span class="text-xl">🇺🇸</span> English
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LanguageModal',
  data() {
    return {
      isVisible: false
    };
  },
  mounted() {
    const savedLanguage = localStorage.getItem('userLanguage');
    if (savedLanguage) {
      this.$i18n.locale = savedLanguage;
    } else {
      this.isVisible = true;
    }
  },
  methods: {
    selectLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem('userLanguage', lang);
      this.isVisible = false;
    }
  }
}
</script>

<style scoped>
</style>
