import { useState, useRef } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props { 
    pedidos: string[];
    id:number;
    hora:string;
    color:keyof ColorVariants;
    key: number;
    pedidoCompleto: TipoPedido; 
  }
  type TipoPedido= {
    pedidos: string[];
    hora: string;
    id: number;
}

  interface ColorVariants {
    verde: string[];
    amarillo: string[];
    rojo: string[];
}

const Pedidos: React.FC<Props> = ({ pedidos, color, key, id, hora, pedidoCompleto}) => {
//-------------------------Constantes de dragg----------------------------- https://www.youtube.com/watch?v=Q1PYQPK9TaM&ab_channel=asat
    const dragItem = useRef<[string[], number, string] | null>(null);
    const dragNode = useRef<EventTarget  | null>(null);
    
    const [dragging, setDragging] = useState(false);

    const handleDragStart = (e: React.SyntheticEvent<EventTarget>, pedidos: string[], id:number, hora:string, ) =>{
        console.log(pedidos, id, hora)
        dragItem.current = [pedidos, id, hora];
        dragNode.current = e.currentTarget;
    }

//-------------------------Constantes de rotacion y colores-----------------------------

    const [rotation, setRotation] = useState(false);
    const handleClickRotation = () => {
        setRotation(!rotation);
    };
    const colorvariants:ColorVariants ={
        verde: ['bg-[#00B493]', 'bg-[#00b42f33]'],
        amarillo: ['bg-[#D29B2ECC]', 'bg-[#d29b2e40]'],
        rojo: ['bg-RojoPedido', 'bg-[#d2382e33]'],
    }
    
    return <div draggable={true} onDragStart={(e)=>{handleDragStart(e, pedidos, id, hora)}} className={`grid mb-5 rounded-[10px] mx-10 cursor-pointer `}>
        <div className={` ${colorvariants[color][0]} flex justify-around items-center`}>
            <h5 className="py-4 text-black">#{id}</h5>
            <h5 className="py-4 text-black">{hora}hs</h5>
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
                {pedidos.map((pedido, key)=>(
                <div className={`z-20 px-4 py-1 flex justify-between items-center ${colorvariants[color][1]} border-t border-black w-full`}>
                    <p className="text-black">{pedido}</p>
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