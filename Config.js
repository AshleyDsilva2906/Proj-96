import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDFKrZMK7JPm8ylL4uUYGUFIKS5fc6_bjI",
    authDomain: "project-92-20441.firebaseapp.com",
    projectId: "project-92-20441",
    storageBucket: "project-92-20441.appspot.com",
    messagingSenderId: "679651501305",
    appId: "1:679651501305:web:5bdb54021144a117ebee28"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()