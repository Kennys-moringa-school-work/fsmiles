import Leftsidebar from "./Leftsidebar";
import Rightsidebar from "./Rightsidebar";
import "/home/latimore/smiles/src/styles.css";
import Feed from "./Feed";

export default function Home({user, setUser, onLogout}) {
//  if(!user) return <LoginForm />
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
