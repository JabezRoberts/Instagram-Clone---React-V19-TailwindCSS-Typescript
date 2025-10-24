//import { seedDatabase } from '../seed';
// Import the files you need from firebase to initialize firebase, add auth, and use firebase & firestore(db)
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getFirestore, serverTimestamp } from 'firebase/firestore' //serverTimestamp will be used for the createdAt field in the post document

// Import API key and project identifiers from .env file
const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};


// Create and export the initialized isntance of firebase with intialize app. Only do this once per app
export const firebaseApp = initializeApp(config)


// Export the auth and firestore database for use in the app
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseFirestore = getFirestore(firebaseApp)


// FieldValue export to use serverTimestamp when creating a post
// FieldValue replaces the previously used (firebase.firestore.FieldValue.serverTimestamp)
export const FieldValue = {
  serverTimestamp
};


// Type for a Firebase instance
export type Firebase = typeof firebaseApp;




// const firebase = window.firebase.initializeApp(config);
// const { FieldValue } = window.firebase.firestore;

//seedDatabase(firebase);

// export { firebase, FieldValue };
