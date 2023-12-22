import React from "react";
import GenresList from "../Constant/GenresList";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <>
      {GenresList.genere.slice(0, 5).map((item, index) => (
        <div className="">
          <h2 className="text-[20px] md:text-[32px] text-Black font-bold px-10 py-1 md:py-5 ">
            {item.name}
          </h2>
          <MovieList genereId={item.id} index_={index} />
        </div>
      ))}
    </>
  );
};

export default GenreMovieList;
