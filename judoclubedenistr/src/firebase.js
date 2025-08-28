// src/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuração do seu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAnAOvNZedhhZbucgQVVzkZLthcR6tn2JU",
  authDomain: "judoclubedenistr.firebaseapp.com",
  projectId: "judoclubedenistr",
  storageBucket: "judoclubedenistr.appspot.com",
  messagingSenderId: "933520882104",
  appId: "1:933520882104:web:1a08284d3d4777664a774d",
  measurementId: "G-477F03JBNY"
};

// Inicializa o app apenas uma vez
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Firebase services
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };
