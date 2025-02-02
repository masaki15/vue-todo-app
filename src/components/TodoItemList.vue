<script setup lang="ts">
import {ToDoItemService} from '../services/ToDoItemService.ts';
import type {ToDoItem} from '../entities/ToDoItem.ts';
import {onMounted, ref} from 'vue';

const todoItemService = new ToDoItemService();

const toDoItemList = ref<ToDoItem[]>([]);

onMounted(async () => {
  try {
    const list = await todoItemService.getToDoItems();
    toDoItemList.value = list || [];
  } catch (error) {
    console.error(error);
  }
})
</script>

<template>
  <v-card class="ma-6">
    <v-list lines="two">
      <v-list-item class="pb-0" v-for="(item, index) in toDoItemList" :key="item.id">
        <v-list-item-title>{{item.title}}</v-list-item-title>
        <v-list-item-subtitle class="text-high-emphasis pb-3 opacity-100">{{ item.content }}</v-list-item-subtitle>
        <template v-slot:append>
          <v-list-item-action class="flex-column align-end">
            <small class="mb-6">{{item.date}}</small>
          </v-list-item-action>
        </template>
        <v-divider v-if="index < toDoItemList.length -1"></v-divider>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<style scoped>

</style>