const ScrollBar:React.FC = () => {
  const handleClickScroll = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // element.scroll(40, 0)
    }
  };
  return <div className=" w-full h-[40px] overflow-x-auto gap-5 bg-white flex place-items-center drop-shadow-md sticky top-0 no-scrollbar">
    <a onClick={(event) => handleClickScroll("entradas")} className="pl-5 text-black font-bold text-md h-full grid place-content-center  active:text-btngreen ">
      Entradas
      {/* <div className="absolute bottom-0  w-[75px] h-[7px] rounded-t bg-btngreen"></div> */}
    </a>
    <a onClick={(event) => handleClickScroll("principales")} className=" text-black font-bold h-full grid place-content-center active:text-btngreen ">
      Principales
    </a>
    <a onClick={(event) => handleClickScroll("postres")} className="text-black font-bold h-full grid place-content-center active:text-btngreen">
      Postres
    </a>
  </div>;
}
export default ScrollBar;