import { ReactElement, useEffect, useState } from "react";
import {FaMagic, FaPuzzlePiece , FaFlagUsa} from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import Categories from "../assets/images/categories.png";
import Design from "../assets/images/design.png";
import No from "../assets/images/no.png";
import Q from "../assets/images/q.png";
import Questions from "../assets/images/questions.png";
import Quiz from "../assets/images/quiz.png";
import T from "../assets/images/t.png";
import Yes from "../assets/images/yes.png";

export default function Feature(){
    return(
        <div id="feature" className="w-full p-4 grid container mx-auto grid-cols-1 gap-4 xl:gap-8 " >
            <div className="xl:grid xl:grid-cols-3 gap-8" >
                <FeatureCard 
                icon={<FaMagic className="w-full h-full" />} 
                title="Easy and intuitiv to use" 
                text="QuizGenerator by ealbrecht.dev is easy and intuitiv to use. Everything is self explaining and autosaving. Dont need to be worry to save your quizzes"
                />
                <FeatureCard 
                icon={<FaPuzzlePiece className="w-full h-full" />} 
                title="Create Quizzes, mark as done and go" 
                text="Create as much quizzes as you want and teach your employees"
                />
                <FeatureCard 
                icon={<FaFlagUsa className="w-full h-full" />} 
                title="Multilanguages" 
                text="QuizGenerator is available in english and german"
                />
            </div>
            <div className="bg-slate-900/25 h-0.5 rounded-full drop-shadow-xl" />
            <div className="flex flex-col" >
                <h2 className="text-center text-4xl p-2 mb-16">Images</h2>
                <Carousel />
            </div>
        </div>
    )
}

interface IFeatureCard{
    icon: ReactElement;
    title: string;
    text: string;
}

function FeatureCard({icon, title,text}:IFeatureCard){
    return(
        <motion.div 
            whileHover={{y:-5}}
            className=" flex flex-col min-h-[310px] xl:gap-6 xl:max-h-[400px] xl:hover:shadow-2xl " >
            <div className="flex p-2 items-center w-full justify-between xl:h-24" >
                <div className="bg-rose-300 w-12 h-12 rounded-full flex justify-center items-center" >
                    <div className="bg-rose-400 w-5/6 h-5/6 rounded-full p-2 text-rose-50" >
                        {icon}
                    </div>
                </div>
                <h2 className="text-center w-3/4 mx-auto text-2xl text-rose-900" >{title}</h2>
            </div>
            <div className="leading-loose text-xl p-2" >
                {text}
            </div>
        </motion.div>
    )
}

function Carousel(){
    return(
        <div className=" flex-grow" >
            <div className="flex flex-col xl:grid xl:grid-cols-3 xl:gap-4"  >
                <ImagePreview src={Categories} alt="Cat" />
                <ImagePreview src={Design} alt="Design"   />
                <ImagePreview src={No} alt="No"   />
                <ImagePreview src={Q} alt="Q"   />
                <ImagePreview src={Questions} alt="Questions"   />
                <ImagePreview src={Quiz} alt="Quiz"   />
                <ImagePreview src={T} alt="T"   />
                <ImagePreview src={Yes} alt="Yes"   />
            </div>
        </div>
    )
}


interface IImagePreview{
    src:StaticImageData;
    alt: string;
}

function ImagePreview({src,alt}:IImagePreview){
    return(
        <motion.div
            className=" transition-all drop-shadow-xl  rounded xl:hover:z-50 xl:hover:scale-150"
        >
            <Image src={src} alt={alt} />
        </motion.div>
    )
}