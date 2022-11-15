import { Injectable } from '@angular/core';

import { NotificationsUiService } from './notifications.ui.service';
import { Todo } from '../types/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDbService {

  todos: Todo[] = [];

  constructor(private notificationsUiService: NotificationsUiService) {
    console.debug('Load todos from database ...');

    const todos = localStorage.getItem('todos');
    if (todos) {
      console.debug('Great, we already have some todos');
      this.todos = JSON.parse(localStorage.getItem('todos') as any);
    }

    console.debug(`Loaded ${this.todos.length} todos`);
  }

  public async create(title: string): Promise<Todo> {
    console.debug(`Create ToDo with 'title': ${title}`);

    const todo = new Todo(title);

    this.todos.push(todo);
    await this.persist();

    return new Todo(title);
  }

  public async delete(id: number): Promise<void> {
    console.debug(`Delete ToDo with 'title': ${id}`);

    const todoIndex = this.todos.findIndex(t => t.id === id);

    if (todoIndex >= 0) {
      this.todos.splice(todoIndex, 1);
      await this.persist();
    }
  }

  private async persist(): Promise<void> {
    console.debug(`Persisting ${this.todos.length} ToDos`)
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

}
