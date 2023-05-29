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
            <div className="m-auto mt-2 ml-[5px] mr-[5px] h-[180px] w-[190px]">
              <Image 
                src="/provoleta.jpg" 
                alt='Provoleta'
                width={50}
                height={50}
              />
            </div>
            <div className="m-auto mt-2 ml-[5px] mr-[5px] h-[180px] w-[190px]">
              
            </div>
            
          </div>
        </div>

        <Footer></Footer>
      </main>
  )
}
