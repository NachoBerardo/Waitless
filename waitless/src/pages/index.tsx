import Image from 'next/image'
import { Inter } from 'next/font/google'
import  Footer  from '../components/footer'
import  Header  from '../components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className="w-screen h-screen bg-background ">
        <Header></Header>
        
        <div className="h-full pb-[7px] bg-background overflow-x-hidden">
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

          <h1 className='text-black text mt-2'>Entradas</h1>

          <div className='flex content-around justify-center '>
            <div className="container m-auto mt-2 ml-[5px] mr-[5px] h-fit w-[190px] justify-center flex-col bg-div rounded-lg"> 
              <div className="h-fit w-fit m-2 overflow-hidden ">
                 <img src="/provoleta.jpg" alt="" className='rounded-lg'/>
              </div>
              <div className="p-3">
                <h3 className="pb-4 text-black">Provoleta a la provenzal </h3>
                <p className='text-black'>Una rica provoleta del leche de vaca y mucho texto para rellenar</p>
              </div>
            </div>
            <div className="m-auto mt-2 ml-[5px] mr-[5px] h-[200px] w-[190px]">
              
            </div>
            
          </div>
        </div>

        <Footer></Footer>
      </main>
  )
}
