import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function MoiveCard({ movie }) {
    console.log(movie)
  return (
    <>
      <img src={IMAGE_BASE_URL+movie.poster_path} alt="" className="shadow-2xl shadow-[#090E13] md:w-[200px] w-[110px] rounded-lg border-transparent border-[4px] cursor-pointer transition-all md:m-4 mb-14   hover:scale-110 ease-out duration-300  hover:border-gray-400 box-border " />
    </>
  );
}

export default MoiveCard;
