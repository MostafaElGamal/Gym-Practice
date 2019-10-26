import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC0UmnsrAgoPVKGbeZGhnoc_RO8gQM3ky4",
  authDomain: "ninja-practice.firebaseapp.com",
  databaseURL: "https://ninja-practice.firebaseio.com",
  projectId: "ninja-practice",
  storageBucket: "ninja-practice.appspot.com",
  messagingSenderId: "827209488440",
  appId: "1:827209488440:web:99347432f6fa9b794f6ecd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings( {timestampsInSnapshots: true} )
export default firebaseApp.firestore()