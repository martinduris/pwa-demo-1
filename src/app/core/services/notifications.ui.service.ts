import { Injectable } from '@angular/core';

declare var navigator: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationsUiService {

  constructor() { }

  public async notificationAboutTodosCount(countOfTodos: number): Promise<void> {
    console.debug(`Notification about count of ToDos: ${countOfTodos}`);

    // Badge notification
    try {
      await navigator.setAppBadge(countOfTodos);
      console.log('badge installed');
    } catch (e) {
      console.error('cannot install badge', e);
    }
  }

}
