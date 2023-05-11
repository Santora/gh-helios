<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import DatabaseIcon from './icons/IconDatabase.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DatabaseIcon />
    </template>
    <template #heading>Antes</template>
    <div style="border: 5px solid green; border-radius: 8px; position: sticky; top: 0;">
      <p style="font-size: medium;"><a href="antes">Tabulka databáze Antes</a></p>
    </div>
    <div
      class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
      <div class="font-bold mr-8">🔥 Aktualizováno!</div>
      <div class="align-items-center hidden lg:flex">
        <span class="line-height-3">Tabulka Antes nyní zobrazuje pouze testovací data a bude dána do plného provozu během vývoje.</span>
      </div>
      <a class="flex align-items-center ml-2 mr-8">
        <a class="text-white" href="antes"><span class="underline font-bold">Data</span></a>
      </a>
      <a v-ripple
        class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150 p-ripple"
        style="width:2rem; height: 2rem">
        <i class="pi pi-times"></i>
      </a>
    </div>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DatabaseIcon />
    </template>
    <template #heading>Helios</template>
    <div style="border: 5px solid green; border-radius: 8px; position: sticky; top: 0;">
      <p style="font-size: medium;"><a href="helios">Tabulka databáze Helios</a></p>
    </div>
    <div
      class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
      <div class="font-bold mr-8">🔥 Aktualizováno!</div>
      <div class="align-items-center hidden lg:flex">
        <span class="line-height-3">Tabulka Helios dočasně zobrazuje pouze testovací data a bude dána do plného provozu během vývoje.</span>
      </div>
      <a class="flex align-items-center ml-2 mr-8">
        <a class="text-white" href="src/service/HeliosService.js"><span class="underline font-bold">Data</span></a>
      </a>
      <a v-ripple
        class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150 p-ripple"
        style="width:2rem; height: 2rem">
        <i class="pi pi-times"></i>
      </a>
    </div>
  </WelcomeItem>
    <WelcomeItem>
    <template #icon>
      <DatabaseIcon />
    </template>
    <template #heading>Kedit</template>
    <div style="border: 5px solid green; border-radius: 8px; position: sticky; top: 0;">
      <p style="font-size: medium;"><RouterLink to="kedit">Tabulka databáze Kedit</RouterLink></p>
    </div>
    <div
      class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
      <div class="font-bold mr-8">🔥 Aktualizováno!</div>
      <div class="align-items-center hidden lg:flex">
        <span class="line-height-3">Tabulka Kedit nyní zobrazuje pouze testovací data a bude dána do plného provozu během vývoje.</span>
      </div>
      <a class="flex align-items-center ml-2 mr-8">
        <a class="text-white" href="src/service/KeditService.js"><span class="underline font-bold">Data</span></a>
      </a>
      <a v-ripple
        class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150 p-ripple"
        style="width:2rem; height: 2rem">
        <i class="pi pi-times"></i>
      </a>
    </div>
  </WelcomeItem>
  
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
    recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
    you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener">StackOverflow</a>. You
    should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
</template>
