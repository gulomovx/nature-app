import { useState } from "react";

// import React from 'react'

const Modal = () => {
    const [show, setShow] = useState(true)
  return (
      <div>
          { show ?
             <div className="text-center bg-slate-200 w-[70%] mx-auto mt-8 p-8">
             <h1 className="text-4xl">Modal</h1>
             <p className="">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
               natus iusto aliquam ipsa accusamus. Voluptatum laboriosam sunt beatae
               expedita harum.
             </p>
           </div>  : <p>NO modal</p>
          }
      
    </div>
  );
};

export default Modal;
