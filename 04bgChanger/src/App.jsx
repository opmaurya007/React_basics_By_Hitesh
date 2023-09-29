import { useState } from "react"

function App() {
const [color, setColor]=useState('olive')
  return (
    <>
   <div className="w-full h-screen duration-200"
   style={{backgroundColor:color}}>
  <div className="fixed flex flex-wrap
  justify-center botttom-12 insert-x-0 px-2"></div>
  <div className="flex flex-wrap justify-center
  gap-3 shadow-lg bgwhite px-3 py-2 round-3xl">
    
    <button
    onClick={()=>setColor("red")}
     className="outline-none px-4 py-1 
    rounded-full text-white shadow-lg"
    style={{backgroundColor:"red"}}>Red</button>
        <button
            onClick={()=>setColor("green")}
 className="outline-none px-4 py-1 
    rounded-full text-white shadow-lg"
    style={{backgroundColor:"green"}}>Green</button> 

        <button
            onClick={()=>setColor("blue")}
         className="outline-none px-4 py-1 
    rounded-full text-white shadow-lg"
    style={{backgroundColor:"blue"}}>Blue</button>

        <button
            onClick={()=>setColor("yellow")}
         className="outline-none px-4 py-1 
    rounded-full text-white shadow-lg"
    style={{backgroundColor:"yellow" ,color:'black'}}>Yellow</button>

        <button
            onClick={()=>setColor("black")}
         className="outline-none px-4 py-1 
    rounded-full text-white shadow-lg"
    style={{backgroundColor:"black"}}>Black</button>

        <button
            onClick={()=>setColor("gray")}
     className="outline-none px-4 py-1 
    rounded-full text-white shadow-lg"
    style={{backgroundColor:"gray"}}>Gray</button>

<button
            onClick={()=>setColor("pink")}
     className="outline-none px-4 py-1 
    rounded-full text-white shadow-lg"
    style={{backgroundColor:"pink"}}>Pink</button>

<button
            onClick={()=>setColor("purple")}
     className="outline-none px-4 py-1 
    rounded-full text-white shadow-lg"
    style={{backgroundColor:"purple"}}>Purple</button>

<button
            onClick={()=>setColor("white")}
     className="outline-none px-4 py-1 
    rounded-full text-white shadow-lg"
    style={{backgroundColor:"white", color:'black'}}>white</button>

<button
            onClick={()=>setColor("lavender")}
     className="outline-none px-4 py-1 
    rounded-full text-white shadow-lg"
    style={{backgroundColor:"lavender",color:'black'}}>Lavender</button>
  </div>
   </div>
    </>
  )
}

export default App
