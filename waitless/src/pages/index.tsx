import Image from 'next/image'
import { Inter } from 'next/font/google'
import  Footer  from '../components/footer'
import  Header  from '../components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className="w-screen h-screen">
        <Header></Header>

        <section className='container w-screen h-10'>

        </section>

        <Footer></Footer>
      </main>
  )
}
