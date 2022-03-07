import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAM5mtH3zAl_wMqI02A7O4wuS5U-LD21_k",
  authDomain: "react-native-firebase-ef282.firebaseapp.com",
  projectId: "react-native-firebase-ef282",
  storageBucket: "react-native-firebase-ef282.appspot.com",
  messagingSenderId: "811976935503",
  appId: "1:811976935503:web:5672b4defa9be20450023a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
