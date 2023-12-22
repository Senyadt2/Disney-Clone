import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const Slider = () => {
  const [moviesList, setMovesList] = useState([]);
  const elementRef = useRef();
  const [position, setPosition] = useState(null);
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((res) => {
      //   console.log(res.data.results);
      setMovesList(res.data.results);
    });
  };

  const screenWidth = 1220;
  const sliderRight = (element) => {
    setPosition(200 + position);
    setPosition(element.scrollWidth);
    element.scrollLeft += screenWidth ;
  };

  const sliderLeft = (element) => {
    setPosition(200 - position);
    element.scrollLeft -= screenWidth;
  };

  return (
    <>
      <HiChevronRight
        className="hidden md:block text-[50px] absolute mx-14 mt-[250px] right-0 text-cyan-600"
        onClick={() => sliderRight(elementRef.current)}
      />
      <HiChevronLeft
        className="hidden md:block text-[50px] absolute mx-14 mt-[250px] text-cyan-600"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-0 md:px-16 py-4 scrollbar-hide scroll-smooth "
        ref={elementRef}
      >
        {moviesList.map((item, index) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full md:h-[500px] object-cover mr-5 rounded-md hover:border-gray-500 transition-all ease-in-out duration-100 "
            alt=""
          />
        ))}
      </div>
    </>
  );
};

export default Slider;
