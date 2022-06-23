import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAW-qXP8HyBhqO1uoA6YVJffPIloSq7UCo",
  authDomain: "freshcart-a1991.firebaseapp.com",
  databaseURL: "https://freshcart-a1991-default-rtdb.firebaseio.com",
  projectId: "freshcart-a1991",
  storageBucket: "freshcart-a1991.appspot.com",
  messagingSenderId: "104216184931",
  appId: "1:104216184931:web:a1e545073493e3cf311056",
  measurementId: "G-TBDGF94E7F",
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };





















