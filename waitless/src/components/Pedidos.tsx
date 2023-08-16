import { useState } from "react";
interface Props { 
    pedidos: string[][];
    color: string;
    key: number; 

  }

const Pedidos: React.FC<Props> = ({ pedidos, color, key}) => {
    const [rotation, setRotation] = useState(false);
    const handleClickRotation = () => {
        setRotation(!rotation);
    };
    let PlatosPedido = pedidos[2];
    const background = `bg-${color}`;

    return <div className={` ${background} grid mb-5 rounded-[10px] mx-10`}>
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
            <div className="px-4 py-1 flex justify-between items-center bg-activeDropdown w-full">
                <p className="text-black">{pedidos[2][0]}</p>
                <p className="text-black">1000</p>
            </div>
            <div className="px-4 py-1 flex justify-between items-center bg-activeDropdown border-t border-black w-full">
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