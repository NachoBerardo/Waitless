import axios from "axios";
import { useState, useRef, useEffect } from "react";
interface FoodOrder {
  foodName: string,
  foodId: number,
  quantity: number,
  description: string,
  price:number
}
interface Props {
  setShowPago: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  pedido: FoodOrder[];
  setPedido: React.Dispatch<React.SetStateAction<FoodOrder[]>>;
  setPedidoCopia: React.Dispatch<React.SetStateAction<FoodOrder[]>>;
  pedidoCopia: FoodOrder[];
}
const FooterMenu: React.FC<Props> = ({setShowPago, setShowMenu, pedido, setPedido, pedidoCopia, setPedidoCopia}) => {
  const HandleClick = () =>{
    setShowMenu(true);
    setShowPago(false);
    console.log(setShowMenu);
  }
const [showTarjeta, setShowTarjeta] = useState(false);
const [showGracias, setshowGracias] = useState(false);
const [showEleccion, setshowEleccion] = useState(true);
const [precioTotal, setPrecioTotal] = useState(0);


const handleSiguiente= () =>{
  if (tarjetaRadioRef.current?.checked) {
    setShowTarjeta(true);
    setshowEleccion(false);
    setshowGracias(false);
    
  } 
  else if (efectivoRadioRef.current?.checked) {
    setshowGracias(true);
    setShowTarjeta(false);
    setshowEleccion(false);
    setPedido([]);
  }
  else{
    console.log("Se debe seleccionar un campo");
  }
}
const handlePagar= () =>{
  setshowGracias(true);
  setShowTarjeta(false);
  setPedido([]);
}
const tarjetaRadioRef = useRef<HTMLInputElement>(null);
const efectivoRadioRef = useRef<HTMLInputElement>(null);

useEffect(() => {
  // Calculate the total price when the "pedido" array changes
  let total = 0;
  pedido.forEach((item) => {
    total += item.price * item.quantity;
  });
  setPrecioTotal(total);
}, [pedido]); // Dependency array ensures that the effect runs when "pedido" changes

return <main>
  {showGracias?(
    <div className="h-screen w-screen bg-white grid items-center overflow-hidden">
        <div className="h-fit w-full grid place-items-center px-12 pt-16 pb-[225px] ">
          <h2 className="text-black text-center font-bold pb-6">Muchas gracias por su compra</h2>
          <h5 className="text-black text-center font-normal pb-6">Ya le traeran la cuenta a su mesa</h5>
          <button className="rounded-[40px] w-fit h-fit bg-btngreen  flex justify-center items-center" onClick={(event) => HandleClick()}>
            <h5 className="text-white font-normal px-16 py-3">Volver al menu</h5>
          </button>
        </div>
      </div>
  ):(
    <></>
  )}
  {showTarjeta?(
    <div className="h-screen w-full bg-white overflow-hidden">
    <button onClick={HandleClick} className="left-0 absolute top-0 ml-2 mt-2 h-[25px] w-[25px] z-20"><img src="arrowBlack.svg" alt="" /></button>
    <div className="h-[200px] w-full grid place-items-center px-12 pt-10 ">
      <div className="rounded-full bg-[#E1EEF5] w-[86px] h-[86px] grid items-center justify-center">
        <img src="/CarritoAzul.svg" alt="" className="h-10 w-10"/>
      </div>
      <h2 className="text-black">Solomia</h2>
    </div>
    <div className="w-full h-fit px-8 pt-10">
      <div className=" w-full h-40 overflow-scroll no-scrollbar ">
         {pedido.map((pedido) => {
                return (
                  <div className="w-full h-fit flex border-solid pt-2 pb-5 px-4 justify-between">
                    <h4 className="text-black font-medium">{pedido.foodName}   x{pedido.quantity}</h4>
                    <h4 className="text-black font-medium">{(pedido.price)*pedido.quantity}</h4>
                  </div>
                )
              }) 
            } 
        {/* <div className="w-full h-fit flex border-solid pt-2 pb-5 px-4 justify-between">
          <h4 className="text-black font-medium">Empanada x2</h4>
          <h4 className="text-black font-medium">2000</h4>
        </div>
        <div className="w-full h-fit flex border-solid pt-2 pb-5 px-4 justify-between">
          <h4 className="text-black font-medium">Provoleta x1</h4>
          <h4 className="text-black font-medium">3600</h4>
        </div>
        <div className="w-full h-fit flex border-solid pt-2 pb-5 px-4 justify-between">
          <h4 className="text-black font-medium">Matambre x2</h4>
          <h4 className="text-black font-medium">7200</h4>
        </div>
        <div className="w-full h-fit flex border-solid pt-2 pb-5 px-4 justify-between">
          <h4 className="text-black font-medium">Volcan de chocolate x1</h4>
          <h4 className="text-black font-medium">1700</h4>
        </div> */}
        <hr className="bg-[#D0D0D0] h-[2px] w-full" />
      </div>
      <div>
       <div className="w-full h-fit flex border-solid pt-4 pb-5 px-4 justify-between">
          <h4 className="text-black font-bold">Total:</h4>
          {/* <h4 className="text-black font-bold">{precioTotal}</h4> */}
         <h4 className="text-black font-bold">{precioTotal}</h4> 

        </div>
      </div>
    </div>
    <div className="w-full h-full bg-[#F4F4F4] mt-3 px-16 shadow-top">
      <div className="grid  place-items-center">
        <div className="h-[160px] w-full rounded-xl mt-6 bg-[#3C3C3C]"></div>
        <div className="h-fit w-fit flex mt-3">
          <div className="rounded-full w-3 h-3 mr-2 bg-btngreen"></div>
          <div className="rounded-full w-3 h-3 mr-2 bg-[#D9D9D9]"></div>
          <div className="rounded-full w-3 h-3 bg-[#D9D9D9]"></div>
        </div>
        <button className="rounded-[40px] w-fit h-fit bg-btngreen  flex justify-center items-center mt-3" onClick={handlePagar}>
          <h5 className="text-white font-normal px-24 py-3">Pagar</h5>
        </button>
      </div>
    </div>
  </div>
  ):(
    <></>
  )}
  {showEleccion?(
    <div className="h-screen w-full bg-white overflow-hidden">
    <button onClick={HandleClick} className="left-0 absolute top-0 ml-2 mt-2 h-[25px] w-[25px] z-20"><img src="arrowBlack.svg" alt="" /></button>
    <div className="h-[200px] w-full grid place-items-center px-12 pt-16 gap-1">
      <div className="rounded-full bg-[#E1EEF5] w-[86px] h-[86px] grid items-center justify-center">
        <img src="/CarritoAzul.svg" alt="" className="h-10 w-10"/>
      </div>
      <h2 className="text-black">Solomia</h2>
    </div>
    <div className="w-full h-fit px-8 pt-10">
      <h4 className="text-black font-semibold">Elije método de pago:</h4>
      <div className="w-full h-fit flex border-solid py-4 mt-5 ring-FocusEspecificaciones ring-1 rounded-md px-4 justify-between">
        <h4 className="text-black font-medium">Tarjeta</h4>
        <input type="radio" className="rounded-full accent-black" name="pago" ref={tarjetaRadioRef}/>
      </div>
      <div className="w-full h-fit flex border-solid py-4 mt-5 ring-FocusEspecificaciones ring-1 rounded-md px-4 justify-between">
        <h4 className="text-black font-medium">Efectivo</h4>
        <input type="radio" className="rounded-full accent-black" name="pago" ref={efectivoRadioRef}/>
      </div>
    </div>
    <div className="w-full h-screen bg-[#F4F4F4] mt-8 grid justify-center shadow-top">
      <button className="rounded-[40px] w-fit h-fit bg-btngreen  flex justify-center items-center mt-7" onClick={handleSiguiente}>
        <h5 className="text-white font-normal px-24 py-3">Siguiente</h5>
      </button>
    </div>
   
  </div>
  ):(
    <></>
  )}


  </main>;
}
export default FooterMenu;