import React, { useState } from "react";
import Spinner from "./Spinner";

function CustomGifs({ image, spinner, fetchData, setCustomName }) {
  const [tag, setInputFiled] = useState({ gifName: " " });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setInputFiled((prev) => ({ ...prev, [name]: value }));
  };

  const clickHandler = (event) => {
    event.preventDefault();
    fetchData();
    setCustomName(tag.gifName);
  };

  return (
    <div className="w-[55rem] my-6 flex flex-col justify-center items-center">
      <h2 className="font-bold mb-3 text-2xl text-sky-700 underline hover:text-sky-800">
        A CUSTOM GIF
      </h2>
      <div className="w-full sm:w-[90%] h-[15rem] sm:h-[18rem] border-2 border-dashed border-blue-700 py-2 flex items-center flex-col">
        {spinner ? (
          <Spinner />
        ) : (
          <img
            src={image}
            alt="Random GIF"
            className="object-cover aspect-w-16 aspect-h-9 select-none rounded-md max-w-full sm:max-w-[90%] max-h-[75%] sm:max-h-[90%] my-auto"
          />
        )}
      </div>
      <form
        onSubmit={clickHandler}
        className="flex flex-col justify-center items-center w-[80%]"
      >
        <input
          className="py-2 mt-5 w-[30%] text-center rounded-md bg-slate-700 outline-none text-lg text-yellow-50"
          type="text"
          placeholder="Enter Here"
          name="gifName"
          value={tag.name}
          required
          onChange={onChangeHandler}
        />
        <button className="md:w-[70%] sm:w-24 mb-8  h-12 mt-7 px-16 text-indigo-100 transition-colors duration-150 bg-sky-700 rounded-lg focus:shadow-outline hover:bg-sky-800">
          Generte Custom Gifs
        </button>
      </form>
    </div>
  );
}

export default CustomGifs;
