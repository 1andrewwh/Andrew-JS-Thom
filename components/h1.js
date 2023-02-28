import { useState } from "react"





export default function H1({name}) {
    const [isActive, setIsActive] = useState(false)

    function activeHandler() {
      setIsActive(!isActive)
    }
      return (<h1 className={`text-3xl ${isActive ? 'font-bold' : 'font-light' }`}>
        <span onClick={()=>activeHandler()}>Hello {isActive ? <>{name}</> : 'there'}!</span>
      </h1>)
}
