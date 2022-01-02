import React from "react";
import {useState} from "react";
import Modal from "./Modal";


function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div id="cu">
        <h2 id="heading">Upcoming - Initiatives</h2>
        <center><button className="btn btn-warning" onClick={() => {
          setModalOpen(true);
        }}>Add Initiative</button></center>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Header;