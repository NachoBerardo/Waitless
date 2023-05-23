import Image from 'next/image'
import { Inter } from 'next/font/google'
import  Footer  from '../components/footer'
import  Header  from '../components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className="w-screen h-screen bg-background ">
        <Header></Header>
        
        <div className="h-[100%] pb-[7%]">
          <div className="mt-2 w-fit h-[5%]">
            <a href="" className="pr-2 pl-2">Hola</a>
            <a href="" className="pr-2 pl-2">Hola</a>
            <a href="" className="pr-2 pl-2">Hola</a>
            <a href="" className="pr-2 pl-2">Hola</a>

          </div>
          <div className="justify-center m-auto mt-14 h-[15%] w-[85%] bg-div">
            <p>Hola que tal</p>
          </div>
        </div>

        <Footer></Footer>
      </main>
  )
}
