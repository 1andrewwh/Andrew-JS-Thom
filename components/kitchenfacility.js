import {useState} from "react"
import Image from "next/image"
import Link from "next/Link"

let kitchen = [
    {spot: "/facility1.jpg"},
    {spot: "/facility2.jpg"},
    {spot: "/facility3.jpg"},
    {spot: "/facility4.jpg"}
  ]

export default function KitchenFacility({title, location, dist, info, ratings}) {
    function Kitchens({image}) {
       return(
            <Image 
            src={image}
            width={160}
            height={111}
            />
          )
       }
     return (   
        <>
            <p class="text-2xl text-black ml-3.5 font-bold">{title}</p>


            <div class="flex items-center whitespace-nowrap mt-[10] mb-1">
            <p class="text-teal-700 text-base ml-3.5 ">{location}</p>
            <p class="text-base ml-2 text-gray-500">{dist} mi</p>
            <div>
            <img class="ml-[58]" src="/stars.svg"/>
            </div>
            </div>


            <div class="flex justify-between ml-3.5 items-center" >
            <p class="text-gray-500 text-base">{info}</p>
            <p class="text-teal-700 text-base mr-3.5">({ratings})</p>
            </div>

            <div class="mt-2 overflow-scroll">
                <div class="mx-3.5 flex gap-2">
                    {kitchen.map(i =>     
                    <Kitchens image={i.spot}/>
                    )}
                </div>
            </div>
        </>
 )}


// export default function KitchenFacility({title, location, dist, info, ratings}) {
//     function Kitchens({image}) {
//         return (
//                 <Image 
//                 src={image}
//                 width={160}
//                 height={111}
//                 />
//                 )
//         }

//     return (
//         <>
//             <p class="text-2xl text-black ml-3.5 font-bold">{title}</p>


//             <div class="flex items-center whitespace-nowrap mt-[10] mb-1">
//             <p class="text-teal-700 text-base ml-3.5 ">{location}</p>
//             <p class="text-base ml-2 text-gray-500">{dist} mi</p>
//             <div>
//             <img class="ml-[58]" src="/stars.svg"/>
//             </div>
//             </div>


//             <div class="flex justify-between ml-3.5 items-center" >
//             <p class="text-gray-500 text-base">{info}</p>
//             <p class="text-teal-700 text-base mr-3.5">({ratings})</p>
//             </div>


//             <div class= "mt-2 overflow-scroll whitespace-nowrap">
//             <div class="mx-3.5 flex justify-start gap-2.5">
//             {/* <Image
//             src={image}
//             width={160}
//             height={111}
//             />    */}
//             <Kitchens />
//             </div>
//             </div>
//         </>
// )
// }
{/* <img src="/facility1.jpg"/>
<img src="/facility2.jpg"/>
<img src="/facility3.jpg"/>
<img src="/facility4.jpg"/> */}


// How make svgs link?
// <div class="bg-white sticky right-0 top-0 left-0 ">
// <div class="flex flex-row justify-between px-5">



// <img class="mt-[32]" src="/meals.svg"/>
// <img class="mt-[40]" src="/x.svg"/>
// </div>
// <div class="p-px bg-darkgreen mt-4"></div>
// </div>