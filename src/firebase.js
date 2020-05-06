import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyDrjfAX0c-SuatEYsbCN42HU-9rJSFwa7g",
  authDomain: "expenses-5fd5e.firebaseapp.com",
  databaseURL: "https://expenses-5fd5e.firebaseio.com",
  projectId: "expenses-5fd5e",
  storageBucket: "expenses-5fd5e.appspot.com",
  messagingSenderId: "167918449757",
  appId: "1:167918449757:web:efb1e1d957a7c8892589b4",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
