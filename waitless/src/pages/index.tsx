import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "../components/footer";
import Header from "../components/header";
import { type } from "os";
import { useState } from "react";
import { truncate } from "fs";

const inter = Inter({ subsets: ["latin"] });
type entradas = [string, string, string];

export default function Menu() {
  const entradas = [
    [
      "Provoleta",
      "/provoleta.jpg",
      "Una rica provoleta de leche de vaca y mucho texto para rellenar aaaaa Una rica provoleta de leche de vaca y mucho texto para rellenar aaaaa Una rica provoleta de leche de vaca y mucho texto para rellenar aaaaa",
    ],
    [
      "Asado",
      "/asado.jpg",
      "El asado argentino es una tradicional preparación de carne a la parrilla.",
    ],
    [
      "Empanadas",
      "/provoleta.jpg",
      "Las empanadas argentinas son deliciosos pasteles rellenos de carne, pollo, verduras o queso.",
    ],
    [
      "Milanesa",
      "/provoleta.jpg",
      "La milanesa es un plato argentino hecho a base de carne empanada y frita.",
    ],
    [
      "Locro",
      "/provoleta.jpg",
      "El locro es un guiso típico argentino que contiene maíz, porotos, carne de cerdo y verduras.",
    ],
    [
      "Matambre",
      "",
      "El matambre es un corte de carne argentino relleno y enrollado.",
    ],
    [
      "Humita",
      "",
      "La humita es una preparación típica argentina a base de choclo (maíz tierno) y condimentos.",
    ],
    [
      "Ñoquis",
      "",
      "Los ñoquis son una pasta de papa típica de Argentina, que se suele comer los días 29 de cada mes.",
    ],
    [
      "Dulce de leche",
      "",
      "El dulce de leche es un caramelo de leche muy popular en Argentina.",
    ],
    [
      "Pastel de papas",
      "",
      "El pastel de papas es una deliciosa preparación argentina que combina capas de puré de papas con carne molida.",
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
  const [keyPlato, setKeyPlato] = useState(0);

  const handleclick = (key: number, estado: boolean) => {
    setShowFood(estado);
    setKeyPlato(key);
    console.log(entradas[key]);
  };

  return (
    <main className="">
      <div className="h-screen w-screen pb-[7px] bg-background overflow-x-hidden">
        {showFood ? (
            <div className="h-screen w-screen pb-[7px] bg-background_popup overflow-x-hidden ">
              <header className="flex w-screen top-0  h-[200px] overflow-hidden items-center">
                
                <div className=" h-fit w-fit relative  " id="FotoComida">
                  <img
                      src={entradas[keyPlato][1]}
                      alt=""
                      className="h-[100%] w-[100%] "
                  >
                  </img>
                  <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center z-10 bg-gradient-to-b from-black opacity-[0.55]"/>
                  <button onClick={()=>setShowFood(false)} className="absolute h-[25px] w-[25px] top-[50%] mt-[-24%] ml-2 z-20">
                    <img src="arrowWhite.svg" alt="" /></button>
                </div>
              </header>
                <div className="w-screen h-fit pb-4 bg-background overflow-scroll ">
                <h4 className="text pt-3 px-4 text-black">{entradas[keyPlato][0]}</h4>
                <p className="text pt-2 px-4 text-black leading-snug ">{entradas[keyPlato][2]}</p>
                <p className="text-black px-4 pt-2">3000$</p>
              </div>
              <div className="w-screen h-fit pb-4 bg-background overflow-scroll mt-7 relative">
                <h4 className="text-black pt-4 px-4 w-fit">Guarnicion</h4>
                <button className="h-[20px] w-[20px] absolute ml-[90%] pt-1 rotate-180">
                  <img src="arrow-up.svg" alt="" />
                </button>
                <h6 className="text-black pb-4 px-4 font-normal">Elija 1 opción</h6>
              </div> 

            </div>
        ) : (
          <>
            <header className="flex w-screen top-0  h-[164px] overflow-hidden justify-center items-center">
              <div className="container h-fit w-fit ">
                <img
                  src="/SolomiaFotoEntrada.jpeg"
                  alt=""
                  className="h-[100%] w-[100%] object-contain"
                />
              </div>
            </header>

            <div className="mt-0 w-full h-[40px] overflow-x-auto bg-buscador flex place-items-center drop-shadow-md">
              <a href="" className="pr-5 pl-5 text-black font-bold text-md">
                Hola
              </a>
              <a href="" className="pr-5 pl-5 text-black font-bold">
                Hola
              </a>
              <a href="" className="pr-5 pl-5 text-black font-bold">
                Hola
              </a>
              <a href="" className="pr-5 pl-5 text-black font-bold">
                Hola
              </a>
              <a href="" className="pr-5 pl-5 text-black font-bold">
                Hola
              </a>
              <a href="" className="pr-5 pl-5 text-black">
                Hola
              </a>
              <a href="" className="pr-5 pl-5 text-black">
                Hola
              </a>
              <a href="" className="pr-5 pl-5 text-black">
                Hola
              </a>
            </div>

            <h3 className="text-black text mt-4 ml-4 ">Entradas</h3>

            <div className="grid grid-cols-2 gap-x-2 justify-center m-auto w-[400px]">
              {entradas.map((comida, key) => (
                <div
                  onClick={(event) => handleclick(key, true)}
                  className="container m-2 h-fit content-center"
                  key={key}
                >
                  <div className="h-[105px] w-[150px] mx-2 mt-1 overflow-hidden ">
                    <img
                      src={comida[1]}
                      alt=""
                      className="rounded-lg h-fit w-fit"
                    />
                  </div>
                  <div className="pl-3 max-w-[160px] ">
                    <h5 className="pb-1 pt-1 text-black leading-snug overflow-hidden">
                      {comida[0]}
                    </h5>
                    <p className="text-black leading-snug pb-2 max-h- overflow-hidden text-ellipsis">
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
