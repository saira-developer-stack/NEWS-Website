import { useState } from "react";
import Nav from "./nav";
export default function Header({getKeywords}){
  const [active, setActive]=useState(false)
  const [keywords, setKeywords]=useState('')
const onChangeHandler = (event)=>{
   const value = event.target.value ===''? false: true;
  setKeywords(event.target.value)
  setActive(value)
  getKeywords(event)
 
}

  
  return(
    <>
    <header style={{background: `${active? "#F0997D":"#FFC3A1"}`}} >
        <div className="logo">Updated News</div>
        <input onChange={onChangeHandler}/>
        
        <Nav/>
        
    </header>
    </>
  )
}