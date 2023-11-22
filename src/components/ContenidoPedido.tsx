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
  quantity: number,
  description: string,
  price: number
}

interface Props {
  setShowPedido: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPago: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setPedido: React.Dispatch<React.SetStateAction<FoodOrder[]>>;
  pedido: FoodOrder[];
}

//GET PRECIO Y DESCRIPCION DE LOS PLATOS EN ORDER.
//ID es el foodId y field es "precio" o "descripcion"
const getFoodByID = async (id: number, field?: string) => {
  try {
    const response = await axios.get(`https://nice-blue-salamander-sock.cyclic.app/menu/${id}`);
    if (response.status === 200) {
      const item = response.data;
      if (field) {
        const fieldValue = item[field];
        return fieldValue;
      } else {
        return item;
      }
    } else { console.log("Item from Food not found"); }
  } catch (error) {
    console.error(error);
  }
};


const ContenidoPedido: React.FC<Props> = ({ setShowPedido, setShowMenu, setShowPago, setPedido, pedido }) => {
  const handleClickArrowBack = (EstadoMenu: boolean, EstadoPedido: boolean, EstadoPedidoEnviado: boolean) => {
    setShowPedido(EstadoPedido);
    setShowMenu(EstadoMenu);
    setShowPedidoEnviado(EstadoPedidoEnviado)
  }
  const handleClickLlamarMesero = () => {


  }

  const [showPedidoEnviado, setShowPedidoEnviado] = useState(false);
  const [error, setError] = useState(false)


  return <main>
    {showPedidoEnviado ? (
      <>
        {error ? (
          <div className="h-screen w-screen bg-white grid items-center overflow-hidden">
            <div className="h-full w-full grid place-items-center px-12 pt-16 pb-[225px] gap-1">
              <img src="/Error.svg" alt="" className="h-[250px] w-[250px]" />
              <h2 className="text-black text-center font-bold pt-9">Error</h2>
              <h5 className="text-black text-center font-normal">Estamos teniendo problemas para enviar tu pedido</h5>
              <button className="rounded-[40px] w-fit h-fit bg-btngreen  flex justify-center items-center" onClick={(event) => handleClickLlamarMesero()}>
                <h5 className="text-white font-normal px-16 py-3">Llamar a un mesero</h5>
              </button>
              <h5 className="text-btngreen font-normal px-16 py-3" onClick={(event) => handleClickArrowBack(true, false, false)}>Volver al menú</h5>
            </div>
            <div className="absolute bottom-0 w-full h-[110px] bg-gradient-to-t from-[#D70101] opacity-[0.55]  "></div>
          </div>
        ) : (
          <div className="h-screen w-screen bg-white grid items-center overflow-hidden">
            <div className=" h-full w-full grid place-items-center px-12 pt-16 pb-[225px] gap-1">
              <img src="/TicVerde.svg" alt="" className="h-[250px] w-[250px]" />
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
        <div className="h-screen w-screen pb-[7px] bg-white overflow-x-auto no-scrollbar">
          <header className="top-0 w-full h-[67px] flex items-center justify-center bg-white drop-shadow-md relative">
            <h3 className="font-bold text-black">Pedido de tu mesa</h3>
            <button className=" absolute left-0 ml-4 h-[25px] w-[25px] " onClick={(event) => handleClickArrowBack(true, false, false)}>
              <img src="arrowBlack.svg" alt="" className="h-full w-full" />
            </button>
          </header>
          <div className="h-full w-full">
            <div className="w-full h-fit ">
              <div>
                <div className=" flex mt-9">
                  <div className="relative w-[100%] h-6">
                    <hr className="bg-LineaVerdePedido h-[4px] w-full absolute bottom-[35%]" />
                  </div>
                  <h4 className="text-LineaVerdePedido px-2">Pedido</h4>
                  <div className="relative w-[100%] h-6">
                    <hr className="bg-LineaVerdePedido h-[4px] w-full absolute bottom-[35%]" />
                  </div>
                </div>
                <div className="pb-20">
                  {
                    pedido.map((pedido) => {
                      getFoodByID(pedido.foodId)
                       .then(data => {
                        if (data !== null) {
                          console.log(data);
              
                        }
                      })
                      return (
                        <div className="">
                          <div className="w-full h-fit grid grid-cols-2 gap-x-2 m-auto ">
                            <div>
                              <h3 className="text-black pl-14 pt-6 overflow-hidden inline-flex">{pedido.foodName} </h3>
                              <p className="pl-14 text-letraGris truncate">{(pedido.price)*pedido.quantity}</p>
                              <p className="pl-14 text-letraGrisOscuro pt-1 pb-4">{pedido.description}</p>
                            </div>
                            <div className="flex justify-center items-center">
                              <BtnSumarRestar2 cantidadOriginal={pedido.quantity} />
                            </div>
                          </div>
                          <div className="w-full h-fit flex justify-center">
                            <hr className="border-b bg-LineaPedido w-[100%] h-px mb-4 mx-7" />
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>

              {/* separadooooooor */}


              {/* <div className=" flex mt-3">
                <div className="relative w-[100%] h-6">
                  <hr className="bg-populetter h-[4px] w-full absolute bottom-[35%]" />
                </div>
                <h4 className="text-populetter px-2"></h4>
                <div className="relative w-[100%] h-6">
                  <hr className="bg-populetter h-[4px] w-full absolute bottom-[35%]" />
                </div>
              </div>
              <div className="w-fit h-fit grid grid-cols-2 gap-x-2 m-auto">
                <div className="">
                  <h3 className="text-black pl-14 pt-6 overflow-hidden inline-flex truncate"></h3>
                  <p className="pl-14 text-letraGris truncate"></p>
                  <p className="pl-14 text-letraGrisOscuro pt-1 pb-4"></p>
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
                  <h3 className="text-black pl-14 pt-6 overflow-hidden inline-flex"> </h3>
                  <p className="pl-14 text-letraGris truncate"></p>
                  <p className="pl-14 text-letraGrisOscuro pt-1 pb-4"></p>
                </div>
                <div className="flex justify-center items-center">
                  <BtnSumarRestar2></BtnSumarRestar2>
                </div>
              </div> */}
            </div>
          </div>
          <FooterMenu Verpedido={false} setPedido={setPedido} setShowPedido={setShowPedido} setShowMenu={setShowMenu} setShowPedidoEnviado={setShowPedidoEnviado} EstadoPedidoEnviado={true} EstadoMenu={false} EstadoPedido={true} txtBoton="Enviar Pedido" pedido={pedido} setShowPago={setShowPago} />
        </div>
      </>
    )}


  </main>;
}
export default ContenidoPedido;

            // {
            //   pedido.map((pedido) => {
            //     return (
            //       <div className="flex w-screen justify-between mt-5 border-b-2">
            //         <h1>{ pedido.foodName } </h1>
            //         <h1> { pedido.quantity } </h1>
            //       </div>
            //     )
            //   }) 
            // }
