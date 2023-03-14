// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'frontlmc',
    appId: '1:108988698439:web:856033ba3caca788e6c662',
    storageBucket: 'frontlmc.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyDLbb71cDE3WFGDBv_qvffXbLCPyN4DhiA',
    authDomain: 'frontlmc.firebaseapp.com',
    messagingSenderId: '108988698439',
  },
  production: false,

  //EURL: 'http://localhost:8080'
  EURL: 'https://lmc-backend.onrender.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
