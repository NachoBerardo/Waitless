import axios from "axios";
import { useState } from "react";
interface FoodOrder {
  foodName: string,
  foodId: number,
  quantity: number
}

interface postProps {
  orderId: Number,
  foodId: Number,
  customerId: Number,
  quantity: Number
}

interface Props { 
  setShowPedido: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPedidoEnviado: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPago: React.Dispatch<React.SetStateAction<boolean>>;
  txtBoton: string;
  EstadoPedidoEnviado: boolean;
  EstadoPedido: boolean;
  EstadoMenu: boolean;
  pedido: FoodOrder[];
}

const FooterMenu: React.FC<Props> = ({setShowPago,setShowPedido, setShowMenu, setShowPedidoEnviado, EstadoMenu, EstadoPedidoEnviado, EstadoPedido, txtBoton, pedido}) => {
const handleClickVerPedido = async () =>{
  setShowPedido(EstadoPedido); 
  setShowMenu(EstadoMenu);
  setShowPedidoEnviado(EstadoPedidoEnviado);
  
  let finishedInput: postProps[] = []

  pedido.forEach((item) => {
    const input = {
      orderId: 5,
      foodId: item.foodId,
      customerId: 1,
      quantity: item.quantity,
      state: "enviado"
    }

    finishedInput.push(input)
  })
  
  try {
    return await axios.post("https://perfect-teal-beetle.cyclic.cloud/ordersFood", {
      body: finishedInput
    }).then((response) => {
      console.log("Agregado ", response);
    }).catch((err) => console.log(err))
  } catch (error) {
    console.log(error)
  }
  //console.log(EstadoPedidoEnviado, EstadoPedido, EstadoMenu)
  // SetShowPedido en realidad es Show Menu, por ende se le pasa un true al apretar el boton para que aparezaca el menu y que el ShowPedido se vuelva false
}
const handleClickPago = async () =>{
  setShowPedido(false); 
  setShowMenu(EstadoMenu);
  setShowPedidoEnviado(EstadoPedidoEnviado);
  setShowPago(true);
}

return <div className="bottom-0 fixed w-full h-fit grid ">
  <div className="w-full h-fit flex justify-end">
    <button className="rounded-full bg-btngreen h-[70px] w-[70px] mr-6 mb-4 flex justify-center items-center active:outline-none" onClick={(event) => handleClickPago()}>
      <img src="/carrito.svg" alt="" className="h-12 w-12"/>
    </button>
  </div>
  <footer className="w-full h-[90px] bg-background  shadow-top flex items-center" id="footerMenu">
    <button className=" bg-btngreen absolute rounded-2xl right-0  mr-7 h-[38px] w-[141px]">
      <p className="text-white" onClick={(event) => handleClickVerPedido() }>{txtBoton}</p>
    </button>
    <div className="h-full ">
      <p className="text-[#252525] ml-7 top-0 mt-5 ">Subtotal</p>
      <h4 className="text-[#252525] ml-7">$2.000,0</h4>
    </div>
  </footer>
  </div>;
}
export default FooterMenu;