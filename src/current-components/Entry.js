import React from "react";
import Contribute from "./Contribute";
import {useState} from "react";

function Entry(props) {
  const [subscribe,setSubscribe] = useState("Subscribe");
  const [modalOpen, setModalOpen] = useState(false);
  function subscribed(){
    setSubscribe("Subscribed");
  }
  return (
    <div className="term">
      <dt>
        <span>{props.name}</span>
      </dt>
      
      <dd>{props.meaning}</dd>
      <div id="bt">
      <button id="btn" className="btn btn-primary" onClick={subscribed}>{subscribe}</button>
      <button className="btn btn-success" onClick={() => {
          setModalOpen(true);
        }}>Contribute</button>
        {modalOpen && <Contribute setOpenModal={setModalOpen} />}
      </div>
    </div>
  );
}

export default Entry;
