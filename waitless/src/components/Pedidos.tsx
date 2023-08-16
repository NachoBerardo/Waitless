import { useState } from "react";
interface Props { 
    pedidos: string[][];
    color:keyof ColorVariants;
    key: number; 

  }

  interface ColorVariants {
    verde: string;
    amarillo: string;
    rojo: string;
}

let color = "verde";

const Pedidos: React.FC<Props> = ({ pedidos, color, key}) => {
    const [rotation, setRotation] = useState(false);
    const handleClickRotation = () => {
        setRotation(!rotation);
    };
    const colorvariants:ColorVariants ={
        verde: 'bg-[#00B493]',
        amarillo: 'bg-[#D29B2ECC]',
        rojo: 'bg-RojoPedido',
    }
    const colorvariants2:ColorVariants ={
        verde: 'bg-[#CCCCCC]',
        amarillo: 'bg-[#CCCCCC]',
        rojo: 'bg-Rojito',
    }
    return <div className={` ${colorvariants[color]} grid mb-5 rounded-[10px] mx-10`}>
    <div className="flex justify-around items-center">
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
    {rotation ? (
        <div className="grid">
            <div className={`px-4 py-1 flex justify-between items-center ${colorvariants2[color]} border-t border-black w-full`}>
                <p className="text-black">{pedidos[2][0]}</p>
                <p className="text-black">1000</p>
            </div>
            <div className={`px-4 py-1 flex justify-between items-center ${colorvariants2[color]} border-t border-black w-full`}>
                <p className="text-black">Empanadas</p>
                <p className="text-black">1000</p>
            </div>
        </div>
        
    ) : (
        <></>
    )}
    </div>
}
export default Pedidos