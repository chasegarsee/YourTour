import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBfo6GsolwHY7TYkzkBMLvz1YTSOvolU-U",
  authDomain: "your-tour-2a49d.firebaseapp.com",
  databaseURL: "https://your-tour-2a49d.firebaseio.com",
  projectId: "your-tour-2a49d",
  storageBucket: "your-tour-2a49d.appspot.com",
  messagingSenderId: "111817442024",
  appId: "1:111817442024:web:46166f64281fc1e34f3f5d",
  measurementId: "G-XHYVKC6K4K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
