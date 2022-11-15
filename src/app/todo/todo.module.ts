import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ListComponent } from './containers/list/list.component';
import { DetailComponent } from './containers/detail/detail.component';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    TodoRoutingModule,

    // angular modules
    CommonModule,
    FormsModule,

    // material modules
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class TodoModule { }
