// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCaYKbE8zRDAoYR-F3CM5Z4dmnaUujJQUY",
  authDomain: "clone-c4501.firebaseapp.com",
  projectId: "clone-c4501",
  storageBucket: "clone-c4501.appspot.com",
  messagingSenderId: "456616194437",
  appId: "1:456616194437:web:d06bd66ef6fe2377c854ec",
  measurementId: "G-D7P89QHH6T"
};

const firebaseApp = firebase.default.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };