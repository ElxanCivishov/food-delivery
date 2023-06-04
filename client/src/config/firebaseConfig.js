import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDypV4siFH-w2puwz1UpynYGqQD2vsocqw",
  authDomain: "restourantdb.firebaseapp.com",
  databaseURL: "https://restourantdb-default-rtdb.firebaseio.com",
  projectId: "restourantdb",
  storageBucket: "restourantdb.appspot.com",
  messagingSenderId: "540295554812",
  appId: "1:540295554812:web:93e1ae0f34f4b81a3f1979",
};

// Initialize Firebase
const app = getApp.length > 0 ? getApps() : initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };
