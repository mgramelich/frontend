<template>
  <Page>
    <Navbar title="Saint Seiya App" />

    <slot />

    <!-- Right Bottom -->
    <k-fab class="fixed right-4-safe bottom-1-safe z-20 k-color-light-primary hover:k-color-brand-green" @click="() => (actionsOneOpened = true)">
      <nuxt-icon name="creation" class="text-3xl pt-1 text-white" />
    </k-fab>

    <k-tabbar :labels="isTabbarLabels" :icons="isTabbarIcons" class="left-0 bottom-0 fixed" hidden>
      <k-tabbar-link @click="$router.push('/')" class="flex flex-col items-center justify-center text-center w-full bg-slate-900">
        <div class="flex flex-col items-center">
          <Icon name="ph:bank" class="text-xl text-white" />
          <span class="mt-0 text-sm text-white">Home</span>
        </div>
      </k-tabbar-link>

      <k-tabbar-link @click="$router.push('/saints')" class="flex flex-col items-center justify-center text-center w-full bg-slate-900">
        <div class="flex flex-col items-center">
          <Icon name="ph:person-fill" class="text-xl text-white" />
          <span class="mt-0 text-sm text-white">Cavaleiros</span>
        </div>
      </k-tabbar-link>

      <k-tabbar-link @click="$router.push('/cloths')" class="flex flex-col items-center justify-center text-center w-full bg-slate-900">
        <div class="flex flex-col items-center">
          <Icon name="ph:shield-checkered-fill" class="text-xl text-white" />
          <span class="mt-0 text-sm text-white">Armaduras</span>
        </div>
      </k-tabbar-link>

      <k-tabbar-link @click="$router.push('/')" class="flex flex-col items-center justify-center text-center w-full bg-slate-900">
        <div class="flex flex-col items-center">
          <Icon name="ph:shooting-star-bold" class="text-xl text-white" />
          <span class="mt-0 text-sm text-white">Constelações</span>
        </div>
      </k-tabbar-link>

      <k-tabbar-link @click="$router.push('/')" class="flex flex-col items-center justify-center text-center w-full bg-slate-900">
        <div class="flex flex-col items-center">
          <Icon name="ph:magnifying-glass" class="text-xl text-white" />
          <span class="mt-0 text-sm text-white">Pesquisar</span>
        </div>
      </k-tabbar-link>

      <k-tabbar-link @click="share" class="flex flex-col items-center justify-center text-center w-full bg-slate-900">
        <div class="flex flex-col items-center">
          <Icon name="ph:share-network" class="text-xl text-white" />
          <span class="mt-0 text-sm text-white">Compartilhar</span>
        </div>
      </k-tabbar-link>
    </k-tabbar>

    <k-actions :opened="actionsOneOpened" @backdropclick="() => (actionsOneOpened = false)">
      <k-actions-group>
        <k-actions-button @click="handleClick('/')" class="text-blue-600">
          <Icon name="ph:bank" class="text-xl text-white mr-2" /> Home
        </k-actions-button>

        <k-actions-button @click="handleClick('/saints')" class="text-blue-600">
          <Icon name="ph:person-fill" class="text-xl text-white mr-2" /> Personagens
        </k-actions-button>

        <k-actions-button @click="handleClick('/cloths')" class="text-blue-600">
          <Icon name="ph:shield-checkered-fill" class="text-xl text-white mr-2" /> Armaduras
        </k-actions-button>

        <k-actions-button @click="handleClick('/')" class="text-blue-600">
          <Icon name="ph:shooting-star-bold" class="text-xl text-white mr-2" /> Constelações
        </k-actions-button>

        <k-actions-button @click="handleClick('/')" class="text-blue-600">
          <Icon name="ph:magnifying-glass" class="text-xl text-white mr-2" /> Pesquisar
        </k-actions-button>

        <k-actions-button @click="handleClick('/')" class="text-blue-600">
          <Icon name="ph:share-network" class="text-xl text-white mr-2" /> Compartilhar
        </k-actions-button>

        <hr class="border-slate-600" />

        <k-actions-button @click="handleClick" class="">
          <Icon name="ph:x-circle-bold" class="text-xl text-white mr-2" /> Fechar
        </k-actions-button>

      </k-actions-group>
    </k-actions>


    <!-- <div>
      <slot />

      <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div class="flex justify-around items-center h-16">

          <NuxtLink to="/" class="flex flex-col items-center text-gray-600 hover:text-blue-600 focus:outline-none">
            <Icon name="ph:bank" size="1.5em" style="color: black" />
            <span class="text-xs">Home</span>
          </NuxtLink>

          <NuxtLink to="/saints"
            class="flex flex-col items-center text-gray-600 hover:text-blue-600 focus:outline-none">
            <Icon name="ph:person-fill" size="1.5em" style="color: black" />
            <span class="text-xs">Cavaleiros</span>
          </NuxtLink>

          <NuxtLink to="/cloths"
            class="flex flex-col items-center text-gray-600 hover:text-blue-600 focus:outline-none">
            <Icon name="ph:shield-checkered-fill" size="1.5em" style="color: black" />
            <span class="text-xs">Armaduras</span>
          </NuxtLink>

          <NuxtLink to="/" class="flex flex-col items-center text-gray-600 hover:text-blue-600 focus:outline-none">
            <Icon name="ph:shooting-star-bold" size="1.5em" style="color: black" />
            <span class="text-xs">Constelações</span>
          </NuxtLink>

          <NuxtLink to="/search"
            class="flex flex-col items-center text-gray-600 hover:text-blue-600 focus:outline-none">
            <Icon name="ph:magnifying-glass" size="1.5em" style="color: black" />
            <span class="text-xs">Pesquisar</span>
          </NuxtLink>

          <NuxtLink @click="share"
            class="flex flex-col items-center text-gray-600 hover:text-blue-600 focus:outline-none">
            <Icon name="ph:share-network" size="1.5em" style="color: black" />
            <span class="text-xs">Compartilhar</span>
          </NuxtLink>

        </div>
      </nav>      
    </div> -->

  </Page>
</template>


<script setup>
import { Share } from '@capacitor/share';
import {
  kTabbar,
  kTabbarLink,
  kFab,
  kActions,
  kActionsGroup,
  kActionsButton
} from 'konsta/vue';

//
async function share() {
  await Share.share({
    title: 'Open Youtube',
    text: 'Check new video on youtube',
    url: 'https://www.youtube.com',
    dialogTitle: 'Share with friends'
  });
}

//
const router = useRouter();
const actionsOneOpened = ref(false);
const handleClick = (url) => {
  if (url) {
    router.push(url);
  }

  actionsOneOpened.value = false;
};
</script>