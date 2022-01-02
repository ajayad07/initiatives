import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import StartApp from "./start-components/StartApp";
import CurrentApp from "./current-components/CurrentApp";
import HomeApp from "./home-components/HomeApp";
import Login from "./login-components/Login";
import Signup from "./signup-components/Signup";
import UpcomingApp from "./upcoming-components/UpcomingApp";
import ContributionApp from "./contribution-components/ContributionApp";


ReactDOM.render(
    <div>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<StartApp />} />
        <Route path="/home" element={<HomeApp />} />
        <Route path="/current" element={<CurrentApp />} />
        <Route path="/upcoming" element={<UpcomingApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contributions" element={<ContributionApp />} />
    </Routes>
    </BrowserRouter>
  </div>
, document.getElementById("root"));
