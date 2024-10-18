import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function Slider() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const elementRef = useRef();
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth); // Updates screenWidth when window is resized
    };

    window.addEventListener("resize", handleResize); // Adds the event listener on mount

    return () => {
      window.removeEventListener("resize", handleResize); // Removes the event listener on unmount
    };
  }, []);

  // const SliderLeft = (element) => {
  //     element.scrollLeft -= screenWidth -110;
  // }
  // const SliderRight = (element) => {
  //     element.scrollLeft += screenWidth -110;
  //     console.log(screenWidth)
  // }

  const SliderLeft = (element) => {
    if (element) {
      // Use the updated screenWidth state dynamically
      element.scrollLeft -= screenWidth - 110;
    }
  };

  const SliderRight = (element) => {
    if (element) {
      // Use the updated screenWidth state dynamically
      element.scrollLeft += screenWidth - 110;
    }
  };

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getTrendingMovie();
    
  }, []);

  const getTrendingMovie = () => {
    GlobalApi.getTrendingVideo.then((resp) => {
    //  console.log(resp.data.results);

      setMovieList(resp.data.results);
     // console.log(movieList.data)
    });
  };
  return (
    <div className="">
      <HiChevronLeft
        className="text-white cursor-pointer z-10 hidden md:block text-[35px] ml-4 mt-[150px] absolute "
        onClick={() => SliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="text-white cursor-pointer hidden md:block text-[35px] mr-4 mt-[150px] absolute right-0"
        onClick={() => SliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-6 md:px-16 md:py-6 py-2 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className=" min-w-full   md:h-[310px]  object-cover border-transparent
            object-left-top mr-5 rounded-md border-[4px]
            hover:border-gray-400 transition-all duration-200 ease-in shadow-xl shadow-black mb-8"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
