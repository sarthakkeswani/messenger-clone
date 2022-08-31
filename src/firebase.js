import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCvGXPoSOBcjlgMlS-qkvhrPJZGxetSAVw",
    authDomain: "sk-messenger-clone.firebaseapp.com",
    projectId: "sk-messenger-clone",
    storageBucket: "sk-messenger-clone.appspot.com",
    messagingSenderId: "233647651511",
    appId: "1:233647651511:web:07b73f9af97711e1ceeb32",
    measurementId: "G-1ENJERQLKP"
  });

const db = firebaseApp.firestore();

export default db;