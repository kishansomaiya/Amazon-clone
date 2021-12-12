import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXK805l2_XRAPC-a-nbvZqJ3Uq8SesqF0",
  authDomain: "clone-1d7ae.firebaseapp.com",
  databaseURL: "https://clone-1d7ae.firebaseio.com",
  projectId: "clone-1d7ae",
  storageBucket: "clone-1d7ae.appspot.com",
  messagingSenderId: "763810640162",
  appId: "1:763810640162:web:0e4e7b23489f680007757b",
  measurementId: "G-326PMFCGHS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }; 