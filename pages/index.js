import Head from 'next/head';
import Link from 'next/Link';
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


// let information = [
//   {info: "Payments"},
//   {info: "Subscribers"},
//   {info: "Balance"}
// ]



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

let facility = [{
  title: "LA East Kitchen Facility",
  location: "San Gabriel Blvd 91833",
  dist: "0.8",
  info: "8 kitchen spots available",
  ratings: "13",
}]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
      <Top />
      <Ingredient image="/yellowonions.jpg" title={ingredient.title} ratings={ingredient.ratings} cost={ingredient.cost} costperlb={ingredient.costperlb} qty={ingredient.qty}/>


        <Kitchen map="/kitchenmap.jpg"/>

        {context.map(i =>
        <Card image="/menu2.jpg" title={i.title} text={i.text}/>
            )}

        <Input text="Social Security"/>

        <ActionButton text="Name your Kitchen"/>

        <YellowButton text="Confirm" />
        <Account/>
        
        {facility.map(i => 
        <KitchenFacility image="/facility1.jpg" title={i.title} location={i.location} dist={i.dist} info={i.info} ratings={i.ratings}/>
        )}

      <Bot />
      </main>
 
    </div>
  )
}
