import axios from "axios";
import { Kolker_Brush } from "next/font/google";
import { useState } from "react";
import addPedido from "../components/footerPopUp"


interface FoodOrder {
  foodName: string,
  foodId: number,
  quantity: number,
}

interface NullOrder {
  id: number,
  sendedAt: number,
  aclaration: string,
  commandsId: number
}

interface postProps {
  orderId: Number,
  foodId: Number,
  customerId: Number,
  quantity: Number,
}

interface Props {
  setShowPedido: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPedidoEnviado: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPago: React.Dispatch<React.SetStateAction<boolean>>;
  setPedido: React.Dispatch<React.SetStateAction<FoodOrder[]>>;
  txtBoton: string;
  EstadoPedidoEnviado: boolean;
  EstadoPedido: boolean;
  EstadoMenu: boolean;
  Verpedido: boolean;
  pedido: FoodOrder[];
}

const FooterMenu: React.FC<Props> = ({ Verpedido, setShowPago, setShowPedido, setShowMenu, setShowPedidoEnviado, setPedido, EstadoMenu, EstadoPedidoEnviado, EstadoPedido, txtBoton, pedido }) => {
  let finishedInput: postProps[] = []
  let orders: postProps[] = []

  const crearPedido = async () => {
    try {
      return await axios.post("https://perfect-teal-beetle.cyclic.cloud/createOrder", orders).then((response) => {
        console.log("Pedido creado ", response);
        //setPedido([]);
      }).catch((err) => console.log(err))
    } catch (error) {
      console.log(error)
    }
    // SetShowPedido en realidad es Show Menu, por ende se le pasa un true al apretar el boton para que aparezaca el menu y que el ShowPedido se vuelva false
  }
  const getFoodByID = async (id: number, field?: string) => {
    try {
      const response = await axios.get(`https://perfect-teal-beetle.cyclic.cloud/menu/${id}`);
      if (response.status === 200) {
        const item = response.data;
        if (field) {
          const fieldValue = item[field];
          return fieldValue;
        } else {
          return item;
        }
      } else { console.log("Item from Order not found"); }
    } catch (error) {
      console.error(error);
    }
  };

  pedido.forEach((item) => {
    const input = {
      orderId: 6,
      foodId: item.foodId,
      customerId: 1,
      quantity: item.quantity,
      state: "enviado"
    }
    finishedInput.push(input)
  })
  const postOrder = async () => {
    try {
      return await axios.post("https://perfect-teal-beetle.cyclic.cloud/ordersFood", finishedInput).then((response) => {
        console.log("Agregado ", response);
        //setPedido([]);
      }).catch((err) => console.log(err))
    } catch (error) {
      console.log(error)
    }
    // SetShowPedido en realidad es Show Menu, por ende se le pasa un true al apretar el boton para que aparezaca el menu y que el ShowPedido se vuelva false
  }
  const handleClickVerPedido = async () => {
    setShowPedido(EstadoPedido);
    setShowMenu(EstadoMenu);
    setShowPedidoEnviado(EstadoPedidoEnviado);
  }
  const handleClickEnviarPedido = async () => {
    setShowPedido(EstadoPedido);
    setShowMenu(EstadoMenu);
    setShowPedidoEnviado(EstadoPedidoEnviado);
    crearPedido();
    postOrder();
  }
  const handleClickPago = async () => {
    setShowPedido(false);
    setShowMenu(EstadoMenu);
    setShowPedidoEnviado(EstadoPedidoEnviado);
    setShowPago(true);
  }

  return <div className="bottom-0 fixed w-full h-fit grid ">
    <div className="w-full h-fit flex justify-end">
      <button className="rounded-full bg-btngreen h-[70px] w-[70px] mr-6 mb-4 flex justify-center items-center active:outline-none" onClick={(event) => handleClickPago()}>
        <img src="/carrito.svg" alt="" className="h-12 w-12" />
      </button>
    </div>
    <footer className="w-full h-[90px] bg-background  shadow-top flex items-center" id="footerMenu">
      {Verpedido ? (
        <button className=" bg-btngreen absolute rounded-2xl right-0  mr-7 h-[38px] w-[141px]">
          <p className="text-white" onClick={(event) => handleClickVerPedido()}>Ver pedido</p>
        </button>
      ) : (
        <button className=" bg-btngreen absolute rounded-2xl right-0  mr-7 h-[38px] w-[141px]">
          <p className="text-white" onClick={(event) => handleClickEnviarPedido()}>Enviar Pedido</p>
        </button>
      )}

      <div className="h-full ">
        <p className="text-[#252525] ml-7 top-0 mt-5 ">Subtotal</p>
        <h4 className="text-[#252525] ml-7">$2.000,0</h4>
      </div>
    </footer>
  </div>;
}
export default FooterMenu;