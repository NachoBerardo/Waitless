import Image from 'next/image'
import { Inter } from 'next/font/google'
import  Footer  from '../components/footer'
import  Header  from '../components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className="w-screen h-screen bg-background">
        <div className="h-full pb-[7px] bg-background overflow-x-hidden">

          <header className="flex w-screen top-0 bg-opacity-100 h-[140px] overflow-hidden">
              <div className='overflow-hidden h-fit w-fit'>
                  <img src="/SolomiaFotoEntrada.jpeg" alt="" className=""/>
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

          <h3 className='text-black text mt-2'>Entradas</h3>

          <div className='flex content-around flex-wrap justify-evenly'>
            <div className="w-1/2 p-2 flex justify-center min-w-fit">
              <div className="container mt-2 mx-[5px] mb-4 h-fit w-[173px] bg-div rounded-lg"> 
                <div className="h-fit w-fit mx-2 mt-2 overflow-hidden ">
                  <img src="/provoleta.jpg" alt="" className='rounded-lg'/>
                </div>
                <div className="pl-3">
                  <h5 className="pb-2 pt-1 text-black leading-snug">Provoleta a la provenzal </h5>
                  <p className='text-black leading-snug pb-2'>Una rica provoleta del leche de vaca y mucho texto para rellenar</p>
                </div>
              </div>
            </div>

            <div className="w-1/2 p-2 flex justify-center min-w-fit">
              <div className="container mt-2 mx-[5px] mb-4 h-fit w-[173px] bg-div rounded-lg"> 
                <div className="h-fit w-fit mx-2 mt-2 overflow-hidden ">
                  <img src="/provoleta.jpg" alt="" className='rounded-lg'/>
                </div>
                <div className="pl-3">
                  <h5 className="pb-2 pt-1 text-black leading-snug">Provoleta a la provenzal </h5>
                  <p className='text-black leading-snug pb-2'>Una rica provoleta del leche de vaca y mucho texto para rellenar</p>
                </div>
              </div>
            </div>

            <div className="w-1/2 p-2 flex justify-center min-w-fit">
              <div className="container mt-2 mx-[5px] mb-4 h-fit w-[173px] bg-div rounded-lg"> 
                <div className="h-fit w-fit mx-2 mt-2 overflow-hidden ">
                  <img src="/provoleta.jpg" alt="" className='rounded-lg'/>
                </div>
                <div className="pl-3">
                  <h5 className="pb-2 pt-1 text-black leading-snug">Provoleta a la provenzal </h5>
                  <p className='text-black leading-snug pb-2'>Una rica provoleta del leche de vaca y mucho texto para rellenar</p>
                </div>
              </div>
            </div>

            <div className="w-1/2 p-2 flex justify-center min-w-fit">
              <div className="container mt-2 mx-[5px] mb-4 h-fit w-[173px] bg-div rounded-lg"> 
                <div className="h-fit w-fit mx-2 mt-2 overflow-hidden ">
                  <img src="/provoleta.jpg" alt="" className='rounded-lg'/>
                </div>
                <div className="pl-3">
                  <h5 className="pb-2 pt-1 text-black leading-snug">Provoleta a la provenzal </h5>
                  <p className='text-black leading-snug pb-2'>Una rica provoleta del leche de vaca y mucho texto para rellenar</p>
                </div>
              </div>
            </div>

            <div className="w-1/2 p-2 flex justify-center min-w-fit">
              <div className="container mt-2 mx-[5px] mb-4 h-fit w-[173px] bg-div rounded-lg"> 
                <div className="h-fit w-fit mx-2 mt-2 overflow-hidden ">
                  <img src="/provoleta.jpg" alt="" className='rounded-lg'/>
                </div>
                <div className="pl-3">
                  <h5 className="pb-2 pt-1 text-black leading-snug">Provoleta a la provenzal </h5>
                  <p className='text-black leading-snug pb-2'>Una rica provoleta del leche de vaca y mucho texto para rellenar</p>
                </div>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </main>
  )
}
