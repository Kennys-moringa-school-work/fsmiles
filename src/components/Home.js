import Leftsidebar from "./Leftsidebar";
import Rightsidebar from "./Rightsidebar";
import "/home/latimore/smiles/src/styles.css";
import Feed from "./Feed";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({user, setUser, onLogout}) {
  const navigate = useNavigate()

//  if(!user) return <LoginForm />

useEffect(() => {
  if (!user) {
    navigate('/') // Redirect to login page
  }
}, []);

  return (
    <>
      <div className="container-fluid gedf-wrapper">
        <div className="row">
          <Leftsidebar  user = {user} setUser={setUser} onLogout={onLogout}/>
          <div className="col-md-5 gedf-main">
             <Feed users = {user} setUser = {setUser} />
           </div>
          <Rightsidebar />
        </div>
      </div>
    </>
  );
}
