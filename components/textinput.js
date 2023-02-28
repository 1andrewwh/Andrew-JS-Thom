import {useState} from "react"
import Image from "next/image"

export default function Input({text}) {
    return (   
    <>
        <div class="form-control mb-3.5 text-lg">
            <label class="mb-1 block font-bold">Enter {text} Number</label>
            <div class="flex justify-between inline">
                <input type="text" class="relative text-base border border-slate-400 block w-full pl-2 py-3 rounded-md text-gray-400 border-black" placeholder="000000000"/>
                <img class="absolute right-7 mt-4 items-center"src="/questions.svg"/>
            </div>
        </div> 
    </>
)}