import React from "react";
import profile from "./mrcooper.png";
import {Link} from "react-router-dom";

function Signup() {
  return (
    <div className="main">
     <div className="sub-main-signup">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h2>Sign Up</h2>
           <form>
           <div>
             <input type="text" placeholder="Name" id="username"className="name" name="name"/>
           </div>
           <div className='second-input'>
             <input type="text" placeholder="Email" id="useremail" className="name" name="email"/>
           </div>
           <div className="second-input">
             <input type="password" placeholder="Password" id="userpassword" className="name" name="password"/>
           </div>
          <div className="login-button">
          <button className="button"><Link to="/login">Sign Up</Link></button>
          </div>
          </form>
           
            <p className="link">
              Already have an account? <Link to="/login">Login</Link>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}
export default Signup;
