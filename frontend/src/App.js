import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `http://localhost:8080/login/success`;
      console.log("url", url);
      const data = await axios.get(url, { withCredentials: true });
      console.log("data", data.data.user);
      setUser(data.user._json);
    } catch (error) {
      console.log("error##");
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="container">
      <h1>{user ? "user is present" : "user is not present"}</h1>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route
          exact
          path="/login"
          element={user ? <Home /> : <Login user={user} setUser={setUser} />}
        />
        <Route
          exact
          path="/signup"
          element={user ? <Navigate to="/login" /> : <Signup />}
        />
      </Routes>
    </div>
  );
}

export default App;
