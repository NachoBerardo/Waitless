import Image from 'next/image';

export default function Footer() {
    return(
        <footer className= "flex w-screen h-1/6 fixed bottom-0 bg-caca content-center">
            <div className="flex min-w-full gap-24 justify-center place-items-center  ">
                <button className=" ">
                    <Image 
                        src="/homeicon.jpg" 
                        alt='Icono casa'
                        width={50}
                        height={50}
                    />
                </button>
                <button  className="">
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