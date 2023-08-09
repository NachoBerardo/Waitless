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
                <div className="flex flex-row justify-around pt-11">
                    <div className="h-20 w-20 bg-footer">

                    </div>
                    <div className="h-20 w-20 bg-footer">

                    </div>
                    <div className="h-20 w-20 bg-footer">

                    </div>
                </div>
            </div>
        </main>;
    
}

export default PantallaRestaurante


