import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyD1npYBN8jgZWk0Vu6FvbeMTq6Cvbk3DY8",
  authDomain: "tutorial-2info1-2023.firebaseapp.com",
  projectId: "tutorial-2info1-2023",
  storageBucket: "tutorial-2info1-2023.appspot.com",
  messagingSenderId: "870409870616",
  appId: "1:870409870616:web:aee1956d5605dd4b76926d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }