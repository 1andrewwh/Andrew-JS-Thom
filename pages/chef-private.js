import Head from 'next/head';
import Link from "next/link"
import Top from '../components/topnavigation'
import Profile from '../components/profileinfo'
import Bio from '../components/bio'
import ProfileButton from '../components/profilebutton'
import Bot from '../components/botnavigation'

let userinfo = {
    view: "This is your private view.",
    viewinfo: "See what others see",
    camera: "/camerax4.png",
    profileimg: "/accprofile.svg",
    name: "Curtis",
    rate: "Create Review",
    edit: "Edit your profile"
  }
  
  let chefinfo = {
    balance: "30",
    cooks: 0,
    subscribers: 0,
    meals: 0,
    title: "Biography",
    bio: "With 12 years of experience, professional \
    quality work elegantly hand crafted just for you."
  }


export default function ChefPrivate() {
    return (
        <>
            <Head>
                <title>Chef's Private View</title>
            </Head>

            <Top link="/chef-get-started"/>
            <Profile 
                view={userinfo.view}
                viewinfo={userinfo.viewinfo}
                camera={userinfo.camera}
                profileimg={userinfo.profileimg}
                name={userinfo.name} 
                rate={userinfo.rate}
                edit={userinfo.edit}
            />
            <Bio 
                balance={chefinfo.balance}
                cooks={chefinfo.cooks}
                subscribers={chefinfo.subscribers}
                meals={chefinfo.meals}
                title={chefinfo.title}
                bio={chefinfo.bio}
            />
            <ProfileButton text="Payout Settings"/>
            <ProfileButton text="Switch Profiles"/>
            <Bot />
        </>
    )
}