import { useState, useEffect } from "react";

const ScrollBar:React.FC = () => {
  const handleClickScroll = (id:string) => {
    const element2 = document.getElementById("general");
    const element = document.getElementById(id);
    if (element) {
      let element_rect = element.getBoundingClientRect();
      element2?.scrollBy({
        top:  element_rect["top"] -45,
        left: 0,
        behavior: 'smooth'
      })
    }
  };

  
  // const a = () =>{
  //   console.log(window.pageYOffset);
  // } 
  // window.addEventListener('scroll', a);

  return <div className=" w-full h-[40px] overflow-x-auto bg-white flex place-items-center drop-shadow-md sticky top-0 no-scrollbar">
    <button onClick={(event) => handleClickScroll("entradas")} className="pl-8 text-black font-bold text-md h-full grid place-content-center  active:text-btngreen bg-none">
      Entradas
      {/* <div className="absolute bottom-0  w-[75px] h-[7px] rounded-t bg-btngreen"></div> */}
    </button>
    <button onClick={(event) => handleClickScroll("principales")} className=" text-black font-bold h-full grid place-content-center pl-8 active:text-btngreen ">
      Principales
    </button>
    <button onClick={(event) => handleClickScroll("postres")} className="text-black font-bold h-full grid place-content-center pl-8 active:text-btngreen">
      Postres
    </button>
  </div>;
}
export default ScrollBar;