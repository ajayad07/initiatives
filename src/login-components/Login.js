import React from "react";
import {Link} from "react-router-dom";
import profile from "./mrcooper.png";


function Login() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
           </div>
         </div>
         <div>
           <h2>Login</h2>
           <form>
           <div>
            
             <input type="text" placeholder="Email" className="name" name="loginemail"/>
           </div>
           <div className="second-input">
             
             <input type="password" placeholder="Password" className="name" name="loginpass"/>
           </div>
          <div className="login-button">
          <button className="button"><Link to="/home">Login</Link></button>
          </div>
          </form>
           
            <p className="link">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}


export default Login;
