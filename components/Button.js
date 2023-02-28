import {useState} from "react"

export default function ActionButton({text}) {
    const [isActive, setIsActive] = useState(false)

    function activeHandler() {
        setIsActive(!isActive)
    }
    return (
    <button 
        onClick={()=>activeHandler()} 
        className={`w-full mt-2.5 text-black text-[20px] block text-center rounded-lg p-4 border-2 mb-4 
        ${isActive ? 
            'bg-orange-400 border-orange-400' : 
            'bg-white border-gray-300'} 
    `}>
       {text}
    </button>)
}

// export default function H1({name}) {
//     const [isActive, setIsActive] = useState(false)

//     function activeHandler() {
//         setIsActive(!isActive)
//     }
//     return (<h1>
//             <span onClick={()=>activeHandler()}>Hello {isActive ? <>{name}</> : 'there'}!</span>
//     </h1>)
// }
