import React from "react";
import {useState} from "react";

function Entry(props) {
  const [like,setLike] = useState("Like");

  function liked(){
    setLike("Liked");
  }
  return (
    <div className="term">
      <dt>
        <span>{props.name}</span>
      </dt>
      
      <dd>{props.meaning}</dd>
      <button className="btn btn-primary" onClick={liked}>👍{like}</button>
    </div>
  );
}

export default Entry;
