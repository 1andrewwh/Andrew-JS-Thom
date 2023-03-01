import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image"
import styles from '../styles/Home.module.css';

// import H1 from '../comp}onents/h1'
// import H1 from '../components/h1'
import ActionButton from '../components/Button'
import Card from '../components/food-card'
import Kitchen from '../components/yourkitchen'
import Account from '../components/youraccount'
import Top from '../components/topnavigation'
import Ingredient from '../components/addingredient'
import Input from '../components/textinput'
import YellowButton from '../components/yellowbutton'
import KitchenFacility from '../components/kitchenfacility'
import Bot from '../components/botnavigation'
import Profile from '../components/profileinfo'
import Bio from '../components/bio'
import ProfileButton from '../components/profilebutton'
import Title from '../components/titles'


// let information = [
//   {info: "Payments"},
//   {info: "Subscribers"},
//   {info: "Balance"}
// ]

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


let ingredient = {
  title: "Yellow Onions, 3 lbs ",
  ratings: "6498",
  cost: "11",
  costperlb: "3.22",
  qty: "2" 
}

let context = [{
  title: "Chinese Cuisine",
  text: "Seafood & Beef Bowl",
}]

let facility = {
  title: "LA East Kitchen Facility",
  location: "San Gabriel Blvd 91833",
  dist: "0.8",
  info: "8 kitchen spots available",
  ratings: "13",
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Top link="/chef-private" />
        <Profile 
          view={userinfo.view}
          viewinfo={userinfo.viewinfo}
          camera={userinfo.camera}
          profileimg={userinfo.profileimg}
          name={userinfo.name} 
          rate={userinfo.rate}
          edit={userinfo.edit}
        />

        <Bio balance={chefinfo.balance}
          cooks={chefinfo.cooks}
          subscribers={chefinfo.subscribers}
          meals={chefinfo.meals}
          title={chefinfo.title}
          bio={chefinfo.bio}
        />

        <ProfileButton text="Payout Settings"/>

        <ProfileButton text="Switch Profiles"/>

        <Ingredient 
          image="/yellowonions.jpg" 
          title={ingredient.title} 
          ratings={ingredient.ratings} 
          cost={ingredient.cost} 
          costperlb={ingredient.costperlb} 
          qty={ingredient.qty}
        />

        <Title title="Title" more="See all" /> 

        <Kitchen map="/kitchenmap.jpg" name={"Curtis"} address={"San Gabriel 91337"}/>

        {context.map(i =>
        <Card image="/menu2.jpg" title={i.title} text={i.text}/>
        )}

        <Input info="Social Security"/>

        <ActionButton text="Name your Kitchen" link="/security" />

        <YellowButton text="Confirm" link="/chef-private"/>

        <Account/>
        
        <KitchenFacility 
          title={facility.title} 
          location={facility.location} 
          dist={facility.dist} 
          info={facility.info} 
          ratings={facility.ratings}
        />

        <Bot />

      </main>
    </>
  )
}
