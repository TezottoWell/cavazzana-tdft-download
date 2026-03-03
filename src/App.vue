<script setup lang="ts">
import { ref } from 'vue'
import AppLogo from '@/components/AppLogo.vue'
import DownloadButton from '@/components/DownloadButton.vue'
import { APP_CONFIG } from '@/config/app.config'

const isDownloading = ref(false)

function handleDownload(event: MouseEvent) {
  if (APP_CONFIG.downloadUrl === '#') {
    event.preventDefault()
    isDownloading.value = true
    
    setTimeout(() => {
      isDownloading.value = false
      alert('URL de download nao configurada. Configure o DOWNLOAD_URL em src/config/app.config.ts')
    }, 1500)
  }
}
</script>

<template>
  <main class="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-deep_black-100 via-deep_black-200 to-dark_red-200 relative overflow-hidden">
    <!-- Glow effect background -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-dark_red-300/20 via-transparent to-transparent"></div>
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-dark_red-400/10 via-transparent to-transparent"></div>
    
    <div class="w-full max-w-md flex flex-col items-center gap-8 relative z-10">
      
      <!-- Logo -->
      <AppLogo :size="96" />

      <!-- Titulo e Subtitulo -->
      <div class="flex flex-col items-center gap-3 text-center opacity-0 animate-fade-in-up-delay-1">
        <h1 class="text-3xl font-bold text-white tracking-tight">
          {{ APP_CONFIG.name }}
        </h1>
        <p class="text-lg text-deep_black-800">
          Baixe o aplicativo oficial para Android
        </p>
      </div>

      <!-- Botao de Download -->
      <div class="opacity-0 animate-fade-in-up-delay-2">
        <DownloadButton
          :label="'Baixar APK'"
          :href="APP_CONFIG.downloadUrl"
          :loading="isDownloading"
          @click="handleDownload"
        />
      </div>

      <!-- Informacoes Secundarias -->
      <div class="flex flex-col items-center gap-2 text-sm text-deep_black-700 opacity-0 animate-fade-in-up-delay-3">
        <div class="flex items-center gap-4">
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Versao {{ APP_CONFIG.version }}</span>
          </span>
          <span class="text-deep_black-600">|</span>
          <span>{{ APP_CONFIG.apkSize }}</span>
        </div>
        <span class="flex items-center gap-1.5">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <span>{{ APP_CONFIG.androidMinVersion }}</span>
        </span>
      </div>

      <!-- Contato WhatsApp -->
      <div class="flex flex-col items-center gap-3 pt-4 opacity-0 animate-fade-in-up-delay-4">
        <span class="text-sm text-deep_black-700">Duvidas?</span>
        <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <a
            href="https://wa.me/5514997121314"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 rounded-lg bg-deep_black-300 hover:bg-deep_black-400 border border-deep_black-500 transition-all duration-150 group"
          >
            <!-- WhatsApp Icon -->
            <svg class="w-5 h-5 text-green-500 group-hover:text-green-400 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span class="text-sm text-deep_black-800 group-hover:text-white transition-colors">(14) 99712-1314</span>
          </a>
          <a
            href="https://wa.me/5514996282559"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 rounded-lg bg-deep_black-300 hover:bg-deep_black-400 border border-deep_black-500 transition-all duration-150 group"
          >
            <!-- WhatsApp Icon -->
            <svg class="w-5 h-5 text-green-500 group-hover:text-green-400 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span class="text-sm text-deep_black-800 group-hover:text-white transition-colors">(14) 99628-2559</span>
          </a>
        </div>
      </div>

    </div>
  </main>
</template>