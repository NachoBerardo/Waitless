import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "../components/footer";
import Header from "../components/header";
import { type } from "os";
import { useState } from "react";
import { truncate } from "fs";
import { scrollbar } from "../components/scrollbar";
import { headerPlato } from "../components/headerPlato";
import { headerMenu } from "../components/headerMenu";
import { acompañamientos } from "../components/acompañamientos";

const inter = Inter({ subsets: ["latin"] });
type entradas = [string, string, string];

export default function Menu() {
  const entradas = [
    [
      "Provoleta",
      "/provoleta.jpg",
      "Deliciosa provoleta de leche de vaca fundida, acompañada de sabrosos condimentos",
      "2234",
    ],
    [
      "Asado",
      "/asado.jpg",
      "El exquisito asado argentino, preparado a la perfección en nuestra parrilla",
      "4675",
    ],
    [
      "Empanadas",
      "/provoleta.jpg",
      "Deliciosas empanadas argentinas rellenas de carne, pollo, verduras o queso, horneadas hasta la perfección",
      "8113",
    ],
    [
      "Milanesa",
      "/provoleta.jpg",
      "Irresistible milanesa argentina de carne empanada y frita, acompañada de guarnición",
      "6231",
    ],
    [
      "Locro",
      "/provoleta.jpg",
      "Nuestro delicioso locro argentino, un guiso tradicional con maíz, porotos, carne de cerdo y verduras",
      "3678",
    ],
    [
      "Matambre",
      "",
      "Exquisito matambre argentino relleno y enrollado, servido con guarnición de temporada",
      "4261",
    ],
    [
      "Humita",
      "",
      "Sabrosa humita argentina a base de choclo (maíz tierno) y condimentos, acompañada de pan casero",
      "5296",
    ],
    [
      "Ñoquis",
      "",
      "Tradicionales ñoquis argentinos de papa, bañados en nuestra irresistible salsa casera",
      "9372",
    ],
    [
      "Dulce de leche",
      "",
      "Delicioso dulce de leche argentino, perfecto para endulzar tus postres y bebidas",
      "4856",
    ],
    [
      "Pastel de papas",
      "",
      "Nuestro suculento pastel de papas argentino, capas de puré de papas con carne molida y gratinado al horno",
      "2754",
    ],
  ];

  const MaxLength = (description: string, MaxCharcters: number): string => {
    if (description.length <= MaxCharcters) {
      return description;
    }
    let descrptionShort = description.substring(0, MaxCharcters);
    const LastSpace = descrptionShort.lastIndexOf(" ");

    if (LastSpace !== -1) {
      descrptionShort = descrptionShort.substring(0, LastSpace);
    } else {
      return descrptionShort;
    }

    return descrptionShort + " ...";
  };

  const [showFood, setShowFood] = useState(false);
  const [rotation, setRotation] = useState(false);
  const [keyPlato, setKeyPlato] = useState(0);

  const handleclick = (key: number, estado: boolean) => {
    setShowFood(estado);
    setKeyPlato(key);
  };

  const handleClickRotation = () => {
    setRotation(!rotation);
  };

  return (
    <main className="">
      <div className="h-screen w-screen pb-[7px] bg-background overflow-x-hidden no-scrollbar">
        {showFood ? (
          <div className="h-screen w-screen pb-[7px] bg-background_popup overflow-x-hidden ">
            {headerPlato(entradas, keyPlato, setShowFood)}
            <div className="w-screen h-fit pb-4 bg-background overflow-scroll drop-shadow-md">
              <h4 className="text pt-4 px-4 text-black">
                {entradas[keyPlato][0]}
              </h4>
              <p className="text pt-1 px-4 text-populetter leading-snug ">
                {entradas[keyPlato][2]}
              </p>
              <p className="text-black px-4 pt-1 font-bold">3000$</p>
            </div>
            <div className="w-screen h-fit pb-4 bg-background overflow-scroll mt-2 relative drop-shadow-md">
              <h4 className="text-black pt-4 px-4 w-fit">Guarnicion</h4>
              <button
                style={{ transform: `rotate(${rotation ? "180deg" : "0deg"})` }}
                className={"h-[16px] w-[16px] absolute top-4 right-7 transform focus:rotate-0 transition-transform"}
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
            </div>
            <div className="w-screen h-fit pb-4 mb-24 bg-background overflow-scroll mt-2 relative drop-shadow-md">
                <h4 className="text-black px-4 pt-4 pb-3">¿Tenes alguna especificacion?</h4>
                <div className="flex h-full w-full justify-center">
                 <input type="text" className="w-[90%] h-20 bg-input text-black px-4 pb-4" placeholder="Especificaciones..."/>
                </div>
            </div>

            <footer className="w-full h-[90px] bg-background bottom-0 absolute shadow-top flex items-center" id="footerMenu" >
                <button className=" bg-btngreen absolute rounded-2xl right-0  mr-7 h-[38px] w-[89px]">
                  <p className="text-white">Agregar</p>
                </button>
                <button className="border-solid border-2 border-[#252525] absolute rounded-2xl right-0 flex items-center mr-[126px] h-[38px] w-[89px]">
                  <p className="text-[#252525]">0</p>
                  <p className="text-[#252525] right-0 absolute">+</p>
                </button>
            </footer> 
          </div>
        ) : (
          <>
            {headerMenu()}

            {scrollbar()}

            <h3 className="text-black text mt-4 ml-4 ">Entradas</h3>

            <div className="grid grid-cols-2 gap-x-2 justify-center m-auto w-[360px]">
              {entradas.map((comida, key) => (
                <div
                  onClick={(event) => handleclick(key, true)}
                  className="container m-2 h-fit content-center"
                  key={key}
                >
                  <div className="h-[105px] w-[150px] mx-2 mt-1 overflow-hidden grid content-center">
                    <img
                      src={comida[1]}
                      alt=""
                      className="rounded-lg min-h-full min-w-full"
                    />
                  </div>
                  <div className="pl-3 max-w-[160px] ">
                    <h5 className=" text-black leading-snug overflow-hidden">
                      {comida[0]}
                    </h5>
                    <p className="text-populetter leading-snug pb-2 max-h- overflow-hidden text-ellipsis">
                      {MaxLength(comida[2], 35)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

