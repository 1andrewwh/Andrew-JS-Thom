import {useState} from "react"

export default function ProfileButton({text}) {
    const [isActive, setIsActive] = useState(false)

    function activeHandler() {
        setIsActive(!isActive)
    }
    return (
    <button 
        onClick={()=>activeHandler()} 
        className={`w-full mt-5 text-black text-[20px] block text-center rounded-lg p-4 border-2 mb-4 
        ${isActive ? 
            'bg-yellow-300 border-yellow-300' : 
            'bg-white border-gray-300'} 
    `}>
       {text}
    </button>)
}