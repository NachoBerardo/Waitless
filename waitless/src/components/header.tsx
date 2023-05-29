import Image from 'next/image';

export default function Header() {
    return(
        <header className="flex w-screen top-0 bg-opacity-100 h-[140px] bg-center overflow-hidden">
            <div className='container object-contain overflow-hidden bg-center relative bg-footer'>
            <Image 
                    src="/SolomiaFotoEntrada.jpeg" 
                    alt='Icono casa'
                    fill={true}
                    style={{objectFit: "contain", width: '100%', height: '100%'}}
                />
            </div>
        </header>
    )
}