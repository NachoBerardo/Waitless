import Image from 'next/image'
import { Inter } from 'next/font/google'
import  Footer  from '../components/footer'
import  Header  from '../components/header'
import { type } from 'os'

const inter = Inter({ subsets: ['latin'] })
type entradas = [string, string, string] 

export default function Menu() {
  const entradas = [
    ['Provoleta', '/provoleta.jpg', 'Unaricaprovoletadelechedevacaymuchotextopararellenaraaaaa'],
    ['Asado', '/provoleta.jpg', 'El asado argentino es una tradicional preparación de carne a la parrilla.'],
    ['Empanadas', '/provoleta.jpg', 'Las empanadas argentinas son deliciosos pasteles rellenos de carne, pollo, verduras o queso.'],
    ['Milanesa', '/provoleta.jpg', 'La milanesa es un plato argentino hecho a base de carne empanada y frita.'],
    ['Locro', '/provoleta.jpg', 'El locro es un guiso típico argentino que contiene maíz, porotos, carne de cerdo y verduras.'],
    ['Matambre', '', 'El matambre es un corte de carne argentino relleno y enrollado.'],
    ['Humita', '', 'La humita es una preparación típica argentina a base de choclo (maíz tierno) y condimentos.'],
    ['Ñoquis', '', 'Los ñoquis son una pasta de papa típica de Argentina, que se suele comer los días 29 de cada mes.'],
    ['Dulce de leche', '', 'El dulce de leche es un caramelo de leche muy popular en Argentina.'],
    ['Pastel de papas', '', 'El pastel de papas es una deliciosa preparación argentina que combina capas de puré de papas con carne molida.'],  
];

const MaxLength = (description:string, MaxCharcters:number):string => {
  if (description.length<=MaxCharcters){
    return description
  }
  let descrptionShort = description.substring(0, MaxCharcters);
  const LastSpace = descrptionShort.lastIndexOf(' ');

  if(LastSpace !== -1){
    descrptionShort = descrptionShort.substring(0, LastSpace);
  }
  else{
    return descrptionShort 
  }

  return descrptionShort + ' ...'
}

  return (
      <main className="">
        <div className="h-full pb-[7px] bg-background overflow-x-hidden">

          <header className="flex w-screen top-0 bg-opacity-100 h-[140px] overflow-hidden">
              <div className='container overflow-hidden h-full w-full'>
                  <img src="/SolomiaFotoEntrada.jpeg" alt="" className="h-[100%] w-[100%] object-contain"/>
              </div>
          </header>
          
          <div className="mt-0 w-full h-[5%] overflow-x-auto bg-buscador flex place-items-center ">
            <a href="" className="pr-4 pl-4 text-black">Hola</a>
            <a href="" className="pr-4 pl-4 text-black">Hola</a>
            <a href="" className="pr-4 pl-4 text-black">Hola</a>
            <a href="" className="pr-4 pl-4 text-black">Hola</a>
            <a href="" className="pr-4 pl-4 text-black">Hola</a>
            <a href="" className="pr-4 pl-4 text-black">Hola</a>
            <a href="" className="pr-4 pl-4 text-black">Hola</a>
            <a href="" className="pr-4 pl-4 text-black">Hola</a>
          </div>

          <h3 className='text-black text mt-2 ml-1 '>Entradas</h3>
          <div className='grid grid-cols-2 gap-x-4 justify-center'>
            {entradas.map((comida, index) =>(                

              <div className="container m-2 h-fit content-center" key={index}> 
                <div className="h-[105px] w-[150px] mx-2 mt-2 overflow-hidden ">
                  <img src={comida[1]} alt="" className='rounded-lg h-fit w-fit'/>
                </div>
                <div className="pl-3 max-w-[160px] ">
                  <h5 className="pb-1 pt-1 text-black leading-snug overflow-hidden">{comida[0]}</h5>
                  <p className='text-black leading-snug pb-2 max-h- overflow-hidden text-ellipsis'>{MaxLength(comida[2], 50)}</p>
                </div>
              </div>

            ))}
            
            {/*   <div className='grid grid-cols-2 gap-x-1'>
            {entradas.map((comida, index) =>(                

              <div className="container m-auto h-fit w-[173px]" key={index}> 
                <div className="h-[105px] w-[150px] mx-2 mt-2 overflow-hidden ">
                  <img src={comida[1]} alt="" className='rounded-lg h-fit w-fit'/>
                </div>
                <div className="pl-3 max-w-fit ">
                  <h5 className="pb-1 pt-1 text-black leading-snug">{comida[0]}</h5>
                  <p className='text-black leading-snug pb-2 max-l overflow-hidden text-ellipsis'>{MaxLength(comida[2], 50)}</p>
                </div>
              </div>
 */}
          

          </div>
          <Footer></Footer>
        </div>
      </main>
      
  )
}
