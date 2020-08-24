import * as firebase from "firebase/app";

import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBkSUgKZ9OdMHllgoKt2Oiw47DO0mCIZio",
  authDomain: "creative-sample-host.firebaseapp.com",
  databaseURL: "https://creative-sample-host.firebaseio.com",
  projectId: "creative-sample-host",
  storageBucket: "creative-sample-host.appspot.com",
  messagingSenderId: "814597161585",
  appId: "1:814597161585:web:999fc902fd1585360011d0",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const google = new firebase.auth.GoogleAuthProvider();

export { auth, google };
