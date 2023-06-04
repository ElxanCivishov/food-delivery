import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const REACT_APP_API_KEY = "AIzaSyDypV4siFH-w2puwz1UpynYGqQD2vsocqw";
const REACT_APP_AUTH_DOMAIN = "restourantdb.firebaseapp.com";
const REACT_APP_DATABASE_URL =
  "https://restourantdb-default-rtdb.firebaseio.com";
const REACT_APP_PROJECT_ID = "restourantdb";
const REACT_APP_STORAGE_BUCKET = "restourantdb.appspot.com";
const REACT_APP_MESSASGING_SENDERING_ID = "540295554812";
const REACT_APP_APP_ID = "1:540295554812:web:93e1ae0f34f4b81a3f1979";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSASGING_SENDERING_ID,
  appId: REACT_APP_APP_ID,
};

// Initialize Firebase
const app = getApp.length > 0 ? getApps() : initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };
