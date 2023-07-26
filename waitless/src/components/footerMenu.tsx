import { useState } from "react";
interface Props { 
  setShowPedido: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  txtBoton: string;
}

const FooterMenu: React.FC<Props> = ({setShowPedido, setShowMenu, txtBoton}) => {
const handleClickVerPedido = (pedido:boolean, Menu: boolean) =>{
  setShowPedido(pedido);
  setShowMenu(Menu);
}
return <footer className="w-full h-[90px] bg-background bottom-0 absolute shadow-top flex items-center" id="footerMenu">
    <button className=" bg-btngreen absolute rounded-2xl right-0  mr-7 h-[38px] w-[141px]">
      <p className="text-white" onClick={(event) => handleClickVerPedido(true, false) }>{txtBoton}</p>
    </button>
    <div className="h-full absolute">
      <p className="text-[#252525] ml-7 top-0 mt-5 ">Subtotal</p>
      <h4 className="text-[#252525] ml-7">$2.000,0</h4>
    </div>
  </footer>;
}
export default FooterMenu;