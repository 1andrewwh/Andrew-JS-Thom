import {useState} from "react"
import Image from "next/image"
import Link from "next/link"




export default function Bot() {
    return (
        <>
         <nav className="p-11 pb-8 pt-0 bg-white border-t border-gray-300 sticky bottom-0 left-0 right-0 flex justify-between text-center text-green text-xs">
            <a href="#">
                <div className="h-1 w-11 bg-transparent rounded-b mb-1.5"></div>
                <div><img className="my-1 inline"src="/navmanage.svg"/></div>
                <p>Manage</p>
            </a>
            
            <a href="#">
                <div className="h-1 w-11 bg-transparent rounded-b mb-1.5"></div>
                <div><img className="my-1 inline" src="/navme.svg" /></div>
                <p>Me</p>
            </a> 
            <a href="#">
                <div className="h-1 w-11 bg-green rounded-b mb-1.5"></div>
                <div><img className="my-1 inline" src="/navkitchen.svg" /></div>
                <p>Kitchen</p>
            </a>
            <a href="#">
                <div className="h-1 w-11 bg-transparent rounded-b mb-1.5"></div>
                <div><img className="my-1 inline" src="/navtasks.svg" /></div>
                <p>Tasks</p>
            </a>
         </nav>
        </>

)
}


