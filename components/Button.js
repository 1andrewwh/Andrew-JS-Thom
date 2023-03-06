import {useState} from "react"
import Link from 'next/link';

export default function ActionButton({link, text, size, outline, style}) {
    const [isActive, setIsActive] = useState(false)

    function activeHandler() {
        setIsActive(!isActive)
    }

    let btnSize = size == 'large' ? 'p-4 text-xl rounded-lg border-2' : 'text-sm px-3 py-2.5 rounded-md border';
    let btnStyle;
    switch(style) {
        case 'primary':
            btnStyle = 'bg-orange-400 border-orange-400'
            break;
        case 'secondary':
            btnStyle = 'bg-yellow-300 border-yellow-300'
            break;
        case 'secondary-alt':
            btnStyle = 'bg-white border-yellow-300'
            break;
        case 'tertiary':
            btnStyle = 'bg-white border-gray-200';
            break;
    }

    return (
    <Link href={link}>
    <div 
        onClick={()=>activeHandler()} 
        className={`text-black text-center  ${btnSize} ${btnStyle}`}>
       {text}
    </div>
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
