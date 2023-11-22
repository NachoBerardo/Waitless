import HeaderPlato from "./headerPlato";
import { acompañamientos } from "./acompañamientos";
import FooterPopUp from "./footerPopUp";
import React, { useState } from "react";
import { MenuTypes } from "@/pages";


interface FoodOrder {
  foodName: string,
  foodId: number,
  quantity: number,
  description: string,
  price: number
}


interface Props {
  combinedArray: MenuTypes[][];
  arrayUsed: number;
  keyPlato: number;
  pedido: FoodOrder[];
  setShowPopUP: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setShowFotterMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setPedido: React.Dispatch<React.SetStateAction<FoodOrder[]>>;
}


const PopUp: React.FC<Props> = ({ combinedArray, arrayUsed, keyPlato, pedido, setShowPopUP, setShowMenu, setPedido, setShowFotterMenu }) => {
  const [rotation, setRotation] = useState(false);
  const handleClickRotation = () => {
    setRotation(!rotation);
  };
  const sideDish = combinedArray[arrayUsed][keyPlato].sideDish;
 
  return <div className="h-screen w-screen pb-[7px] bg-background_popup overflow-x-hidden no-scrollbar">
    <HeaderPlato url={combinedArray[arrayUsed][keyPlato].image} setShowPopUP={setShowPopUP} setShowMenu={setShowMenu} />
    <div className="w-screen h-fit pb-4 bg-background overflow-scroll drop-shadow-md">
      <h4 className="text pt-4 px-4 text-black">
        {combinedArray[arrayUsed][keyPlato].name}
      </h4>
      <p className="text pt-1 px-4 text-populetter leading-snug ">
        {combinedArray[arrayUsed][keyPlato].description}
      </p>
      <p className="text-black px-4 pt-1 font-bold">${combinedArray[arrayUsed][keyPlato].price}</p>
    </div>


    {sideDish ? (
      <div className="w-screen h-fit pb-4 bg-background overflow-scroll mt-2 relative drop-shadow-md">
        <h4 className="text-black pt-4 px-4 w-fit">Guarnicion</h4>
        <button
          style={{ transform: `rotate(${rotation ? "0deg" : "180deg"})` }}
          className={"h-[16px] w-[16px] absolute top-8 right-7 transform focus:rotate-0 transition-transform"}
          onClick={handleClickRotation}
        >
          <img src="arrow-up.svg" alt="" />
        </button>
        <h6 className="text-populetter pb-4 px-4 font-normal">
          Elija 1 opción
        </h6>
        {rotation ? (
          acompañamientos()


        ) : (
          <></>
        )}
      </div>) : (<></>)}






    <div className="w-screen h-fit pb-4 mb-24 bg-background overflow-scroll mt-2 relative drop-shadow-md">
      <h4 className="text-black px-4 pt-4 pb-3">¿Tenes alguna especificacion?</h4>
      <div className="flex h-full w-full justify-center">
        <input type="text" className="w-[90%] h-20 bg-input text-black px-4 pb-4 focus:outline-none focus:ring-2 ring-FocusEspecificaciones" placeholder="Especificaciones..." />
      </div>
    </div>
    <FooterPopUp setShowFotterMenu={setShowFotterMenu} titulo={combinedArray[arrayUsed][keyPlato].name} descripcion={combinedArray[arrayUsed][keyPlato].description} precio={parseInt(combinedArray[arrayUsed][keyPlato].price)} setShowPopUP={setShowPopUP} setShowMenu={setShowMenu} setPedido={setPedido} pedido={pedido} foodId={combinedArray[arrayUsed][keyPlato].id}/>
  </div>;
}
export default PopUp
