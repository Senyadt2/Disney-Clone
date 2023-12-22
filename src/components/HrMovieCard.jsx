import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const HrMovieCard = ({ movie }) => {
  return (
    <>
      <div className="hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer">
        <img
          src={IMAGE_BASE_URL + movie.backdrop_path}
          className="md:w-[200px] min-w-72  md:min-w-96 md:h-[300px] rounded-lg hover:border-[5px] border-gray-700 "
          alt=""
        />
        <h2 className="mt-2 font-extrabold">{movie.title}</h2>
      </div>
    </>
  );
};

export default HrMovieCard;
