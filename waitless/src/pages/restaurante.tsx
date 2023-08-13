import { useState } from "react";
import DropDownRestaurante from "../components/DropDownRestaurante";

const PantallaRestaurante:React.FC = () => {
    const [rotation, setRotation] = useState(false);
    const handleClickRotation = () => {
        setRotation(!rotation);
    };

    const pedidos = [
        ["1", "12:15","Provoleta, Empanadas, Mucho textoparaver overflowwwwwwwww"],["2","12:20","Provoleta, Empanadas, Mucho textoparaver overfloooooooooowwwwwwwww"],["3","12:25","Provoleta, Empanadas, Mucho textoparaver overflowwwwwwwww"],["4","12:30","Provoleta"],["5","12:30","Provoleta"],["6","12:30","Provoleta"],["7","12:30","Provoleta"],["8","12:30","Provoleta"],["8","12:30","Provoleta"],["8","12:30","Provoleta"]
    ];
    const[pendientes, setPendientes] = useState(true);
    const[enProceso, setEnProceso] = useState(true);
    const[completados, setCompletados] = useState(true);

   

    return <main>
            <div className="w-full min-h-screen h-full bg-white">
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
                <DropDownRestaurante setPendientes={setPendientes} setCompletados={setCompletados} setEnProceso={setEnProceso}/>
                <div className="grid grid-cols-3 justify-around m-auto pt-11 z-10 pb-20 ">
                    {pendientes ?(
                        <div className="h-[660px] ml-20 border-4 rounded-[10px] border-solid border-BorderPedidosRestaurante overflow-scroll no-scrollbar">
                        <h4 className="text-BorderPedidosRestaurante pl-5 pt-5 pb-11">Pendientes</h4>
                        {pedidos.map((pedidos, key)=>(
                            <div className=" mx-7 mb-5 bg-RojoPedido rounded-[10px] flex justify-around items-center">
                            <h5 className="py-4 text-black">#{pedidos[0]}</h5>
                            <h5 className="py-4 text-black">{pedidos[1]}hs</h5>
                            <button
                                style={{ transform: `rotate(${rotation ? "0deg" : "180deg"})` }}
                                onClick={handleClickRotation}
                                className={"h-[16px] w-[16px] transform focus:rotate-0 transition-transform "}
                            >
                                <img src="arrow-up.svg" alt="" />
                            </button>
                        </div>
                        ))}
                        
                    </div>
                    ):(
                        <></>
                    )}
                    {enProceso ?(
                        <div className="h-[660px] ml-6 mr-6 border-4 rounded-[10px] border-solid border-BorderPedidosRestaurante overflow-scroll no-scrollbar">
                        <h4 className="text-BorderPedidosRestaurante pl-5 pt-5 pb-11">Pendientes</h4>
                        {pedidos.map((pedidos, key)=>(
                            <div className=" mx-7 mb-5 bg-[#d29b2ecc] rounded-[10px] flex justify-around items-center">
                            <h5 className="py-4 text-black">#{pedidos[0]}</h5>
                            <h5 className="py-4 text-black">{pedidos[1]}hs</h5>
                            <button
                                style={{ transform: `rotate(${rotation ? "0deg" : "180deg"})` }}
                                onClick={handleClickRotation}
                                className={"h-[16px] w-[16px] transform focus:rotate-0 transition-transform "}
                            >
                                <img src="arrow-up.svg" alt="" />
                            </button>
                        </div>
                        ))}
                        
                    </div>
                    ):(
                        <></>
                    )}
                    {completados ?(
                        <div className="h-[660px] mr-20 border-4 rounded-[10px] border-solid border-BorderPedidosRestaurante overflow-scroll no-scrollbar">
                        <h4 className="text-BorderPedidosRestaurante pl-5 pt-5 pb-11">Pendientes</h4>
                        {pedidos.map((pedidos, key)=>(
                            <div className=" mx-7 mb-5 bg-[#00B493] rounded-[10px] flex justify-around items-center">
                            <h5 className="py-4 text-black">#{pedidos[0]}</h5>
                            <h5 className="py-4 text-black">{pedidos[1]}hs</h5>
                            <button
                                style={{ transform: `rotate(${rotation ? "0deg" : "180deg"})` }}
                                onClick={handleClickRotation}
                                className={"h-[16px] w-[16px] transform focus:rotate-0 transition-transform "}
                            >
                                <img src="arrow-up.svg" alt="" />
                            </button>
                        </div>
                        ))}
                        
                    </div>
                    ):(
                        <></>
                    )}
                </div>
                <footer className="bottom-0 absolute w-full h-fit flex justify-center items-center pb-3">
                    <button>
                      <img src="tacho.svg" alt="" className="w-16 h-16"/>
                    </button>
                </footer>
            </div>
           
        </main>;
    
}

export default PantallaRestaurante


