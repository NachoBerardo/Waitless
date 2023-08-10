import { useState } from "react";
import DropDownRestaurante from "../components/DropDownRestaurante";

const PantallaRestaurante:React.FC = () => {
    return <main>
            <div className="w-screen h-screen bg-white">
                <header className="h-fit w-full flex shadow-lg items-center">
                    <div className="pl-8 flex items-center h-full w-fit py-7">
                        <img src="/TresLineas.svg" className="w-16 h-16" />
                        <button className="px-[84px]">
                            <h3 className="text-black px-7 py-4 rounded-lg hover:bg-LineaPedido active:bg-ActiveHeaderRestaurante">Comandas</h3>
                        </button>
                        <button className="pr-[84px] ">
                            <h3 className="text-black px-7 py-4 rounded-lg hover:bg-LineaPedido active:bg-ActiveHeaderRestaurante">Resumen</h3>
                        </button>
                        <button className="">
                            <h3 className="text-black px-7 py-4 rounded-lg hover:bg-LineaPedido active:bg-ActiveHeaderRestaurante">Pedidos</h3>
                        </button>
                    </div>
                    <img src="/Logo.svg" className="h-[72px] w-24 absolute right-0 mr-8">

                    </img>
                </header>
                <DropDownRestaurante/>
                <div className="flex flex-row justify-around pt-11 z-10">
                    <div className="h-fit w-full ml-20 mr-6 border-4 rounded-[10px] border-solid border-BorderPedidosRestaurante">
                        <h4 className="text-BorderPedidosRestaurante pl-5 pt-5 pb-11">Pendientes</h4>
                        <div className="w-full h-fit mx-7 bg-RojoPedido flex justify-around">
                            <h5 className="py-4 text-black">#1</h5>
                            <h5 className="py-4 text-black">00:00hs</h5>
                            <h5 className="py-4 text-black">a</h5>
                        </div>
                    </div>
                    <div className="h-20 w-full mr-6 border-4 rounded-[10px] border-solid border-BorderPedidosRestaurante">

                    </div>
                    <div className="h-20 w-full mr-20 border-4 rounded-[10px] border-solid border-BorderPedidosRestaurante">

                    </div>
                </div>
            </div>
        </main>;
    
}

export default PantallaRestaurante


