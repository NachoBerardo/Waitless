export default function PantallaRestaurante(){
    return(
        <main>
            <div className="w-screen h-screen bg-white">
                <header className="h-auto w-full py-7 ">
                    <div className="ml-8 flex items-center ">
                        <img src="/TresLineas.svg" className="w-16 h-16" />
                        <button className="px-[84px]">
                            <h3 className="text-black px-7 py-4 hover:bg-LineaPedido">Comandas</h3>
                        </button>
                        <div className="pr-[84px]">
                            <h3 className="text-black px-7 py-4 hover:bg-LineaPedido">Resumen</h3>
                        </div>
                        <div className="">
                            <h3 className="text-black px-7 py-4 hover:bg-LineaPedido">Pedidos</h3>
                        </div>
                    </div>
                </header>
            </div>
        </main>
    )
}