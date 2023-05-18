import { Html, Head, Main, NextScript } from 'next/document'
import  Footer  from './footer'
import  Header  from './header'

export default function document() {
  return (
    <Html lang="en">
      <Header/>
      <body className="w-screen h-screen"> 
        <Main /> 
        <div className="bg-footer"></div>
        <NextScript />
      </body>
      <Head />
      <Footer/>
    </Html>
  )
}
