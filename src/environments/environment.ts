// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDEwidwkQ9IGrYrmJM8eNrvOHSq069IFrs",
    authDomain: "cinnova-chat-app.firebaseapp.com",
    databaseURL: "https://cinnova-chat-app.firebaseio.com",
    projectId: "cinnova-chat-app",
    storageBucket: "cinnova-chat-app.appspot.com",
    messagingSenderId: "246366973346",
    appId: "1:246366973346:web:5d9d7a3c140006084156fb"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
