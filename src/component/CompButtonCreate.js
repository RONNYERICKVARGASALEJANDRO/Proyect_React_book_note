import React from "react";
function CompButtonCreate({setOpenModal}){
    return(
    <button className="Button-Create" 
    onClick={()=>{
      setOpenModal(state=> !state);
    }
    }>
      next
    </button>
  
    );
  }

  export {CompButtonCreate};