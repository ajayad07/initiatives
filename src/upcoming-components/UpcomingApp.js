import React from "react";
import Entry from "./Entry";
import initiatives from "./initiatives";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

function createEntry(ent) {
  return (
    <Entry
      key={ent.id}
      emoji={ent.emoji}
      name={ent.name}
      meaning={ent.meaning}
    />
  );
}

function UpcomingApp() {
  return (
    <div>
      <Navbar />
      <Header />
      <dl className="dictionary">{initiatives.map(createEntry)}</dl>
      <Footer />
      </div>
  );
}

export default UpcomingApp;
