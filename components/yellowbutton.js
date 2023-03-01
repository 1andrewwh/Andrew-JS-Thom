import {useState} from "react"
import Link from "next/link"

export default function YellowButton({text, link}) {
    const [isActive, setIsActive] = useState(false)

    function activeHandler() {
        setIsActive(!isActive)
    }
    return (
    <Link href={link}>
        <button 
            onClick={()=>activeHandler()} 
            className={`mt-4 w-full p-3.5 mt-[100] text-black border-2 text-base block text-center rounded-lg
            ${isActive ? 
                'bg-yellow-300 border-yellow-300' : 
                'bg-white border-yellow-300'} 
        `}>
        {text}
        </button>
    </Link>
    )
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
