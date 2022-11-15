import { Component } from '@angular/core';

import { TodoDbService } from '../../../core/services/todo.db.service';
import { Todo } from '../../../core/types/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  todos: Todo[] = [];

  newTodoTitle = '';

  constructor(private todoDbService: TodoDbService) {
    this.todos = this.todoDbService.todos;
  }

  public async add(): Promise<void> {
    await this.todoDbService.create(this.newTodoTitle);

    this.newTodoTitle = '';
  }

  public async delete(id: number): Promise<void> {
    await this.todoDbService.delete(id);
  }

}
