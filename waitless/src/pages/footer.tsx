import Image from 'next/image';

export default function Footer() {
    return(
        <footer className= "flex w-screen fixed bottom-0  content-center" id="footer">
            <div className="flex min-w-full gap-20 justify-center place-items-center">
                <button className="" id="footer_button"   >
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