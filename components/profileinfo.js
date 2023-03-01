import {useState} from "react"
import Image from "next/image"



  

export default function Profile({view, viewinfo, camera, profileimg, name, rate, edit }) {
    return (   
    <>
          <div class="relative">
        <a href="chef-public.html" class="items-center text-[13px] w-screen h-[33px] bg-orange-400 flex gap-1">
            <p class="ml-[11px]">{view}</p>
            <p class="text-blue">{viewinfo}</p>
        </a>
        <div class="relative bg-gray-200 h-[84px] w-screen">
            <Image 
                src={camera}
                width={28}
                height={22}
                className="drop-shadow-md absolute bottom-4 right-4 w-min-[28px]"
            />
      </div>        
    </div>

         <div class="absolute z-10 bg-white w-[112px] h-[112px] mt-[-50px] rounded-full flex items-center justify-center">
            <div class="w-[100px] h-[100px] rounded-full bg-gray-300 "></div>
            <Image
                src={profileimg}
                width={100}
                height={100}
                className="absolute mt-[-14]"
            />
            <Image 
                src={camera}
                width={28}
                height={22}
                className="drop-shadow-md absolute bottom-4 w-min-[28px]"
            />
        </div>

      <p class="ml-[117px] text-[24px] mt-2 mb-[28px]">Chef {name}</p>

     <div class="flex gap-2 items-center">
        <a href="#" class="bg-yellow-300 drop-shadow-sm py-[11px] px-[12px] rounded-md text-[13px]">{rate}</a>
        <a href="#" class="bg-white drop-shadow-sm py-[10px] px-3 rounded-md text-[13px] border border-gray-200">{edit}</a>
     </div>



    </>
)}
    //   <div class="relative">
    //     <a href="chef-public.html" 
    //     class="items-center text-[13px] w-screen h-[33] bg-orange-400 flex gap-1">
    //         <p class="ml-[11]">{view}</p>
    //         <p class="text-blue">{viewinfo}</p>
    //     </a>
    //     <div class="relative bg-gray-200 h-[84] w-screen">
    //         <img class="drop-shadow-md absolute bottom-4 right-4" src={camera}/>

    //   </div>     
    //   </div>

    //     <div    
    //     class="absolute z-10 bg-white w-[112] h-[112] mt-[-50] ml-[13] rounded-full flex items-center justify-center">
    //         <div class="w-[100] h-[100] rounded-full bg-gray-300 "></div>
    //         <img class="absolute mt-[-14]" src={profileimg}/>
    //         <img class="absolute bottom-4 drop-shadow-md" src={camera}/> 
    //     </div>
   
    //   <p class="ml-[130] text-[24px] mt-2 mb-[28]">Chef {name}</p>

    //  <div class="flex gap-2 items-center">
    //     <button href="#" class="bg-yellow-300 drop-shadow-sm py-[11] px-[12] rounded-md text-[13px]">{rate}</button>
    //     <a href="#" class="bg-white drop-shadow-sm py-[10] px-3 rounded-md text-[13px] border border-gray-200">{edit}</a>
    //  </div>