# How to install and run

- `npm i`
- `npm run start`


# Presentation

## PWA basics

### 1) Start application

Just run `npm start`, discover what application can do. Try to create some items, refresh page.
Items are saved / persisted inside Local Storage of browser.

**What happen if `npm start` process is stopped and we do refresh?**

### 2) Install PWA

Our application already have installed PWA - we used Angular CLI command `ng add @angular/pwa`. What has been add?
- Add file `ngsw-config.json`
  - Configuration of Service Worker (what to cache, when ...)
- Add file `src/manifest.webmanifest`
  - Required file to enable PWA, must be accessible from web, browser try to find id
  - Configuration of 'splash screen'
- Icons `src/assets/icons`
  - Referenced from manifest, used in mobile application

### 3) Run as PWA with Service Worker

Find `app.module` and enable Service Worker

```typescript
ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: false, // change to 'true'
    ...
})
```

Start with `npm run`.

**What has changed? Can application work as offline?**

### 4) Install PWA on desktop

In browser url bar is icon to install application - install it.

**What happen if we install application on desktop?**

See also:
- chrome://apps/
- chrome://serviceworker-internals/?devtools

### 5) Install PWA on mobile

Start wirth command `npm run start-pwa`.
I use `./ngrok http 8080` to be able to access website from mobile.

TODO:
- finish presentation
- finish coding session stuff (branches, ...)

chrome://serviceworker-internals/?devtools
chrome://apps/


## Custom install notification

- Open `app.component.ts` and in `ngOnInit` explore two listener functions
  - `beforeinstallprompt` is run if browser support PWA and could be installed
  - `appinstalled` is run if PWA is supported but it has been already installed
- Open `app.component.html` and uncomment fancy install bar
- Open `app.component.ts` and implement `installPwa`

See also:
- https://web.dev/customize-install/

## 3) Badge notification

- Open `notifications.ui.service.ts` and implement notification service with `navigator` browser API.
  See: https://developer.mozilla.org/en-US/docs/Web/API/Navigator
- Open `todo.db.service.ts` and implement usage of Notification service
  - Quick challenge - in 5 minutes discover where we need to implement notifications? 
- Try on web app - where is add badge?

See also:
https://web.dev/badging-api/
