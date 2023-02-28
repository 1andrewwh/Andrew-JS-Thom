import {useState} from "react"
import Image from "next/image"

export default function Kitchen({map}) {
    return (
        <>
            <div class="text-black relative border-2 border-lightgray rounded-lg bg-inherit">
                <p class="text-black text-xl ml-4 mt-7">Curtis' Kitchen</p>
                <p class="ml-4 mb-7">Public • San Gabriel 91337</p>
                <img class="absolute top-4 right-4 border border-lightgray rounded-lg" src={map}/>
            </div>
        </>
    )}

        // <div class="text-black relative mx-3.5 border-2 border-lightgray rounded-lg bg-inherit">
        //     <p class="text-black text-xl ml-4 mt-7">Curtis' Kitchen</p>
        //     <p class="ml-4 mb-7">Public • San Gabriel 91337</p>
        //     <img class="absolute top-4 right-4 border-2 border-lightgray rounded-lg"/>
        // </div>