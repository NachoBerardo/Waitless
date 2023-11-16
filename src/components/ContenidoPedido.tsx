import FooterMenu from "./footerMenu";
import BtnSumarRestar2 from "./btnSumarRestar2";
import { useState } from "react";
import axios from "axios";

export interface MenuTypes {
  idOrder: number;
  sendedAt: string;
  aclaration: string;
  commandsId: number;
}


interface FoodOrder {
  foodName: string,
  foodId: number,
  quantity: number
}

 /*
const getPedido = async () => {
  try {
    return await axios.get("https://perfect-teal-beetle.cyclic.cloud/").then((response) => {
      console.log(response.data.data)
      return response.data.data
    }).catch((err) => console.log(err))
  } catch (error) {
    console.log(error)
  }
}
*/
interface Props {
  setShowPedido: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPago: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setPedido: React.Dispatch<React.SetStateAction<FoodOrder[]>>;
  pedido: FoodOrder[];
}
const ContenidoPedido: React.FC<Props> = ({ setShowPedido, setShowMenu, setShowPago, setPedido, pedido }) => {
  const handleClickArrowBack = (EstadoMenu: boolean, EstadoPedido: boolean, EstadoPedidoEnviado: boolean) => {
    setShowPedido(EstadoPedido);
    setShowMenu(EstadoMenu);
    setShowPedidoEnviado(EstadoPedidoEnviado)
  }
  const handleClickLlamarMesero = () =>{


  }


  const handleVerPedido= () =>{


  }
  const [showPedidoEnviado, setShowPedidoEnviado] = useState(false);
  const [error, setError] = useState(false)


  return <main>
    {showPedidoEnviado ? (
      <>
       {error?(
        <div className="h-screen w-screen bg-white grid items-center overflow-hidden">
        <div className="h-full w-full grid place-items-center px-12 pt-16 pb-[225px] gap-1">
          <img src="/Error.svg" alt="" className="h-[250px] w-[250px]"/>
          <h2 className="text-black text-center font-bold pt-9">Error</h2>
          <h5 className="text-black text-center font-normal">Estamos teniendo problemas para enviar tu pedido</h5>
          <button className="rounded-[40px] w-fit h-fit bg-btngreen  flex justify-center items-center" onClick={(event) => handleClickLlamarMesero()}>
            <h5 className="text-white font-normal px-16 py-3">Llamar a un mesero</h5>
          </button>
          <h5 className="text-btngreen font-normal px-16 py-3" onClick={(event) => handleClickArrowBack(true, false, false)}>Volver al menú</h5>
        </div>
        <div className="absolute bottom-0 w-full h-[110px] bg-gradient-to-t from-[#D70101] opacity-[0.55]  "></div>
      </div>
       ):(
        <div className="h-screen w-screen bg-white grid items-center overflow-hidden">
          <div className=" h-full w-full grid place-items-center px-12 pt-16 pb-[225px] gap-1">
            <img src="/TicVerde.svg" alt="" className="h-[250px] w-[250px]"/>
            <h2 className="text-black text-center font-bold">Muchas gracias</h2>
            <h5 className="text-black text-center font-normal">Recibimos tu pedido y está en preparación</h5>
            {/* <button className="rounded-[40px] w-fit h-fit bg-btngreen  flex justify-center items-center"  onClick={(event) => handleVerPedido()}>
              <h5 className="text-white font-normal px-16 py-3">Ver pedido</h5>
            </button> */}
            <button className="rounded-[40px] w-fit h-fit bg-btngreen  flex justify-center items-center">
             <h5 className="text-white font-normal px-16 py-3" onClick={(event) => handleClickArrowBack(true, false, false)}>Volver al menú</h5>
            </button>
          </div>
          <div className="absolute bottom-0 w-full h-[130px] bg-gradient-to-t from-[#19B400] opacity-[0.7]  "></div>
        </div>
       )}
      </>
    ) : (
      <>
        <div className="h-screen w-screen pb-[7px] bg-white overflow-x-hidden no-scrollbar">
          <header className="top-0 w-full h-[67px] flex items-center justify-center bg-white drop-shadow-md relative">
            <h3 className="font-bold text-black">Pedido de tu mesa</h3>
            <button className=" absolute left-0 ml-4 h-[25px] w-[25px] " onClick={(event) => handleClickArrowBack(true, false, false)}>
              <img src="arrowBlack.svg" alt="" className="h-full w-full" />
            </button>
          </header>
          <div className="h-full w-full">
            <div className="flex w-screen justify-around mt-2 gap-[10px] text-xl">
              <p>Nombre</p>
              <p>Cantidad</p>
            </div>
            {
              pedido.map((pedido) => {
                return (
                  <div className="flex w-screen justify-between mt-5 border-b-2">
                    <h1>{ pedido.foodName } </h1>
                    <h1> { pedido.quantity } </h1>
                  </div>
                )
              }) 
            }
          </div>
          <FooterMenu setShowPedido={setShowPedido} setShowMenu={setShowMenu} setShowPedidoEnviado={setShowPedidoEnviado} setPedido={setPedido} EstadoPedidoEnviado={true} EstadoMenu={false} EstadoPedido={true} txtBoton="Enviar Pedido" pedido={pedido} setShowPago={setShowPago}/>
        </div>
      </>
    )}


  </main>;
}
export default ContenidoPedido;
