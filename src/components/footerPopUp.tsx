import { useState } from "react";
import BtnSumarRestar from "./btnSumarRestar"
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

interface Props {
  titulo: string;
  descripcion: string;
  precio: string;
  pedido: FoodOrder[];
  foodId: number;
  setShowPopUP: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setPedido: React.Dispatch<React.SetStateAction<FoodOrder[]>>;
}

interface Order {
  name: string;
  description: string;
  price: string;
}

interface FoodOrder {
  foodName: string,
  foodId: number,
  quantity: number
}

const FooterPopUp: React.FC<Props> = ({ titulo, descripcion, foodId, precio, pedido, setShowPopUP, setShowMenu, setPedido }) => {
  const [cantidad, setCantidad] = useState(1);
  const [precioTotal, setPrecioTotal] = useState(+precio);
  const handleClickSumar = () => {
    setCantidad(cantidad + 1);
    setPrecioTotal (+precio * (cantidad + 1))
  };

  const handleClickRestar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
      setPrecioTotal(+precio * (cantidad - 1))
    }
  };

  const addPedido = (foodName: string, foodId: number, quantity: number) => {
    setPedido(pedido => [...pedido, { foodName, foodId, quantity }]);
  }
  
  return <footer className="w-full h-[90px] bg-background bottom-0 fixed shadow-top flex items-center" id="footerMenu">
    <div className=" bg-btngreen absolute rounded-2xl right-0 flex justify-center items-center mr-7 h-[38px] w-[89px]" onClick={() => addPedido(titulo, foodId, cantidad)}>
      <p className="text-white " >Agregar</p>
    </div>
    <div className="border-solid border-2 border-[#252525] absolute rounded-2xl right-0 flex items-center justify-between mr-[126px] h-[38px] w-[89px]">
      <button className="text-[#252525] h-[14px] w-[14px] flex items-center justify-center my-2 ml-1 active:" onClick={handleClickRestar}>-</button> {/*8 de arriba, 4 del margin y 20 entre otros botones*/}
      <p className="text-[#252525] h-[14px] w-[14px] flex items-center justify-center">{cantidad}</p>
      <button className="text-[#252525] h-[14px] w-[14px] flex items-center justify-center mr-1" onClick={handleClickSumar}>+</button>
    </div>
    <div className="h-full absolute">
      <p className="text-[#252525] ml-7 top-0 mt-5 ">Subtotal</p>
      <h4 className="text-[#252525] ml-7">${precioTotal}</h4>
    </div>
  </footer>;
}

export default FooterPopUp;