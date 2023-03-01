import {useState} from "react"
import Image from "next/image"




export default function Profile({balance, cooks, subscribers, meals, title, bio}) {
    return (   
    <>
        <div class="text-[17px] mt-[15] text-gray-500">
        <p class="font-bold">{balance}</p>
        <p>{cooks} Cooks hired</p>
        <p>Subscribers  {subscribers} • Meals {meals}</p>
        </div>

        <div class="ml-[-14] bg-gray-300 h-1.5 w-screen mt-[19]"></div>
        <p class="mt-[19] font-bold text-[22px]">{title}</p>
        <p>{bio}</p>

        <div class="ml-[-14] bg-gray-300 h-1 w-screen mt-[18]"></div>
    </>
)}


