import Image from 'next/image';

export default function Footer() {
    return(
        <footer className="bg-gray-500 w-screen h-1/6 fixed bottom-0">
            <div className="container min-w-full grid place-items-center">
                <button  className="flex flex-col gap-8">
                    <Image 
                        src="/homeicon.jpg" 
                        alt='Icono casa'
                        width={50}
                        height={50}
                    />
                </button>
                <button  className="flex flex-col gap-8 -translate-y-full">
                    <Image 
                        src="/table.png" 
                        alt='Icono mesa'
                        width={50}
                        height={50}
                    />
                </button>
            </div>
        </footer>
    )
}