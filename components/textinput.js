import {useState} from "react"
import Image from "next/image"

export default function Input({text}) {
    return (   
    <>
        <div className="form-control mb-3.5 text-lg">
            <label className="mb-1 block font-bold">Enter {text} Number</label>
            <div className="flex justify-between inline">
                <input type="text" className="relative text-base border border-slate-400 block w-full pl-2 py-3 rounded-md text-gray-400 border-black" placeholder="000000000"/>
                <img className="absolute right-7 mt-4 items-center"src="/questions.svg"/>
            </div>
        </div> 
    </>
)}