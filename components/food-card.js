import {useState} from "react"
import Image from "next/image"




export default function Card({image, title, text}) {

    return (
    <>
    <div className="text-black mb-px">
        <Image  alt=""
            src={image}
            width={175}
            height={100}
        />    
        <p className="text-lg font-medium mt-1">{title}</p>
        <p className="text-small">{text}</p>
    </div>
    </>
    )
}
