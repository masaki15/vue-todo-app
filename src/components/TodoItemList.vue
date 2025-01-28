<script setup lang="ts">
import {ToDoItemService} from '../services/ToDoItemService.ts';
import type {ToDoItem} from '../entities/ToDoItem.ts';
import {onMounted, ref} from 'vue';

const todoItemService = new ToDoItemService();

const toDoItemList = ref<ToDoItem[]>([]);

onMounted(async () =>{
	try {
		const list = await todoItemService.getToDoItems();
		toDoItemList.value = list || [];
		console.log(list);
	} catch (error) {
		console.error(error);
	}
})
</script>

<template>
	<v-list lines="one">
		<v-list-item v-for="item in toDoItemList" :key="item.id" :title="item.title" :subtitle="item.content"></v-list-item>
	</v-list>
</template>

<style scoped>

</style>