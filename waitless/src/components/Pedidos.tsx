import { useState } from "react";
interface Props { 
    pedidos: string[][];
    color:keyof ColorVariants;
    key: number; 
  }

  interface ColorVariants {
    verde: string[];
    amarillo: string[];
    rojo: string[];
}
let color = "verde";

const Pedidos: React.FC<Props> = ({ pedidos, color, key}) => {
    const [rotation, setRotation] = useState(false);
    const handleClickRotation = () => {
        setRotation(!rotation);
    };
    const colorvariants:ColorVariants ={
        verde: ['bg-[#00B493]', 'bg-[#00b42f33]'],
        amarillo: ['bg-[#D29B2ECC]', 'bg-[#d29b2e40]'],
        rojo: ['bg-RojoPedido', 'bg-[#d2382e33]'],
    }

    return <div className={`grid mb-5 rounded-[10px] mx-10`}>
    <div className={` ${colorvariants[color][0]} flex justify-around items-center`}>
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
            {pedidos.map((index, key)=>(
            <div className={`z-20 px-4 py-1 flex justify-between items-center ${colorvariants[color][1]} border-t border-black w-full`}>
                <p className="text-black">{pedidos[index][2][index]}</p>
                <p className="text-black">1000</p>
            </div>
            ))}
            
        </div>
        
    ) : (
        <></>
    )}
    </div>
}
export default Pedidos