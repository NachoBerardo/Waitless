export default function PantallaRestaurante(){
    return(
        <main>
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