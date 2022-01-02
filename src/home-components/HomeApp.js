import React from "react";
import CurrentEntry from "./CurrentEntry";
import UpcomingEntry from "./UpcomingEntry";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

function HomeApp() {
  return (
    <div>
      <Navbar />
      <Header />
      <dl className="dictionary"><CurrentEntry /><UpcomingEntry /></dl>
      <Footer />
      </div>
  );
}

export default HomeApp;
