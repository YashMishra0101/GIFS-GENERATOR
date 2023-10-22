import React from "react";
import { Link } from "react-router-dom";

function Navbar({ fetchData,setCustomName }) {
  
const customHandler=(event)=>{
  fetchData();
  setCustomName("")
}
  return (
    <div>
      <nav>
        <ul className="md:flex font-serif text-2xl gap-28 mt-10 text-amber-700">
         <div>
         <Link to="/randonGifs">
            <li onClick={()=>setCustomName("")}>Random Gifs</li>
          </Link>
         </div>

          <div className="mt-4  sm:mt-0">
          <Link to="/customGifs" onClick={customHandler} >
            <li>Custom Gifs</li> 
          </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
