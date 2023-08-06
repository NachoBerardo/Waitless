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
                <div className="ml-20 mt-10 py-3 pl-7 w-fit h-fit border-solid border-2 rounded-[10px] flex-col items-center border-BordeGrisPedido ">
                    <div className="flex items-center">
                        <h5 className="text-black left-0">Filtrar</h5>
                        <button
                            style={{ transform: `rotate(${rotation ? "180deg" : "0deg"})` }}
                            onClick={handleClickRotation}
                            className={"h-[16px] w-[16px] ml-4 mr-7 transform focus:rotate-0 transition-transform right-0"}

                        >
                            <img src="arrow-up.svg" alt=""  />
                        </button>
                    </div>
                    {rotation ? (
                        <button className="pb-2 pt-2">
                            <h5 className=" pl-3 text-LetraDropDown font-normal pr-7"> Pendientes</h5>
                            <hr className="w-full "/>
                        </button>
                    ) : (
                    <></>
                    )}
                </div>
                
            </div>
        </main>;
    
}

export default PantallaRestaurante