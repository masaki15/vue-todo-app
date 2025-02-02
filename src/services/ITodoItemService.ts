import { TodoItem } from '../entities/TodoItem.ts';
export interface ITodoItemService {
    getTodoItems(): Promise<TodoItem[]>;
}