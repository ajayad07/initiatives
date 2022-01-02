import React from "react";
import {Link} from "react-router-dom";

function CurrentEntry() {
  return (
    <div className="term">
      <dt>
      <Link to="/current"><span>Current</span></Link>
      </dt>
      <dd>List of initiatives currently in progress</dd>
    </div>
  );
}

export default CurrentEntry;
