import React, { useRef } from "react";
import { BACKGROUND_IMG_URL } from "../utils/constant";

const GPTSearch = () => {
  const searchText = useRef(null);

  const handleGPTSearchClick = () => {
    // TODO: Call OpenAI GPT API with searchText.current.value
    // Then use the GPT response to search TMDB for each movie suggestion
    console.log("GPT Search:", searchText.current.value);
  };

  return (
    <div>
      <div className="absolute -z-10">
        <img
          className="h-screen object-cover w-screen"
          src={BACKGROUND_IMG_URL}
          alt="background"
        />
      </div>
      <div className="pt-[35%] flex justify-center">
        <form
          className="w-1/2 bg-black grid grid-cols-12 rounded-lg overflow-hidden"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="p-4 m-4 col-span-9 bg-gray-800 text-white rounded-lg outline-none"
            placeholder="What would you like to watch?"
          />
          <button
            className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg font-semibold"
            onClick={handleGPTSearchClick}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearch;
