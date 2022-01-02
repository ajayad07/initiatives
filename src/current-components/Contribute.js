import React from "react";

function Contribute({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="cmodalContainer">
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
           <h3 id="addinit">Contribute</h3>
           <div>
             <input type="text" placeholder="Contributor Name" className="name" name="ciname"/>
           </div>
           <div className='second-input'>
             <input type="text" placeholder="Contribution(Hours)" className="name" name="cidesc"/>
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

export default Contribute;
