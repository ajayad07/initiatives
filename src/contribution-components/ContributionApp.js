import React from "react";
import Navbar from "./Navbar";
import Entry from "./Entry";
import initiatives from "./initiatives";
import Header from "./Header";
import Footer from "./Footer";

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

function ContributionApp() {
  return (
    <div>
     <Navbar />
     <Header />
     <dl className="dictionary">{initiatives.map(createEntry)}</dl>
     <Footer />
      </div>
  );
}

export default ContributionApp;
