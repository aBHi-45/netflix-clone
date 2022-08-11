import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCRHzzmlznCRc-5TU6lVXej-wOTu5lnaeA',
  authDomain: 'netflix-clone-47ce0.firebaseapp.com',
  databaseURL:
    'https://netflix-clone-47ce0-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'netflix-clone-47ce0',
  storageBucket: 'netflix-clone-47ce0.appspot.com',
  messagingSenderId: '621712031801',
  appId: '1:621712031801:web:e8f54c540c0a6b95fccde8',
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
