import { useState } from "react";

const DropDownRestaurante: React.FC=()=>{
        const [rotation, setRotation] = useState(false);
        const handleClickRotation = () => {
            setRotation(!rotation);
          };
    return <div>
            <div className=" absolute left-0 ml-20 mt-10 py-3 w-[252px] h-fit border-solid border-2 z-10 rounded-[10px] flex-col items-center border-BordeGrisPedido transition-transform">
                <div className="flex items-center justify-between w-full pl-7 ">
                    <h4 className="text-black">Filtrar</h4>
                    <button
                        style={{ transform: `rotate(${rotation ? "0deg" : "180deg"})` }}
                        onClick={handleClickRotation}
                        className={"h-[16px] w-[16px] mr-5 transform focus:rotate-0 transition-transform "}

                    >
                        <img src="arrow-up.svg" alt="" />
                    </button>
                </div>
                {rotation ? (
                    <div className="grid pr-7">
                        <button className="pb-2 pt-2">
                            <div className="pl-7 ">
                                <h4 className="text-LetraDropDown hover:bg-background_popup active:bg-activeDropdown pl-3 font-normal text-left">
                                    Pendientes
                                </h4>
                                <hr className="w-full " />
                            </div>
                        </button>
                        <button className="pb-2 pt-2">
                            <div className="pl-7">
                                <h4 className="text-LetraDropDown hover:bg-background_popup active:bg-activeDropdown pl-3 font-normal text-left">
                                    En Proceso
                                </h4>
                                <hr className="w-full " />
                            </div>
                        </button>
                        <button className="pb-2 pt-2">
                            <div className="pl-7">
                                <h4 className="text-LetraDropDown hover:bg-background_popup active:bg-activeDropdown pl-3 font-normal text-left">
                                    Completados
                                </h4>
                                <hr className="w-full " />
                            </div>
                        </button>
                        <button className="pb-1 pt-2">
                            <div className="pl-7">
                                <h4 className="text-LetraDropDown hover:bg-background_popup active:bg-activeDropdown pl-3 font-normal text-left">
                                    Todos
                                </h4>
                                <hr className="w-full " />
                            </div>
                        </button>

                    </div>
                ) : (
                    <></>
                )}
        </div>
        <div className="w-screen h-px relative pt-24"></div>
    </div>;
    
}
export default DropDownRestaurante
