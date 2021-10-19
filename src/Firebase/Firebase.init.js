import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const firebaseAppInit = () => {
    initializeApp(firebaseConfig);
}

export default firebaseAppInit;