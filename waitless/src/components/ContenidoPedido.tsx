import FooterMenu from "./footerMenu";
import BtnSumarRestar2 from "./btnSumarRestar2";

interface Props { 
  setShowPedido: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const ContenidoPedido:React.FC<Props> = ({setShowPedido, setShowMenu}) => {
  const handleClickArrowBack = (pedido:boolean, Menu: boolean) =>{
    setShowPedido(pedido);
    setShowMenu(Menu);
    
  }

  return <div className="h-screen w-screen pb-[7px] bg-white overflow-x-hidden no-scrollbar">
    <header className="top-0 w-full h-[67px] flex items-center justify-center bg-white drop-shadow-md relative">
      <h3 className="font-bold text-black">Pedido de tu mesa</h3>
      <button className=" absolute left-0 ml-4 h-[25px] w-[25px] " onClick={(event) => handleClickArrowBack(false, true)}>
        <img src="arrowBlack.svg" alt="" className="h-full w-full" />
      </button>
    </header>
    <div className="h-full w-full">
      <div className="w-full h-fit ">
        <div className=" flex mt-9">
          <div className="relative w-[100%] h-6">
            <hr className="bg-LineaVerdePedido h-[4px] w-full absolute bottom-[35%]" />
          </div>
          <h4 className="text-LineaVerdePedido px-2">Gimena</h4>
          <div className="relative w-[100%] h-6">
            <hr className="bg-LineaVerdePedido h-[4px] w-full absolute bottom-[35%]" />
          </div>
        </div>
        <div className="w-fit h-fit grid grid-cols-2 gap-x-2 m-auto">
          <div>
            <h3 className="text-black pl-14 pt-6 overflow-hidden inline-flex"> Papa al horno</h3>
            <p className="pl-14 text-letraGris truncate">aaaaaaaaaaaaaaaaaaa</p>
            <p className="pl-14 text-letraGrisOscuro pt-1 pb-4">500$</p>
          </div>
          <div className="flex justify-center items-center">
            <BtnSumarRestar2></BtnSumarRestar2>
          </div>
        </div>
        <div className="w-full h-fit flex justify-center">
          <hr className="border-b bg-LineaPedido w-[100%] h-px mb-4 mx-7" />
        </div>

        <div className="w-fit h-fit grid grid-cols-2 gap-x-2 m-auto ">
          <div>
            <h3 className="text-black pl-14 pt-6 overflow-hidden inline-flex"> Pastel de papa</h3>
            <p className="pl-14 text-letraGris truncate">bbbbbbbbbbbbb</p>
            <p className="pl-14 text-letraGrisOscuro pt-1 pb-4">1500$</p>
          </div>
          <div className="flex justify-center items-center">
            <BtnSumarRestar2></BtnSumarRestar2>
          </div>
        </div>
        <div className="w-full h-fit flex justify-center">
          <hr className="border-b bg-LineaPedido w-[100%] h-px mb-4 mx-7" />
        </div>

        {/* separadooooooor */}

        <div className=" flex mt-9 ">
          <div className="relative w-[100%] h-6">
            <hr className="bg-populetter h-[4px] w-full absolute bottom-[35%]" />
          </div>
          <h4 className="text-populetter px-2">Romina</h4>
          <div className="relative w-[100%] h-6">
            <hr className="bg-populetter h-[4px] w-full absolute bottom-[35%]" />
          </div>
        </div>
        <div className="w-fit h-fit grid grid-cols-2 gap-x-2 m-auto">
          <div className="">
            <h3 className="text-black pl-14 pt-6 overflow-hidden inline-flex truncate">Calabaza</h3>
            <p className="pl-14 text-letraGris truncate">aaaaaaaaaaaaaaaaaaaaa</p>
            <p className="pl-14 text-letraGrisOscuro pt-1 pb-4">500$</p>
          </div>
          <div className="flex justify-center items-center">
            <BtnSumarRestar2></BtnSumarRestar2>
          </div>
        </div>
        <div className="w-full h-fit flex justify-center">
          <hr className="border-b bg-LineaPedido w-[100%] h-px mb-4 mx-7" />
        </div>

        <div className="w-fit h-fit grid grid-cols-2 gap-x-2 m-auto">
          <div>
            <h3 className="text-black pl-14 pt-6 overflow-hidden inline-flex"> Milanesa</h3>
            <p className="pl-14 text-letraGris truncate">cccccccccccccccccccccc</p>
            <p className="pl-14 text-letraGrisOscuro pt-1 pb-4">20000$</p>
          </div>
          <div className="flex justify-center items-center">
            <BtnSumarRestar2></BtnSumarRestar2>
          </div>
        </div>
        <div className="w-full h-fit flex justify-center">
          <hr className="border-b bg-LineaPedido w-[100%] h-px mb-4 mx-7" />
        </div>

      </div>
    </div>
    <FooterMenu setShowPedido={setShowMenu} setShowMenu={setShowPedido} txtBoton="Enviar Pedido" />
  </div>;
}
export default ContenidoPedido;