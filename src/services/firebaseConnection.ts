import firebase from 'firebase/app';

import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC8xEYeARxGTEb_WZk_vMnJTXdSKW7pKso",
  authDomain: "boardapp-a5ab9.firebaseapp.com",
  projectId: "boardapp-a5ab9",
  storageBucket: "boardapp-a5ab9.appspot.com",
  messagingSenderId: "27960033110",
  appId: "1:27960033110:web:aeaf0e873b8bf1002720f7"
};
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;