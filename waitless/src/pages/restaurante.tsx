import { useState } from "react";
import DropDownRestaurante from "../components/DropDownRestaurante";

const PantallaRestaurante:React.FC = () => {
    const [rotation, setRotation] = useState(false);
        const handleClickRotation = () => {
            setRotation(!rotation);
          };

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
                <div className="grid grid-cols-3  justify-around m-auto pt-11 z-10">
                    <div className="h-fit  ml-20 mr-6 border-4 rounded-[10px] border-solid border-BorderPedidosRestaurante">
                        <h4 className="text-BorderPedidosRestaurante pl-5 pt-5 pb-11">Pendientes</h4>
                        <div className=" mx-7 mb-5 bg-RojoPedido rounded-[10px] flex justify-around items-center">
                            <h5 className="py-4 text-black">#1</h5>
                            <h5 className="py-4 text-black">00:00hs</h5>
                            <button
                                style={{ transform: `rotate(${rotation ? "0deg" : "180deg"})` }}
                                onClick={handleClickRotation}
                                className={"h-[16px] w-[16px] transform focus:rotate-0 transition-transform "}
                            >
                                <img src="arrow-up.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="h-fit mr-6 border-4 rounded-[10px] border-solid border-BorderPedidosRestaurante">
                        <h4 className="text-BorderPedidosRestaurante pl-5 pt-5 pb-11">En Proceso</h4>
                        <div className=" mx-7 mb-5 bg-[#d29b2ecc] rounded-[10px] flex justify-around items-center">
                            <h5 className="py-4 text-black">#1</h5>
                            <h5 className="py-4 text-black">00:00hs</h5>
                            <button
                                style={{ transform: `rotate(${rotation ? "0deg" : "180deg"})` }}
                                onClick={handleClickRotation}
                                className={"h-[16px] w-[16px] transform focus:rotate-0 transition-transform "}
                            >
                                <img src="arrow-up.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="h-fit  mr-20 border-4 rounded-[10px] border-solid border-BorderPedidosRestaurante">
                        <h4 className="text-BorderPedidosRestaurante pl-5 pt-5 pb-11">Completados</h4>
                        <div className=" mx-7 mb-5 bg-[#00B493] rounded-[10px] flex justify-around items-center">
                            <h5 className="py-4 text-black">#1</h5>
                            <h5 className="py-4 text-black">00:00hs</h5>
                            <button
                                style={{ transform: `rotate(${rotation ? "0deg" : "180deg"})` }}
                                onClick={handleClickRotation}
                                className={"h-[16px] w-[16px] transform focus:rotate-0 transition-transform "}
                            >
                                <img src="arrow-up.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>;
    
}

export default PantallaRestaurante


