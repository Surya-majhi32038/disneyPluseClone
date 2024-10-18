import React from "react";
import GenreList from "../Constant/GenreList";
import MovieList from "./MovieList";


function GenreMovieList() {
  return (
    <div>
      {GenreList.genere.map((item,index) => index<5&&(
        <div className="md:pl-8 md:pr-10 px-2 py-2 md:p-8">
          <h2 className="text-white font-bold text-2xl">{item.name} <MovieList genereId={item.id} index_={index} /> </h2>
        </div>
      ))}
    </div>
  );
}

export default GenreMovieList;
