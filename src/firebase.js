import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtAiilqzDwePRMub2nxipRkWCgl3gZCJI",
  authDomain: "final-year-project-7a299.firebaseapp.com",
  projectId: "final-year-project-7a299",
  storageBucket: "final-year-project-7a299.appspot.com",
  messagingSenderId: "192284102437",
  appId: "1:192284102437:web:4c320deefe9f39880194cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app