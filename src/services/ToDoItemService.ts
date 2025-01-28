import type {IToDoItemService} from './IToDoItemService.ts';
import {ToDoItem} from '../entities/ToDoItem.ts';

export class ToDoItemService implements IToDoItemService{
    public async getToDoItems(): Promise<ToDoItem[]> {
        const toDoItem1: ToDoItem = new ToDoItem(1, 'title1', 'content1', false);
        const toDoItem2: ToDoItem = new ToDoItem(2, 'title2', 'content2', false);
        let toDoItems: ToDoItem[] = [toDoItem1, toDoItem2];
        return new Promise((resolve) => {
            resolve(toDoItems);
        });
    }
}
