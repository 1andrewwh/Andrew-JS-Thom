import {useState} from "react"
import Image from "next/image"
import AddButton from '../components/addbutton'
import Quantity from '../components/quantity'



export default function Ingredient({image, title, ratings, cost, costperlb, qty}) {
    const [selectedQty, setSelectedQty] = useState(1)
    return (
    <>
        <div className="mb-2 flex justify-start border border-gray-100">
            <div className="flex relative">
                <Image alt=""
                src={image}
                width={151}
                height={164}
                />
                <img className="absolute flex bottom-0 right-0" src="/ingredientarrow.svg"/>
            </div>
            <div className="grow mb-4 mr-4">
                <p className="mt-2 ml-2 text-sm whitespace-nowrap">{title}</p>
                <div className="mt-1.5 flex justify-start items-end gap-1">
                <div><img className="ml-2" src="/amazonstars.svg"/></div>
                <p className="text-xs font-light">{ratings}</p>
            </div>
            <div className="flex items-center gap-1">
                <div className="ml-2 flex inline items-start">
                    <p className="pt-0.5 text-sm">$</p>
                    <p className="text-2xl">{cost*selectedQty}</p>
                    <p className="pt-0.5 text-sm">99</p>
                </div>
                <p className="mt-0.5 text-sm font-light">(${costperlb}/lb)</p>
            </div>
            <div className="flex gap-2">
                {/* <Quantity/> */}
                <div className={"flex items-center"}>
                    <p className="ml-2 text-sm">Qty:</p>
                    <div >
                    <select name="numbers" onChange={(e)=>{setSelectedQty(e.target.value); console.log(e.target.value); }}>
                    {[1,2,3,4,5].map(i =>
                    <option key={i} value={i}>{i}</option>
                    )}
                    </select>
                    </div>
                </div>
            </div>
            <div className="flex justify-end"><AddButton text={"Add"}/></div>
            </div>
        </div>
    </>
    )
}

{/* {ingredients.map(i =>
    <Ingredient name={i.info}/>
)} */}
{/* <div className="flex">
<Image
src={image}
width={151}
height={164}
// style={{ height: '100%', width: '100%' }}
// layout="fill"
// objectFit="contain"
/>
<div>
<p >{title}</p>            
<p>${cost}</p>
<p>{amount}</p>
</div> */}



{/* <p className="ml-2 text-sm">Qty:</p>
<div className="py-2 bg-gray-100 w-[39] rounded-2xl text-sm h-[22px] flex justify-start items-center gap-1 border border-gray-300">
    <p className="pl-2 text-xs">{qty}</p>
    <img className="pr-2 mt-0.5" src="/darrow.svg"/>
</div> */}