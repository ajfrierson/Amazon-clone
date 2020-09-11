import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAnXVCzD38tU8l5Fk_Ec0U1ZZNi7aI-ZrQ",
    authDomain: "clone-9ac37.firebaseapp.com",
    databaseURL: "https://clone-9ac37.firebaseio.com",
    projectId: "clone-9ac37",
    storageBucket: "clone-9ac37.appspot.com",
    messagingSenderId: "933035542391",
    appId: "1:933035542391:web:57961a37af2271bc944372",
    measurementId: "G-N1NXDHGS0F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //firestore is the real time database in firebase
  const db = firebaseApp.firestore();
  //variable to handle all the signing in
  const auth = firebase.auth();

  export { db, auth };