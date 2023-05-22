import { Html, Head, Main, NextScript } from 'next/document'
import  Footer  from '../components/footer'
import  Header  from '../components/header'

export default function document() {
  return (
    <Html lang="en">
      <Head/>
      <body className="w-screen h-screen "> 
        <Main /> 
        <NextScript />
      </body> 
    </Html>
  )
}
