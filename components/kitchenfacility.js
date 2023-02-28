import {useState} from "react"
import Image from "next/image"
import Link from "next/link"

let kitchen = [
    {spot: "/facility1.jpg"},
    {spot: "/facility2.jpg"},
    {spot: "/facility3.jpg"},
    {spot: "/facility4.jpg"},
    {spot: "/facility4.jpg"}

  ]

export default function KitchenFacility({title, location, dist, info, ratings}) {
    function Kitchens({image}) {
       return(
            <div className="w-[160px] h-[111px] relative">
                <Image alt=""
                src={image}
                width={160}
                height={111}
                className="min-w-[160px]"
                // layout="fill"
                objectFit="contain" 
                />
            </div>
          )
       }
     return (   
        <>
            <p className="text-2xl text-black font-bold">{title}</p>


            <div className="flex items-center whitespace-nowrap mt-[10] mb-1">
            <p className="text-teal-700 text-base">{location}</p>
            <p className="text-base ml-2 text-gray-500">{dist} mi</p>
            <div>
            <img className="ml-[58]" src="/stars.svg"/>
            </div>
            </div>


            <div className="flex justify-between items-center" >
            <p className="text-gray-500 text-base">{info}</p>
            <p className="text-teal-700 text-base mr-3.5">({ratings})</p>
            </div>

            <div className="mt-2 overflow-scroll">
                <div className="flex gap-2">
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
//                 <Image alt=""
//                 src={image}
//                 width={160}
//                 height={111}
//                 />
//                 )
//         }

//     return (
//         <>
//             <p className="text-2xl text-black ml-3.5 font-bold">{title}</p>


//             <div className="flex items-center whitespace-nowrap mt-[10] mb-1">
//             <p className="text-teal-700 text-base ml-3.5 ">{location}</p>
//             <p className="text-base ml-2 text-gray-500">{dist} mi</p>
//             <div>
//             <img className="ml-[58]" src="/stars.svg"/>
//             </div>
//             </div>


//             <div className="flex justify-between ml-3.5 items-center" >
//             <p className="text-gray-500 text-base">{info}</p>
//             <p className="text-teal-700 text-base mr-3.5">({ratings})</p>
//             </div>


//             <div className= "mt-2 overflow-scroll whitespace-nowrap">
//             <div className="mx-3.5 flex justify-start gap-2.5">
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
// <div className="bg-white sticky right-0 top-0 left-0 ">
// <div className="flex flex-row justify-between px-5">



// <img className="mt-[32]" src="/meals.svg"/>
// <img className="mt-[40]" src="/x.svg"/>
// </div>
// <div className="p-px bg-darkgreen mt-4"></div>
// </div>