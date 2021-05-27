import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import '@firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyB6a3VhT7x0I-sahQxkkKWCg73AIbqL8Xk',
  authDomain: 'splash-app-wl.firebaseapp.com',
  databaseURL: 'https://splash-app-wl-default-rtdb.firebaseio.com/',
  projectId: 'splash-app-wl',
  storageBucket: 'splash-app-wl.appspot.com',
  messagingSenderId: '285786633759',
  appId: '1:285786633759:ios:28382dab2cb4938e06872a',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

export {firebase};
