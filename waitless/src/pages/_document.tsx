import { Html, Head, Main, NextScript } from 'next/document'
import  Footer  from './footer'
import  Header  from './header'

export default function Document() {
  return (
    <Html lang="en">
      <Header/>
      <Head/>
      <body className=""> 
        <Main/> 
        <NextScript />
      </body>
      <Footer/>
    </Html>
  )
}
