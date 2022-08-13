import Link from "next/link";
import { Suspense } from "react";



export default function Download(){
    return(
        <div id="download" className="w-full flex flex-col items-center gap-8 p-8 bg-gradient-to-tr from-indigo-600 to-violet-400" >
            <h2 className="text-4xl font-bold text-indigo-100 text-center" >Buy QuizGenerator by ealbrecht.dev</h2>
            <iframe src="https://itch.io/embed/1657976" width="552" height="167">
                <Link href="https://edlix-studios.itch.io/quiz-generator" >
                    <a>Quiz Generator by ealbrecht.dev</a>
                </Link>
            </iframe>
        </div>
    )
}