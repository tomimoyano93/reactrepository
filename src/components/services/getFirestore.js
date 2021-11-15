import firebase from "firebase"

import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDfAXzmRnpmeqiNw0v_hA0oqXvZzsyP0Co",
    authDomain: "berlin-idiomas---react-js.firebaseapp.com",
    projectId: "berlin-idiomas---react-js",
    storageBucket: "berlin-idiomas---react-js.appspot.com",
    messagingSenderId: "928534568477",
    appId: "1:928534568477:web:c8b73e18c4cc00087a70f4"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export function getFirestore(){
      return firebase.firestore(app)
  }
  