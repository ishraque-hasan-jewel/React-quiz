// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//-------------------------------------------------------------
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBNpOfEop7zEzkyf6bgc2QDcwphIY46CtM",
//   authDomain: "react-quiz-dev-9cb76.firebaseapp.com",
//   projectId: "react-quiz-dev-9cb76",
//   storageBucket: "react-quiz-dev-9cb76.appspot.com",
//   messagingSenderId: "155254900852",
//   appId: "1:155254900852:web:49ae47000e99ba2a3f2921"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
//-----------------------------------------------------------------
const app = initializeApp({
   apiKey: "AIzaSyBNpOfEop7zEzkyf6bgc2QDcwphIY46CtM",
  authDomain: "react-quiz-dev-9cb76.firebaseapp.com",
  projectId: "react-quiz-dev-9cb76",
  storageBucket: "react-quiz-dev-9cb76.appspot.com",
  messagingSenderId: "155254900852",
  appId: "1:155254900852:web:49ae47000e99ba2a3f2921"

});

export default app;
