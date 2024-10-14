import { initializeApp } from 'firebase/app';

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAi1Gm_ITK_ZDD6efs1B5YY8WubsS1mM70',
  authDomain: 'dave-50242.firebaseapp.com',
  // databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'dave-50242',
  storageBucket: 'dave-50242.appspot.com',
  messagingSenderId: '712270980972',
  appId: '1:712270980972:web:822f7742a3725870f47549',
  measurementId: 'G-DGP0YRRHS3',
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
