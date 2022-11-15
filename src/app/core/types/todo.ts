export class Todo {

  id: number;
  title: string;

  constructor(title: string) {
    this.title = title;
    this.id = Math.floor(Math.random() * 1000);
  }

}
