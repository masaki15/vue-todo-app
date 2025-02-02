import type {ITodoItemService} from './ITodoItemService.ts';
import {TodoItem} from '../entities/TodoItem.ts';

export class TodoItemService implements ITodoItemService{
    public async getTodoItems(): Promise<TodoItem[]> {
        const todoItem1: TodoItem = new TodoItem(1, 'title1', 'content1', false);
        const todoItem2: TodoItem = new TodoItem(2, 'title2', 'content2', false);
        const todoItem3: TodoItem = new TodoItem(3, 'title3', 'content3', false);
        let todoItems: TodoItem[] = [todoItem1, todoItem2, todoItem3];
        return new Promise((resolve) => {
            resolve(todoItems);
        });
    }
}
