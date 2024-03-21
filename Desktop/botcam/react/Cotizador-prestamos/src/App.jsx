
import { useState } from "react";
import Header from "../src/assets/components/Header.jsx";


function App() {

  const [cantidad,setCantidad] = useState(10000);

  function handleChange(e){
    console.log(e.target.value);
    setCantidad(e.target.value);
    
  }
  const min = 0;
  const max = 20000;
  const steap = 0;

 

  return(
    <>
     <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
          <Header/>
          <input 
            type="range" 
            className=" w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
            onChange={handleChange}
            min={min}
            max={max}
            step={steap}
            value={cantidad}
          />
          <p className=" text-center my-10 text-5xl font-extralight text-indigo-600">{cantidad}</p>
     </div>
    </>
  )

}

export default App
