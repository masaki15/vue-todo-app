export class ToDoItem{
    id: number;
    title: string;
    content: string;
    state: boolean;

    constructor(id: number, title: string, content: string, state: boolean){
        this.id = id;
        this.title = title;
        this.content = content;
        this.state = state;
    }
}