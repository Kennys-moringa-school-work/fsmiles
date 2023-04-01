import "./App.css";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import About from "./components/About";
import Home from "./components/Home";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./styles.css";
import MyProfile from "./components/MyProfile";
import { useEffect, useState } from "react";
import Edituser from "./components/Edituser";
import Addpost from "./components/Addpost";
import { toast } from "react-toastify";
import { Redirect } from "react-router";

export default function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  // const navigate = useNavigate()

  // auto-login
  useEffect(() => {
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // .then(setUser(null))
  // navigate('/')

  console.log(user);
  // const navigate = useNavigate();
  // if (!user) {
  //   navigate('/');
  // }

  // if(!user) return <LoginForm setUser={setUser}/>
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* if(!user) return <LoginForm setUser={setUser}/> */}
        <Route
          path="/"
          element={
            <LoginForm
              setUser={setUser}
              setPassword={setPassword}
              setUsername={setUsername}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home user={user} setUser={setUser} />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/myprofile" element={<MyProfile user={user} />} />
        <Route path="/edituser" element={<Edituser />} />
        <Route path="/addpost" element={<Addpost />} />
        {/* <Route path='/users' element={<Users/>}/> */}
        {/* <Route path='/login' element={<LoginForm/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}
