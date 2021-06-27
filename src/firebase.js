import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB2zulYu6AkfYy3P7yz6gwsyS2OGjmk_mg",
  authDomain: "linkedin-194a8.firebaseapp.com",
  projectId: "linkedin-194a8",
  storageBucket: "linkedin-194a8.appspot.com",
  messagingSenderId: "327061810740",
  appId: "1:327061810740:web:b6ce2c023187100f592461",
  measurementId: "G-ZPCEEYL11F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
