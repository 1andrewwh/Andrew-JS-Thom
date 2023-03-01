import {useState} from "react"
import Image from "next/image"
import Link from "next/link"




export default function Notifier({image, message}) {
    return (
        <>
        <div class="px-10 py-3 left-0 right-0 bg-yellow-300 flex justify-around text-sm gap-4">
        <Image 
            alt="icon"
            src={image}
            width={26}
            height={30}
            className="min-w-[26px]"
            objectFit="contain" 
        />
        <p>{message}</p>
        </div>
        </>
    )
}


