import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import Top from '../components/topnavigation'
import Bot from '../components/botnavigation'
import Profile from '../components/profileinfo'
import Bio from '../components/bio'
import ProfileButton from '../components/profilebutton'
import ActionButton from '../components/Button'
import Account from '../components/youraccount'
import Title from '../components/titles'
import Kitchen from '../components/yourkitchen'
import Notifier from '../components/notification'
import Input from '../components/textinput'
import YellowButton from '../components/yellowbutton'


let alert = {
    image: "/gaurd.svg" ,
    message: "Your personal information is secure and protected by Amazon authorization"
}

export default function Security() {
    return (
        <>      
            {/* <Head>
                <title>Chef's Private View</title>
                <Link href="https://fonts.cdnfonts.com/css/amazon-ember" rel="stylesheet"></Link>
                <Link rel="stylesheet" href="styles.css"></Link>
            </Head> */}

            <Top link="/chef-private"/>

            <Notifier image={alert.image} message={alert.message} />
            <Title title="Payout Settings"/>

            <div class="p-px bg-gray-200 mb-3"></div>

            <Input text="Routing" />
            <Input 
                info="Account"
                message="Your account and routing number 
                is required for authorization in transacting payments"
            />

            <Image 
                src={"/check.jpg"}
                width={363}
                height={202}
                className="w-min-363 flex justify-center" // tried justifying img center
            />

            <Input 
                info="Social Security"
                message="SSN is to verify your background and is needed for transaction payments" 
            />


            <p class="font-bold text-lg mt-6">State Law Confirmation</p>
            <p class="text-base mt-1.5">I agree to the disclosure of the information being used for security purposes and identification for your payments to be transacted through customers.</p>

            <YellowButton text="Confirm" link="/chef-private"/>

            <Bot />
        </>
    )
}


{/* <Link href="/" >Link</Link> */}
{/* 










<img class="px-4 mt-1 mb-[25]" src="imgs/check.png"/>

<div class="form-control mb-7 mx-3.5 text-lg">
 <label class="mb-1 block font-bold">Enter social security number</label>
     <div class="flex justify-between inline">
         <input type="text" class="relative text-base border border-slate-400 block w-full pl-2 py-3 rounded-md text-gray-400 border-black" value="000000000"/>
         <img class="absolute right-7 mt-4 items-center"src="imgs/question.svg"/>
     </div>
<p class="text-sm mt-1">SSN is to verify your background and is needed for transaction payments</p>
</div> 

<div class="mx-3.5">
 <p class="font-bold text-lg">State Law Confirmation</p>
 <p class="text-base mt-2">I agree to the disclosure of the information being used for security purposes and identification for your payments to be transacted through customers.</p>
</div>

<a href="search-facilities.html" class="mt-4 mx-3.5 p-3.5 bg-yellow text-black text-sm block text-center text-base rounded-lg">
Confirm
</a> */}