import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confing";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;