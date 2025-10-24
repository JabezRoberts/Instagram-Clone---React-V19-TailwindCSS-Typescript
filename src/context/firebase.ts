import { createContext } from 'react'; //Create a context to hold the firebase instance and avoid prop drilling
import type { Firebase } from '../lib/firebase'


const FirebaseContext = createContext<{ firebase: Firebase; FieldValue: typeof import('../lib/firebase').FieldValue} | null>(null);

export default FirebaseContext;

/*
  FirebaseContext Explanation:

  1. `createContext<T>(defaultValue)`:
     - `T` is a generic type describing the shape of the context value.
  
  2. `{ firebase: Firebase; FieldValue: typeof import('../lib/firebase').FieldValue }`:
     - Describes the context object: it will have:
       ** `firebase`: the initialized Firebase app
       ** `FieldValue`: an object exported from lib/firebase (like serverTimestamp)
     - Using `typeof import(...)` lets TypeScript infer FieldValue's type automatically
     instead of manually writing { serverTimestamp: ..., increment: ... }

     { firebase: Firebase; FieldValue: ... }

        This is an object shape describing what the context will provide:

        firebase is the initialized Firebase app (type Firebase from  lib/firebase.ts)

        FieldValue is the helper object exported for serverTimestamp, etc.

  3. `| null`:
     - Context can be null before the provider is rendered.

  4. `(null)`:
     - Default value of the context before the provider is used.

  Benefits:
  - Type safety when accessing context values
  - Automatic type inference for FieldValue
  - Helps avoid runtime errors by catching type issues at compile time
*/