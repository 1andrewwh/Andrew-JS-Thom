import {useState} from "react"
import Image from "next/image"



  

export default function Bio({ balance, cooks, subscribers, meals, title, bio}) {
    return (   
    <>
<div class="text-[17px] mt-[15px] text-gray-500">
<p class="font-bold">Balance: ${balance}</p>
<p>{cooks} Cooks hired</p>
<p>Subscribers {subscribers} • Meals {meals}</p>
</div>

<div class="bg-gray-300 h-1.5 mt-[19px] -mx-5"></div>
<p class="mt-[19px] font-bold text-[22px]">{title}</p>
<p>{bio}</p>

<div class="bg-gray-300 h-1 mt-[18px] -mx-5"></div>



    </>
)}

