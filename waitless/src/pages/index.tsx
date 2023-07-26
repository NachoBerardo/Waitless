import Image from "next/image";
import { Inter } from "next/font/google";
import { type } from "os";
import { useState } from "react";
import ScrollBar from "../components/scrollbar";
import HeaderMenu from "../components/headerMenu";
import PopUp from "../components/PopUp";
import FooterMenu from "../components/footerMenu";
import BtnSumarRestar2 from "../components/btnSumarRestar2";

const inter = Inter({ subsets: ["latin"] });

export default function Menu() {
  const entradas = [
    [
      "Provoleta",
      "/provoleta.jpg",
      "Deliciosa provoleta de leche de vaca fundida, acompañada de sabrosos condimentos",
      "2234",
    ],
    [
      "Empanadas",
      "/empanada.jpg",
      "Deliciosas empanadas argentinas rellenas de carne, pollo, verduras o queso, horneadas hasta la perfección",
      "8113",
    ],
    [
      "Humita",
      "/Humitas.jpg",
      "Sabrosa humita argentina a base de choclo (maíz tierno) y condimentos, acompañada de pan casero",
      "5296",
    ],
    [
      "Pastel de papas",
      "/pasteldepapa.jpg",
      "Nuestro suculento pastel de papas argentino, capas de puré de papas con carne molida y gratinado al horno",
      "2754",
    ],
  ];

  const principales = [
    [
      "Asado",
      "/asado.jpg",
      "El exquisito asado argentino, preparado a la perfección en nuestra parrilla",
      "4675",
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
      "/provoleta.jpg",
      "Exquisito matambre argentino relleno y enrollado, servido con guarnición de temporada",
      "4261",
    ],
    [
      "Pastel de papas",
      "/provoleta.jpg",
      "Nuestro suculento pastel de papas argentino, capas de puré de papas con carne molida y gratinado al horno",
      "2754",
    ],
  ];

  const postres = [
    ["Dulce de Leche", "/dulcedeleche.jpeg", "dulce de leche", "300"],
    ["Flan", "", "Mixto o bala", "1000"],
  ];
  const combinedArray = [entradas, principales, postres];

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

  const [showPopUP, setShowPopUP] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [showPedido, setShowPedido] = useState(false);
  const [keyPlato, setKeyPlato] = useState(0);
  const [arrayUsed, setarrayUsed] = useState(0);

  const handleclick = (key: number, estado: boolean, array: number) => {
    setShowPopUP(estado);
    setShowMenu(!estado)
    setKeyPlato(key);
    setarrayUsed(array);
  };

  const handleClickArrowBack = (pedido:boolean, Menu: boolean) =>{
    setShowPedido(pedido);
    setShowMenu(Menu);
    var a = document.getElementById("div1");
    var distancia = a?.offsetTop;
    console.log(distancia);
  }

  return (
    <main className="">
      <div className="h-screen w-screen pb-[7px] bg-background overflow-x-hidden no-scrollbar" id="general">
        {showPopUP ? (
          <PopUp
            combinedArray={combinedArray}
            arrayUsed={arrayUsed}
            keyPlato={keyPlato}
            setShowPopUP={setShowPopUP}
            setShowMenu={setShowMenu}
          ></PopUp>
        ) : (<></>)}
        {showMenu ? (
          <>
            <HeaderMenu />
            <ScrollBar />

            <h3 className="text-black text mt-4 ml-4" id="entradas">
              Entradas
            </h3>
            <div className="grid grid-cols-2 gap-x-2 justify-center m-auto w-[360px]" id="div1">
              {combinedArray[0].map((comida, key) => (
                <div
                  onClick={(event) => handleclick(key, true, 0)}
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
            <h3 className="text-black text mt-4 ml-4" id="principales" >
              Platos principales
            </h3>
            <div className="grid grid-cols-2 gap-x-2 justify-center m-auto w-[360px]">
              {combinedArray[1].map((comida, key) => (
                <div
                  onClick={(event) => handleclick(key, true, 1)}
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
            <h3 className="text-black text mt-4 ml-4" id="postres">
              Postres
            </h3>
            <div className="grid grid-cols-2 gap-x-2 justify-center m-auto w-[360px]">
              {combinedArray[2].map((comida, key) => (
                <div
                  onClick={(event) => handleclick(key, true, 2)}
                  className="container m-2 h-fit content-center pb-28"
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
            <FooterMenu setShowPedido={setShowPedido} setShowMenu={setShowMenu} txtBoton="Ver Pedido"/>
          </>
        ) : (<></>)}
        {showPedido ? (
          <>
          <div className="h-screen w-screen pb-[7px] bg-white overflow-x-hidden no-scrollbar">
            <header className="top-0 w-full h-[67px] flex items-center justify-center bg-white drop-shadow-md relative" >
              <h3 className="font-bold text-black">Pedido de tu mesa</h3>
                <button className=" absolute left-0 ml-4 h-[25px] w-[25px] " onClick={(event) => handleClickArrowBack(false, true)}>
                  <img src="arrowBlack.svg" alt="" className="h-full w-full" />
                </button>
            </header>
            <div className="h-full w-full">
              <div className="w-full h-fit ">
                <div className=" flex mt-9">
                  <div className="relative w-[100%] h-6">
                    <hr className="bg-LineaVerdePedido h-[4px] w-full absolute bottom-[35%]" />
                  </div>
                  <h4 className="text-LineaVerdePedido px-2">Gimena</h4>
                  <div className="relative w-[100%] h-6">
                    <hr className="bg-LineaVerdePedido h-[4px] w-full absolute bottom-[35%]" />
                  </div>
                </div>
                <div className="w-fit h-fit grid grid-cols-2">
                  <div>
                    <h3 className="text-black pl-14 pt-6 overflow-hidden inline-flex"> Papa al horno</h3>
                    <p className="pl-14 text-letraGris">aaaaaaaaaaaaaaaaaaa</p>
                    <p className="pl-14 text-letraGrisOscuro pt-1 pb-4">500$</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <BtnSumarRestar2></BtnSumarRestar2>
                  </div>
                </div>
                <div className="w-full h-fit flex justify-center">
                  <hr className="border-b bg-LineaPedido w-[100%] h-px mb-4 mx-7"/>
                </div>

                <div className="w-fit h-fit grid grid-cols-2">
                  <div>
                    <h3 className="text-black pl-14 pt-6 overflow-hidden inline-flex"> Pastel de papa</h3>
                    <p className="pl-14 text-letraGris">bbbbbbbbbbbbb</p>
                    <p className="pl-14 text-letraGrisOscuro pt-1 pb-4">1500$</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <BtnSumarRestar2></BtnSumarRestar2>
                  </div>
                </div>
                <div className="w-full h-fit flex justify-center">
                  <hr className="border-b bg-LineaPedido w-[100%] h-px mb-4 mx-7"/>
                </div>

                {/* separadooooooor */}

                <div className=" flex mt-9">
                  <div className="relative w-[100%] h-6">
                    <hr className="bg-populetter h-[4px] w-full absolute bottom-[35%]" />
                  </div>
                  <h4 className="text-populetter px-2">Romina</h4>
                  <div className="relative w-[100%] h-6">
                    <hr className="bg-populetter h-[4px] w-full absolute bottom-[35%]" />
                  </div>
                </div>
                <div className="w-fit h-fit grid grid-cols-2">
                  <div>
                    <h3 className="text-black pl-14 pt-6 overflow-hidden inline-flex">Calabaza</h3>
                    <p className="pl-14 text-letraGris">aaaaaaaaaaaaaaaaaaaaa</p>
                    <p className="pl-14 text-letraGrisOscuro pt-1 pb-4">500$</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <BtnSumarRestar2></BtnSumarRestar2>
                  </div>
                </div>
                <div className="w-full h-fit flex justify-center">
                  <hr className="border-b bg-LineaPedido w-[100%] h-px mb-4 mx-7"/>
                </div>

                <div className="w-fit h-fit grid grid-cols-2">
                  <div>
                    <h3 className="text-black pl-14 pt-6 overflow-hidden inline-flex"> Milanesa</h3>
                    <p className="pl-14 text-letraGris">cccccccccccccccccccccc</p>
                    <p className="pl-14 text-letraGrisOscuro pt-1 pb-4">20000$</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <BtnSumarRestar2></BtnSumarRestar2>
                  </div>
                </div>
                <div className="w-full h-fit flex justify-center">
                  <hr className="border-b bg-LineaPedido w-[100%] h-px mb-4 mx-7"/>
                </div>
                
              </div>
            </div>
            <FooterMenu setShowPedido={setShowMenu} setShowMenu={setShowPedido} txtBoton="Enviar Pedido"/>
          </div>
        </>
        ) : (<></>)}
      </div>
    </main>
  );
}
