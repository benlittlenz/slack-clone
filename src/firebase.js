import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBbU0GLaZ6EGIdhxBuM-Z0XaNKuCTheGao",
    authDomain: "slack-clone-8e73c.firebaseapp.com",
    databaseURL: "https://slack-clone-8e73c.firebaseio.com",
    projectId: "slack-clone-8e73c",
    storageBucket: "slack-clone-8e73c.appspot.com",
    messagingSenderId: "219055497097",
    appId: "1:219055497097:web:de28c161fbd78288"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;