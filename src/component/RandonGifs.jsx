import React from "react";
import Spinner from "./Spinner";

function RandonGifs({ image, spinner, fetchData }) {
  const clickHandler = () => {
    fetchData();
  };

  return (
    <div className="w-[55rem] my-6 flex flex-col justify-center items-center">
      <h2 className="font-bold mb-3 text-2xl text-blue-700 underline hover:text-indigo-800">
        A RANDOM GIF
      </h2>

      <div className="w-full sm:w-[90%] h-[15rem] sm:h-[18rem] border-2 border-dashed border-blue-700 py-2 flex items-center flex-col">
        {spinner ? (
          <Spinner />
        ) : (
          <img
            src={image}
            alt="Random GIF Image Issue"
            className="object-cover aspect-w-16 aspect-h-9 select-none rounded-md max-w-full sm:max-w-[90%] max-h-[75%] sm:max-h-[90%] my-auto"
          />
        )}
      </div>

      <button
        onClick={clickHandler}
        className="md:w-[70%] sm:w-24  h-12 mt-7 mb-8 px-16  text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      >
        Generte Random Gifs
      </button>
    </div>
  );
}

export default RandonGifs;
