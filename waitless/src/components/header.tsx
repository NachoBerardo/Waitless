import Image from 'next/image';

export default function Header() {
    return(
        <header className="flex w-screen top-0 bg-opacity-100 h-[140px] bg-center overflow-hidden">
            <div className='container object-contain overflow-hidden bg-center relative bg-footer'>
            <Image 
                    src="/SolomiaLogo.png" 
                    alt='Icono casa'
                    fill={true}
                    
                />
            </div>
        </header>
    )
}