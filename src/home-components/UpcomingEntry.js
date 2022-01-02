import React from "react";
import {Link} from "react-router-dom";

function UpcomingEntry() {
  return (
    <div className="term">
      <dt>
      <Link to="/upcoming"><span>Upcoming</span></Link>
      </dt>
      <dd>List of upcoming initiatives</dd>
    </div>
  );
}

export default UpcomingEntry;