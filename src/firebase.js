import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC0k_TZt-B7OrfmwEbiChfCAN4abSACX2M",
  authDomain: "twitter-feed-3c6f7.firebaseapp.com",
  projectId: "twitter-feed-3c6f7",
  storageBucket: "twitter-feed-3c6f7.appspot.com",
  messagingSenderId: "837300401566",
  appId: "1:837300401566:web:8afa11966474e38fb5128f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;