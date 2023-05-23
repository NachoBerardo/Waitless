import Image from 'next/image';

export default function Header() {
    return(
        <header className="flex w-screen top-0 bg-opacity-100 bg-header">
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