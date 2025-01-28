<script setup lang="ts">
import TodoItemList from './components/TodoItemList.vue';
</script>

<template>
	<v-app>
		<v-app-bar :elevation="2">
			<v-app-bar-title>Application Bar</v-app-bar-title>
		</v-app-bar>
		<v-navigation-drawer app permanent title="Navigation Drawer">
			<v-list-item title="List Item 1"></v-list-item>
			<v-list-item title="List Item 2"></v-list-item>
		</v-navigation-drawer>

		<v-main>
			<TodoItemList />
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
