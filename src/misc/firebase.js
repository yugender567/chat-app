import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyBWKJRZArEJ1C-yp6Gnrditc4VDwSIgPtI',
  authDomain: 'chat-web-app-f8242.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-f8242-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: 'chat-web-app-f8242',
  storageBucket: 'chat-web-app-f8242.appspot.com',
  messagingSenderId: '352533476942',
  appId: '1:352533476942:web:ca122aab0cb2ca80ed351f',
  measurementId: 'G-LZL74K609R',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
