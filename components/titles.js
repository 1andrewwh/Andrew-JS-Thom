import {useState} from "react"
import Image from "next/image"



  

export default function Title({title, more}) {
  return (   
    <>
      <div class="mt-8 mb-4 ml-3.5 flex justify-between items-center">
        <p class="text-black text-2xl font-bold">{title}</p>
        <p class="text-lg text-teal-700 mr-3.5">{more}</p>
        </div>
    </>
)}