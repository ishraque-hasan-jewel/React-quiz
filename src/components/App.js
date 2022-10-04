import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import {AuthProvider} from "../contexts/AuthContext"
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


function App() {
  return (
    <Router>
      <AuthProvider>
      <Layout>
        <Routes>
        
            <Route exact path='/' element={<Home/>}/>
         

            <Route exact path='signup' element={<PublicRoute><Signup /></PublicRoute>}/>
            
          
          

          
          <Route exact path="login" element={<PublicRoute><Login /></PublicRoute>} />
          
          
          <Route exact path="quiz/:id" element={<PrivateRoute><Quiz /></PrivateRoute>} />
          

         
          <Route exact path="result/:id" element={<PrivateRoute><Result /></PrivateRoute>} />
          
        </Routes>
      </Layout>
      </AuthProvider>
    </Router>
  );
}
export default App;
//----------------------------------------
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "../styles/App.css";
// import Layout from "./Layout";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Quiz from "./pages/Quiz";
// import Result from "./pages/Result";
// import Signup from "./pages/Signup";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />}>
//             <Route path="signup" element={<Signup />} />
//             <Route path="login" element={<Login />} />
//             <Route path="quiz" element={<Quiz />} />
//             <Route path="result" element={<Result />} />
//           </Route>
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
