import {useState} from "react"
import Image from "next/image"




export default function Card({image, title, text}) {

    return (
    <>
    <div class="text-black mb-px">
        <Image
            src={image}
            width={175}
            height={100}
        />    
        <p class="text-lg font-medium mt-1">{title}</p>
        <p class="text-small">{text}</p>
    </div>
    </>
    )
}
