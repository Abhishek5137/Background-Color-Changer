import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen durarion-200 "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap inset-x-0 justify-center bottom-12 px-2">
         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button className="outline-none px-2 py-1 rounded shadow-lg" style={{background:"red"}} onClick={() =>{setColor("red")}} >Red</button>
          <button className="outline-none px-2 py-1 rounded shadow-lg" style={{background:"green"}} onClick={() =>{setColor("green")}}>Green</button>
          <button className="outline-none px-2 py-1 rounded shadow-lg" style={{background:"Blue"}} onClick={() =>{setColor("blue")}} >Blue</button>
          <button className="outline-none px-2 py-1 rounded shadow-lg" style={{background:"yellow"}} onClick={() =>{setColor("yellow")}}>Yellow</button>
          <button className="outline-none px-2 py-1 rounded shadow-lg" style={{background:"aqua"}} onClick={() =>{setColor("aqua")}}>Aqua</button>
          <button className="outline-none px-2 py-1 rounded shadow-lg" style={{background:"purple"}} onClick={() =>{setColor("purple")}}>Purple</button>
          <button className="outline-none px-2 py-1 rounded shadow-lg" style={{background:"gray"}} onClick={() =>{setColor("gray")}}>Gray</button>
          <button className="outline-none px-2 py-1 rounded shadow-lg" style={{background:"pink"}} onClick={() =>{setColor("pink")}}>Pink</button>
          <button className="outline-none px-2 py-1 rounded shadow-lg" style={{background:"lavender"}} onClick={() =>{setColor("lavender")}}>Lavender</button>
          <button className="outline-none px-2 py-1 rounded shadow-lg" style={{background:"brown"}} onClick={() =>{setColor("brown")}}>brown</button>
          <button className="outline-none px-2 py-1 rounded shadow-lg" style={{background:"black"}} onClick={() =>{setColor("black")}}>Dark</button>
          </div> 
        </div>
      </div>
    </>
  );
}

export default App;
