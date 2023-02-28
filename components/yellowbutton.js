import {useState} from "react"

export default function YellowButton({text}) {
    const [isActive, setIsActive] = useState(false)

    function activeHandler() {
        setIsActive(!isActive)
    }
    return (
    <button 
        onClick={()=>activeHandler()} 
        className={`w-full p-3.5 mt-[100] text-black border-2 text-base block text-center rounded-lg
        ${isActive ? 
            'bg-yellow-300 border-yellow-300' : 
            'bg-white border-yellow-300'} 
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
