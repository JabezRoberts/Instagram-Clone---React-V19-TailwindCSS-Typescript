import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { firebaseApp, FieldValue } from './lib/firebase.ts'
import FirebaseContext from './context/firebase.ts'


// the ! tells TypeScript that we are sure that the element with id 'root' exists and is not null
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    // Wrap the entire app in teh FirebaseContext provider to provide firebase instance and Fieldvalue through the app
    <FirebaseContext.Provider value={{ firebase: firebaseApp, FieldValue }} >
      <App />
    </FirebaseContext.Provider>
  </StrictMode>,
)
