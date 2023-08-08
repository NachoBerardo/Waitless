import { useState } from "react";

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


                <div className="ml-20 mt-10 py-3 w-[252px] h-fit border-solid border-2 rounded-[10px] flex-col items-center border-BordeGrisPedido transition-transform">
                    <div className="flex items-center justify-between w-full pl-7 ">
                        <h4 className="text-black">Filtrar</h4>
                        <button
                            style={{ transform: `rotate(${rotation ? "0deg" : "180deg"})` }}
                            onClick={handleClickRotation}
                            className={"h-[16px] w-[16px] mr-5 transform focus:rotate-0 transition-transform "}

                        >
                            <img src="arrow-up.svg" alt=""  />
                        </button>
                    </div>
                    {rotation ? (
                        <div className="grid pr-7">
                            <button className="pb-2 pt-2">
                                <div className="pl-7">
                                    <h4 className="text-LetraDropDown ml-3 font-normal text-left"> 
                                        Pendientes
                                    </h4>
                                    <hr className="w-full "/>
                                </div>
                            </button>
                            <button className="pb-2 pt-2">
                                <div className="pl-7">
                                    <h4 className="text-LetraDropDown ml-3 font-normal text-left"> 
                                        En Proceso
                                    </h4>
                                    <hr className="w-full "/>
                                </div>
                            </button>
                            <button className="pb-2 pt-2">
                                <div className="pl-7">
                                    <h4 className="text-LetraDropDown ml-3 font-normal text-left"> 
                                        Completados
                                    </h4>
                                    <hr className="w-full "/>
                                </div>
                            </button>
                            <button className="pb-1 pt-2">
                                <div className="pl-7">
                                    <h4 className="text-LetraDropDown ml-3 font-normal text-left"> 
                                        Todos
                                    </h4>
                                    <hr className="w-full "/>
                                </div>
                            </button>
                            
                        </div>
                    ) : (
                    <></>
                    )}
                </div>
                
            </div>
        </main>;
    
}

export default PantallaRestaurante