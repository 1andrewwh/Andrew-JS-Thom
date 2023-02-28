import {useState} from "react"
import Image from "next/image"




let information = [
   {info: "Payments"},
   {info: "Subscribers"},
   {info: "Balance"}
 ]


export default function Account() {
   function Info({text}) {
      return(
         <a href="#" class="border-2 border-lightgray bg-inherit text-black text-xl inline rounded-lg px-3 py-4">Your {text}</a>
         )
      }
    return (   
      <>
         <div class="mb-5 overflow-scroll whitespace-nowrap">
            <div class="text-black px-3.5 flex justify-start gap-2 w-min">
               {information.map(i => 
                  <Info text={i.info}/>
                  )}
            </div>
         </div>
         {/* {information.map(inform =>
          <Account name={inform.info}/>
          )} */}
      </>
)}


// function Button({text}){
//    return (
//       for(let i=0; i < 3;i++) {
//          <a href="#" class=" border-2 border-lightgray bg-inherit text-black text-xl inline rounded-lg px-3 py-4">Your {text}</a>
//       }
//    )
// }

         // <div class="mb-5 overflow-scroll whitespace-nowrap">
         //    <div class="text-black px-3.5 flex justify-start gap-2 w-min">
         //    <a href="#" class="border-2 border-lightgray bg-inherit text-black text-xl inline rounded-lg px-3 py-4">Your Payments</a>
         //    <a href="#" class="border-2 border-lightgray bg-inherit text-black text-xl inline rounded-lg px-3 py-4">Your Subscribers</a>
         //    <a href="#" class=" border-2 border-lightgray bg-inherit text-black text-xl inline rounded-lg px-3 py-4">Your Subscribers</a>
         //    </div>
         // </div>





         // <div className={'overflow-scroll mb-5'}>
         //    <div className={'gap-2 w-min px-3.5 flex justify-start'}>
         //       <button className={'border-2 border-gray-400 bg-inherit text-xl inline rounded-lg px-3 py-4'}>
         //          {name}
         //       </button>
         //    </div>   
         // </div>