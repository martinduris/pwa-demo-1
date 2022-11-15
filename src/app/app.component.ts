import { Component, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    // For: Custom install notification
    // window.addEventListener('beforeinstallprompt', (e: any) => {
    //   // TODO: remove default app install dialog
    // });

    // For: Custom install notification
    // window.addEventListener('appinstalled', () => {
    //  // TODO: if app is already installed, do not display dialog to install app
    //});
  }

  public async installPwa() {
    // For: Custom install notification
    // TODO ask user install app
  }

}
