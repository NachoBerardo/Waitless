import Image from 'next/image'
import { Inter } from 'next/font/google'
import  Footer  from '../components/footer'
import  Header  from '../components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className="w-screen h-screen ">
        <Header></Header>
        
        <div className="h-[100%] pb-[7%]">
          <div className="justify-center m-auto mt-5 h-[15%] w-[85%]">
            <p>Hola que tal</p>
          </div>
        </div>

        <Footer></Footer>
      </main>
  )
}
