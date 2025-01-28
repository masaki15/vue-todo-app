import { ToDoItem } from '../entities/ToDoItem';
export interface IToDoItemService {
    getToDoItems(): Promise<ToDoItem[]>;
}