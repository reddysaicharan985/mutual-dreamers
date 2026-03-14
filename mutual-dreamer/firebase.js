import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAiPbhvf8g0rugp2ezoDSMkgF81IOHJ_Xg",
  authDomain: "mutual-dreamers.firebaseapp.com",
  projectId: "mutual-dreamers",
  storageBucket: "mutual-dreamers.firebasestorage.app",
  messagingSenderId: "520139245009",
  appId: "1:520139245009:web:a0978c20feb41e99584cf0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };