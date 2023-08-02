export default function PantallaRestaurante(){
    return(
        <main>
            <div className="w-screen h-screen bg-white">
                <header className="h-fit w-full">
                    <div className="pl-8 flex items-center shadow-lg h-full py-7">
                        <img src="/TresLineas.svg" className="w-16 h-16" />
                        <button className="px-[84px]">
                            <h3 className="text-black px-7 py-4 rounded-lg hover:bg-LineaPedido">Comandas</h3>
                        </button>
                        <div className="pr-[84px] ">
                            <h3 className="text-black px-7 py-4 rounded-lg hover:bg-LineaPedido">Resumen</h3>
                        </div>
                        <div className="">
                            <h3 className="text-black px-7 py-4 rounded-lg hover:bg-LineaPedido">Pedidos</h3>
                        </div>
                    </div>
                </header>
                <div className="ml-20 mt-10 py-3 pl-7 w-fit h-fit left-0 border-solid border-2 rounded-[10px] flex items-center border-BordeGrisPedido">
                    <h5 className="text-black ">Filtrar</h5>
                    <button>
                        <img src="arrow-up.svg" alt="" className="rotate-180 w-4 h-4 ml-4 mr-7" />
                    </button>
                </div>
            </div>
        </main>
    )
}