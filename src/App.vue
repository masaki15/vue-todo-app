<script setup lang="ts">
import router from './router';
import {ref} from 'vue';

const drawer = ref(false);

function goTodoList() {
  router.push({name: 'todoItemList'});
}

function goLogin() {
  router.push({name: 'login'});
}
</script>

<template>
  <v-app>
    <v-app-bar :elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon icon="mdi-menu" variant="text" @click.stop="drawer= !drawer">
          <v-icon icon="mdi-menu"></v-icon>
        </v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>Todo App</v-app-bar-title>
      <v-btn class="bg-green-darken-1" @click="goLogin">ログイン</v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary title="Navigation Drawer">
      <v-list-item title="Todo List" @click="goTodoList"></v-list-item>
      <v-list-item title="List Item 2"></v-list-item>
    </v-navigation-drawer>

    <v-main>
      <RouterView/>
    </v-main>

    <v-bottom-navigation>
      Bottom Navigation
    </v-bottom-navigation>

    <v-footer>
      Footer
    </v-footer>
  </v-app>
</template>
<style scoped>

</style>
