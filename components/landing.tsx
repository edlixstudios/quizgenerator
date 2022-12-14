import Header from "./shared/header";
import Image from "next/image";


export default function Landing(){
    return(
        <div className="overflow-hidden w-full h-screen p-4 flex flex-col items-center bg-gradient-to-tr from-indigo-600 to-violet-400 shadow-md" >
            <Header />
            <div className="flex-grow flex gap-12 justify-between flex-col h-full text-sky-50 text-center  items-center" >
                <h2 className=" font-bold text-2xl xl:text-5xl mt-32" >Quiz Generator by ealbrecht.dev</h2>
                <p className="text-center xl:text-2xl" >A small and effectiv Application for creating and showing Quizzes</p>
                <div className="flex gap-14" >
                    <button 
                    className=" bg-gradient-to-b text-sky-100 from-sky-400 to-sky-600 shadow-xl p-2 rounded font-bold transition-all xl:p-4 xl:text-2xl xl:hover:scale-105 xl:hover:from-sky-500 xl:hover:to-sky-700" 
                    ><a href="#feature" >Features</a></button>
                    
                    <button 
                    className="bg-gradient-to-b text-emerald-100 from-emerald-400 to-emerald-600 shadow-xl font-bold p-2 rounded transition-all xl:p-4 xl:text-2xl xl:hover:scale-105 xl:hover:from-emerald-500 xl:hover:to-emerald-700" 
                    ><a href="#download" >Download</a></button>
                </div>
            </div>
            <div className="flex-grow w-full h-full relative top-[25vh] " >
                <Image objectFit="contain" loading="lazy" layout="fill"  src={"/images/questions.png"} alt="Question Section" />
            </div>
        </div>
    )
}