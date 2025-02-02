export class ToDoItem{
    id: number;
    title: string;
    content: string;
    date: string;
    state: boolean;

    constructor(id: number, title: string, content: string, state: boolean){
        this.id = id;
        this.title = title;
        this.content = content;
        this.date = new Date().toLocaleDateString();
        this.state = state;
    }
}