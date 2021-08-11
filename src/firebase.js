import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUwoT3njnWX7Kt2Dk4ExArEEyfzKRNrbQ",
  authDomain: "react--clone-52a3e.firebaseapp.com",
  projectId: "react--clone-52a3e",
  storageBucket: "react--clone-52a3e.appspot.com",
  messagingSenderId: "168896723215",
  appId: "1:168896723215:web:669708a9e57bc86ac9e67a"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };