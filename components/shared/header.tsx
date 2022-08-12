import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


export default function Header(){
    return(
        <div className="hidden w-full p-4 text-sky-50 items-center justify-end xl:h-[10vh] xl:flex xl:font-bold" >
            <div className=" flex justify-end gap-16" >
                <LinkButton name="Home" to="#home" />
                <LinkButton name="Features" to="#feature" />
                <LinkButton name="Download" to="#download" />
                <LinkButton name="About" to="https://ealbrecht.dev" />
            </div>
        </div> 
    )
}

interface ILinkButton{
    name: string;
    to: string;
}

function LinkButton({name,to}:ILinkButton){
    return(
        <motion.div
            whileHover={{y:-3}}
            className="p-2"
        >
            <Link href={to} >
                <a>{name}</a>
            </Link>
        </motion.div>
    )
}