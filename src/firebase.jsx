import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
   
    apiKey: "AIzaSyCx0fwcaeryny9OedZwUhJY7jevXHxVZ8o",
    authDomain: "form-fcdbf.firebaseapp.com",
    projectId: "form-fcdbf",
    storageBucket: "form-fcdbf.appspot.com",
    messagingSenderId: "28280338251",
    appId: "1:28280338251:web:be3bbe97a0eb94e7ed9ace"
});

var db = firebaseApp.firestore();

export { db };
