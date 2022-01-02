import React from "react";
import {Link} from "react-router-dom";
import Entry from "./Entry";
import initiatives from "./initiatives";
import Header from "./Header";
import Footer from "./Footer";


function createEntry(ent) {
  return (
    <Entry
      key={ent.id}
      name={ent.name}
      meaning={ent.meaning}
    />
  );
}

function StartApp() {

  return (
    
    <div>
      <Header />
      <dl className="dictionary">{initiatives.map(createEntry)}</dl>
     <center><div id="start"><h3>Click <Link to="/login">Login</Link> / <Link to="/signup">Sign Up</Link> to continue</h3></div>
     </center>
     <div id="googlelogin">
  </div>
      <Footer />
      </div>
  );
}

export default StartApp;
