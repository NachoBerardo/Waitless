import Image from 'next/image';

export default function Footer() {
    return(
        <footer className="bg-gray-500 w-screen h-1/6 fixed bottom-0">
            <button  className="translate-x-full">
                <Image 
                    src="/homeicon.jpg" 
                    alt='Icono casa'
                    width={50}
                    height={50}
                />
            </button>
        </footer>
    )
}