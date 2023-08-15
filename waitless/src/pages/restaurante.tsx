import { useState } from "react";
import Pedidos from "../components/Pedidos";
import DropDownRestaurante from "../components/DropDownRestaurante";

const PantallaRestaurante:React.FC = () => {
    

    const pedidos = [
        ["1", "12:15","Provoleta, Empanadas, Mucho textoparaver overflowwwwwwwww"],["2","12:20","Provoleta, Empanadas, Mucho textoparaver overfloooooooooowwwwwwwww"],["3","12:25","Provoleta, Empanadas, Mucho textoparaver overflowwwwwwwww"],["4","12:30","Provoleta"],["5","12:30","Provoleta"],["6","12:30","Provoleta"],["7","12:30","Provoleta"],["8","12:30","Provoleta"],["8","12:30","Provoleta"],["8","12:30","Provoleta"]
    ];
    const[pendientes, setPendientes] = useState(true);
    const[enProceso, setEnProceso] = useState(true);
    const[completados, setCompletados] = useState(true);

   

    return <main className="no-scrollbar">
            <div className="w-full min-h-screen h-full bg-white no-scrollbar">
                <header className="h-fit w-full flex shadow-lg items-center">
                    <div className="pl-8 flex items-center h-full w-fit py-[10px] xl:py-5 ">
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

                <div className="grid grid-cols-3 justify-around m-auto monitor:pt-6 xl:pt-11 z-10 ">
                    {pendientes ?(
                        <div className="custombp:h-[660px] notebook:h-[570px] ml-20 border-4 rounded-[10px] border-solid border-BorderPedidosRestaurante overflow-scroll no-scrollbar">
                        <h4 className="text-BorderPedidosRestaurante pl-5 pt-5 pb-11">Completados</h4>
                        {pedidos.map((pedidos, key)=>(
                              <Pedidos pedidos={pedidos} color={"RojoPedido"}></Pedidos>
                        ))}
                        
                    </div>
                    ):(
                        <></>
                    )}
                    {enProceso ?(
                        <div className="custombp:h-[660px] notebook:h-[570px] ml-6 mr-6 border-4 rounded-[10px] border-solid border-BorderPedidosRestaurante overflow-scroll no-scrollbar">
                        <h4 className="text-BorderPedidosRestaurante pl-5 pt-5 pb-11">En Proceso</h4>
                        {pedidos.map((pedidos, key)=>(
                                <Pedidos pedidos={pedidos} color={"[#D29B2ECC]"}></Pedidos>
                            
                        ))}
                        
                    </div>
                    ):(
                        <></>
                    )}
                    {completados ?(
                        <div className="custombp:h-[660px] notebook:h-[570px] mr-20 border-4 rounded-[10px] border-solid border-BorderPedidosRestaurante overflow-scroll no-scrollbar">
                        <h4 className="text-BorderPedidosRestaurante pl-5 pt-5 pb-11">Pendientes</h4>
                        {pedidos.map((pedidos, key)=>(
                         
                            <Pedidos pedidos={pedidos} color={"[#00B493]"}></Pedidos>
                            
                        ))}
                        
                    </div>
                    ):(
                        <></>
                    )}
                </div>
                <footer className="absolute bottom-0 w-full h-fit flex justify-center items-center pb-3 pt-5">
                    <button>
                      <img src="tacho.svg" alt="" className="w-16 h-16"/>
                    </button>
                </footer>
            </div>
           
        </main>;
    
}

export default PantallaRestaurante


