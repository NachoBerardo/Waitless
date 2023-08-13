import { useState } from "react";
interface Props { 
    pedidos: string[];
  }

const Pedidos: React.FC<Props> = ({ pedidos}) => {
    const [rotation, setRotation] = useState(false);
    const handleClickRotation = () => {
        setRotation(!rotation);
    };

    return <div className={`mx-7 mb-5  rounded-10px flex justify-around items-center`}>
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
}
export default Pedidos