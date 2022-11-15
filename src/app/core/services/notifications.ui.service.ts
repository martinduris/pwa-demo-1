import { Injectable } from '@angular/core';

declare var navigator: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationsUiService {

  constructor() { }

  public async notificationAboutTodosCount(countOfTodos: number): Promise<void> {
    console.debug(`Notification about count of ToDos: ${countOfTodos}`)

    // Badge notification
    // TODO set count to badge
  }

}
