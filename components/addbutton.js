import {useState} from "react"

export default function AddButton({text}) {
    const [isActive, setIsActive] = useState(false)

    function activeHandler() {
        setIsActive(!isActive)
    }
    return (
    <button 
        onClick={()=>activeHandler()} 
        className={`py-1.5 px-6 rounded-md text-black text-base drop-shadow-md w-min h-min
        ${isActive ? 
            'bg-yellow-400 border-orange-400' : 
            'bg-white border-gray-400'} 
    `}>
       {text}
    </button>)
}



