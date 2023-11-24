
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC4zq8o7z0NbobyIqxx7hOEAODA2O9rOYU",
    authDomain: "arttechstore-7e85b.firebaseapp.com",
    projectId: "arttechstore-7e85b",
    storageBucket: "arttechstore-7e85b.appspot.com",
    messagingSenderId: "991803634669",
    appId: "1:991803634669:web:5667abb3016b765b392de4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()