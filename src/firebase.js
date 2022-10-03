
import { initializeApp } from "firebase/app";
//-------------------------------------------------------------
const app = initializeApp({
  apiKey: "AIzaSyBNpOfEop7zEzkyf6bgc2QDcwphIY46CtM",
  authDomain: "react-quiz-dev-9cb76.firebaseapp.com",
  databaseURL: "https://react-quiz-dev-9cb76-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-quiz-dev-9cb76",
  storageBucket: "react-quiz-dev-9cb76.appspot.com",
  messagingSenderId: "155254900852",
  appId: "1:155254900852:web:49ae47000e99ba2a3f2921"

});
//-----------------------------------------------------------------


// const app = initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_ID,

// });
//-------------------------------------------------------------------

export default app;
