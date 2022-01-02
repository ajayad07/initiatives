import React from "react";
import {useState} from "react";

function Entry(props) {
  const [subscribe,setSubscribe] = useState("Subscribe");

  function subscribed(){
    setSubscribe("Subscribed");
  }
  return (
    <div className="term">
      <dt>
        <span>{props.name}</span>
        
      </dt>
      <dd>{props.meaning}</dd>
      <button class="btn btn-primary" onClick={subscribed}>{subscribe}</button>
      
    </div>
  );
}

export default Entry;
