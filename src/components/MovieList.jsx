import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MoiveCard from "./MoiveCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import HEmovieList from "./HEmovieList";

function MovieList({ genereId,index_ }) {

   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const elementRef = useRef();
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getMovieByGenreId();

    const handleResize = () => setScreenWidth(window.innerWidth);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
  }, []);

  // slider logic
  // Slider logic with smooth scrolling
  const SliderLeft = (element) => {
    if (element) {
      // Use scrollBy with smooth behavior
      element.scrollBy({
        left: -(screenWidth - 550),
        behavior: "smooth",
      });
    }
  };

  const SliderRight = (element) => {
    if (element) {
      // Use scrollBy with smooth behavior
      element.scrollBy({
        left: screenWidth - 550,
        behavior: "smooth",
      });
    }
  };

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genereId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };
  return (
    <div className="relative">
      <HiChevronLeft
        className={`text-white cursor-pointer z-10 hidden md:block text-[35px] ml-4 ${index_%3==0? "mt-[120px]":"mt-[150px]"}  absolute `}
        onClick={() => SliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className={`text-white cursor-pointer z-10 hidden md:block text-[35px] mr-4  ${index_%3==0? "mt-[120px]" : "mt-[150px]"} absolute right-0`}
        onClick={() => SliderRight(elementRef.current)}
      />
      <div
        ref={elementRef}
        className="flex md:gap-2 gap-6 scroll-smooth overflow-x-auto scrollbar-none  md:py-8 md:px-5"
      >
        {movieList.map((item, index) => (
          <>
            {index_%3==0?<HEmovieList movie={item} /> :  <MoiveCard movie={item} /> }
          </>
          
        ))}
      </div>
    </div>
  );
}

export default MovieList;
