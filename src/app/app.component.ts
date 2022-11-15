import { Component, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  deferredPrompt: any;

  ngOnInit(): void {
    // For: Custom install notification
    window.addEventListener('beforeinstallprompt', (e: any) => {
      e.preventDefault();
      console.log(`'beforeinstallprompt' event was fired.`);
      this.deferredPrompt = e; // we use this to signal that we should display fancy loading
    });

    // For: Custom install notification
    window.addEventListener('appinstalled', () => {
      this.deferredPrompt = null;
      console.log('PWA was installed');
    });
  }

  public async installPwa() {
    // For: Custom install notification
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      const { outcome } = await this.deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      window.deferredPrompt = null;
    } else {
      console.error('nope, already installed')
    }
  }

}
