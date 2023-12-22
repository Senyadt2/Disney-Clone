import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const MovieCard = ({ movie }) => {
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className="md:w-[200px] min-w-64 md:h-[300px] rounded-lg hover:border-[5px] border-gray-700 hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer"
        alt=""
      />
    </>
  );
};

export default MovieCard;
