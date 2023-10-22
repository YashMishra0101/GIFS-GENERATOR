import "./index.css";
import CustomGifs from "./component/CustomGifs";
import RandonGifs from "./component/RandonGifs";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [image, setImage] = useState("");
  const [spinner, setSpinner] = useState(true);
  const [customName,setCustomName]=useState('')
  const API_KEY = import.meta.env.VITE_API_GIFS_API_KEY;
  const API_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${customName}&rating=g`;

    async function fetchData() {
      setSpinner(true);
      try {
        const fetch = await axios.get(API_URL);
        const response = fetch.data.data.images.downsized_large.url;
        setImage(response);
        setSpinner(false);
      } catch (error) {
        console.error(error);
        setSpinner(false);
      }
    }

    useEffect(() => {
    fetchData();
  }, [customName]);


  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center backgroundImage">
      <header className="text-center py-3 rounded-md mt-5 font-bold text-3xl select-none text-amber-700 bg-white w-[85%] ">
        GIFS GENERATOR
      </header>
      <Navbar fetchData={fetchData} setCustomName={setCustomName} /> 
       <main>
        <Routes>
          <Route path="/" element={<CustomGifs />} />
          <Route path="/randomGifs" element={<RandonGifs image={image} spinner={spinner} fetchData={fetchData}/>}/>
          <Route path="/customGifs" element={<CustomGifs image={image} spinner={spinner} fetchData={fetchData} setCustomName={setCustomName}  />} />
          <Route path="/*" element={<RandonGifs image={image} spinner={spinner} fetchData={fetchData}/>} />
        </Routes>
      </main>

    </div>
  );
}
export default App;
