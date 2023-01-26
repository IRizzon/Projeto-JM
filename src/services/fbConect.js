import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyCHRd5Fy4qXWSwjWlZ0eMub3OaUXcgCmuw",
  authDomain: "reactjstraining-e1f41.firebaseapp.com",
  projectId: "reactjstraining-e1f41",
  storageBucket: "reactjstraining-e1f41.appspot.com",
  messagingSenderId: "939675977766",
  appId: "1:939675977766:web:649650f957d20101897ee7",
  measurementId: "G-MRLFDFJL12"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase;