const ScrollBar:React.FC = () => {
  return <div className="mt-0 w-full h-[40px] overflow-x-auto bg-buscador flex place-items-center drop-shadow-md sticky top-0 no-scrollbar">
    <a href="#entradas" className="pr-5 pl-5 text-black font-bold text-md">
      Entradas
    </a>
    <a href="#principales" className="pr-5 pl-5 text-black font-bold">
      Principales
    </a>
    <a href="#postres" className="pr-5 pl-5 text-black font-bold">
      Postres
    </a>
  </div>;
}
export default ScrollBar;