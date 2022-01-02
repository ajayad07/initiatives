import React from "react";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div id="modalcenter">
        <form>
           <h3 id="addinit">Add Initiative</h3>
           <div>
             <input type="text" placeholder="Initiative Name" className="name" name="ciname"/>
           </div>
           <div className='second-input'>
             <input type="text" placeholder="Initiative Description" className="name" name="cidesc"/>
           </div>
          <div>
          <button className="btn btn-primary" id="addbtn">Add</button>
          
          </div>
          </form>
          </div>
      </div>
    </div>
  );
}

export default Modal;
