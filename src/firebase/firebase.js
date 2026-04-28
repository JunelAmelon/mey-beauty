import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD5kT_As9z3NM6cJ-lVf8WhFN1hQcQSZJY',
  authDomain: 'mey-beauty.firebaseapp.com',
  projectId: 'mey-beauty',
  storageBucket: 'mey-beauty.firebasestorage.app',
  messagingSenderId: '215746696502',
  appId: '1:215746696502:web:8cbf0de004322d66c58f97',
  measurementId: 'G-0BHTWFSJ3G',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
