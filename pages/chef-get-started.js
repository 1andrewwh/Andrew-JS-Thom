import Head from 'next/head'
import Link from "next/link"
import Top from '../components/topnavigation'
import Bot from '../components/botnavigation'
import Profile from '../components/profileinfo'
import Bio from '../components/bio'
import ProfileButton from '../components/profilebutton'
import ActionButton from '../components/Button'
import Account from '../components/youraccount'
import Title from '../components/titles'
import Kitchen from '../components/yourkitchen'

let chefs = {
    chef1: "Curtis"
}

export default function GetStarted() {
    return (
        <>      
            <Head>
                <title>Chef Getting Started</title>
                {/* <Link href="https://fonts.cdnfonts.com/css/amazon-ember" rel="stylesheet"></Link>
                <Link rel="stylesheet" href="/styles"></Link> */}
            </Head>

            <Top link="/chef-private"/>
            <div class="flex justify-between my-7 items-center text-black">
                <p class="font-normal text-3xl ml-3.5">Hello, <span class="font-bold text-3xl">Chef {chefs.chef1}</span></p>
                <a href="#"><img class="pr-3.5" src="/profile.svg"/></a>
            </div>
            <div class="p-px bg-gray-300 mb-8"></div>
            <ActionButton link="/security" text="Get Started"/>
            <Title title="Your Account" more="See all"/>
            <Account />
            <div class="p-0.5 bg-gray-300 mt-5"></div>
            <Title title="Your Kitchens" more="See all"/>
            <Kitchen map="/kitchenmap.jpg" name={chefs.chef1} address={"San Gabriel 91337"}/>
            <div class="p-0.5 bg-gray-300 mt-5"></div>
            <Title title="Your Menus" more="See all" />
            <Bot />
        </>
    )
}
{/* <Link href="/" >Link</Link> */}
         {/* //


         //      <div class="p-0.5 bg-lightgray mt-5"></div>
         //      <div class="mt-4 mb-4 ml-3.5 flex justify-between items-center">
         //         <p class="text-black text-2xl font-bold">Your Menus</p>
         //         <p class="text-lg text-blue mr-3.5">See all</p>
         //      </div>
         //      <div class="ml-3.5 flex justify-start leading-none">
         //         <div class="text-black mb-px">
         //             <img src="imgs/menu1.png"/>
         //             <p class="text-lg font-medium mt-1">Chinese Cuisine</p>
         //             <p class="text-small">Seafood & Beef Bowl</p>
         //         </div>   
         //         <div class="text-black ml-2.5">
         //             <img src="imgs/menu2.png"/>
         //             <p class="text-lg font-medium mt-1">Japanese Cuisine</p>
         //             <p class="text-small">Sushi & Ramen</p>
         //         </div>
         //      </div>
         //      <p class="ml-3.5 mt-4 text-2xl text-blue">Manage</p>
         //      <div class="p-0.5 bg-lightgray mt-4"></div>
         //   </main> */}