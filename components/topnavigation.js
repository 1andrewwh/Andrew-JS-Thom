import {useState} from "react"
import Image from "next/image"
import Link from "next/link"

export default function Top() {
    return (
        <>
            <div className="relative z-10 pt-6 bg-white sticky right-0 top-0 left-0 ">
                <div className="flex flex-row justify-between px-5">
                    <img className="mt-[40]" src="/barrow.svg"/>
                    <img className="mt-[32]" src="/amazonmeals.svg"/>
                    <img className="mt-[40]" src="/x.svg"/>
                </div>
                <div className="p-px bg-darkgreen mt-4"></div>
            </div>  
        </>

)
}


// How can i make svgs link?
// <div class="bg-white sticky right-0 top-0 left-0 ">
// <div class="flex flex-row justify-between px-5">



// <img class="mt-[32]" src="/meals.svg"/>
// <img class="mt-[40]" src="/x.svg"/>
// </div>
// <div class="p-px bg-darkgreen mt-4"></div>
// </div>