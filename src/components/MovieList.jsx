import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import HrMovieCard from "./HrMovieCard";
const screenWidth = window.innerWidth;
const MovieList = ({ genereId, index_ }) => {
  const elementRef = useRef();
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getMovieByGenreId();
  }, []);
  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genereId).then((res) => {
      console.log(res.data.results);
      setMovieList(res.data.results);
    });
  };
  const sliderRight = (elementRef) => {
    elementRef.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (elementRef) => {
    elementRef.scrollLeft -= screenWidth - 110;
  };
  return (
    <div className="relative">
      <HiChevronRight
        className="hidden md:block text-[50px] absolute  mx-14 mt-[170px] right-0 drop-shadow-2xl order-inherit text-white z-50"
        onClick={() => sliderRight(elementRef.current)}
      />
      <HiChevronLeft
        className="hidden md:block text-[50px] absolute mx-14 mt-[170px] drop-shadow-2xl  order-inherit text-white z-50"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto gap-8 scrollbar-hide px-10 pt-10 pb-10 "
        ref={elementRef}
      >
        {movieList.slice(0, 20).map((item) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
