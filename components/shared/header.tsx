import Image from "next/image";
import Link from "next/link";



export default function Header(){
    return(
        <div id="home" className="hidden w-screen p-4 text-sky-50 items-center justify-end xl:h-[10vh] xl:flex xl:font-bold" >
            {/* <div className="flex items-center gap-4" >
                <div className="text-3xl " >Quiz Generator</div>
                <div className="bg-gradient-to-t from-white" >
                    <Image src={"/images/icon.png"} alt="Logo" width={64} height={64} />
                </div>
            </div> */}
            <div className=" flex justify-end gap-16" >
                <Link href={"#home"} >
                    <a>Home</a>
                </Link>
                <div>
                    Rest
                </div>
                <div>
                    Rest
                </div>
                <div>
                    Rest
                </div>
            </div>
        </div> 
    )
}