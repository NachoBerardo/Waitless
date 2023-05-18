import Image from 'next/image';

export default function Header() {
    return(
        <header className="flex w-screen fixed top-0 bg-opacity-100 " id="header">
            <button>
                <Image 
                    src="/homeicon.jpg" 
                    alt='Icono casa'
                    width={50}
                    height={50}
                />
            </button>
        </header>
    )
}