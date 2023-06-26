import { useState } from "react";

const FooterMenu: React.FC = () => {
return <footer className="w-full h-[90px] bg-background bottom-0 absolute shadow-top flex items-center" id="footerMenu">
    <button className=" bg-btngreen absolute rounded-2xl right-0  mr-7 h-[38px] w-[141px]">
      <p className="text-white" >Ver pedido</p>
    </button>
    <div className="h-full absolute">
      <p className="text-[#252525] ml-7 top-0 mt-5 ">Subtotal</p>
      <h4 className="text-[#252525] ml-7">$2.000,0</h4>
    </div>
  </footer>;
}
export default FooterMenu;