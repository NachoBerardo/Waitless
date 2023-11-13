import axios from "axios";
import { useState } from "react";
interface FoodOrder {
  foodName: string,
  foodId: number,
  quantity: number
}
interface Props { 
  setShowPago: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  pedido: FoodOrder[];
}
const FooterMenu: React.FC<Props> = ({setShowPago, setShowMenu, pedido}) => {
  const HandleClick = () =>{
    setShowMenu(true);
    setShowPago(false);
    console.log(setShowMenu);
  }
return <div className="h-screen w-full bg-white">
    <button onClick={HandleClick} className="left-0 absolute top-0 ml-2 mt-2 h-[25px] w-[25px] z-20"><img src="arrowBlack.svg" alt="" /></button>
    <div className="h-[200px] w-full grid place-items-center px-12 pt-16 gap-1">
      <div className="rounded-full bg-[#E1EEF5] w-[86px] h-[86px] grid items-center justify-center">
        <img src="/CarritoAzul.svg" alt="" className="h-10 w-10"/>
      </div>
      <h2 className="text-black">Solomia</h2>
    </div>
    <div className="w-full h-fit px-8 pt-10">
      <h4 className="text-black font-semibold">Ejije método de pago:</h4>
      <div className="w-full h-fit flex border-solid py-4 mt-5 ring-black ring-1 rounded-md pl-4">
        <h4 className="text-black font-medium">Tarjeta</h4>
        <input type="radio" className="rounded-full accent-black" name="pago" />
      </div>
      <div className="w-full h-fit flex border-solid py-4 mt-5 ring-black ring-1 rounded-md pl-4">
        <h4 className="text-black font-medium">Efectivo</h4>
        <input type="radio" className="rounded-full accent-black" name="pago" />
      </div>
    </div>
    
  </div>;
}
export default FooterMenu;