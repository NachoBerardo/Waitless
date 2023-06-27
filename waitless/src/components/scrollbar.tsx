const ScrollBar:React.FC = () => {
  return <div className=" w-full h-[40px] overflow-x-auto gap-5 bg-white flex place-items-center drop-shadow-md sticky top-0 no-scrollbar">
    <a href="#entradas" className="pl-5 text-black font-bold text-md h-full grid place-content-center  active:text-btngreen ">
      Entradas
      {/* <div className="absolute bottom-0  w-[75px] h-[7px] rounded-t bg-btngreen"></div> */}
    </a>
    <a href="#principales" className=" text-black font-bold h-full grid place-content-center active:text-btngreen ">
      Principales
    </a>
    <a href="#postres" className="text-black font-bold h-full grid place-content-center active:text-btngreen ">
      Postres
    </a>
  </div>;
}
export default ScrollBar;