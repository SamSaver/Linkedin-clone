import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAkekEBxVJdCCuCXck-4FzuZwh-t4kxiQ8",
  authDomain: "linkedin-clone-c0419.firebaseapp.com",
  projectId: "linkedin-clone-c0419",
  storageBucket: "linkedin-clone-c0419.appspot.com",
  messagingSenderId: "410811559771",
  appId: "1:410811559771:web:cfda23d3993d7e60f6f47e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
