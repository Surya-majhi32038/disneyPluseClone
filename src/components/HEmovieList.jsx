import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function HEmovieList({ movie }) {
     console.log(movie)
    return (
    <section className="flex md:mb-0 mb-5  flex-col transition-all hover:scale-110 ease-out duration-300" >
      <img
        src={IMAGE_BASE_URL+movie.backdrop_path}
        alt=""
        className=  "border-transparent md:mx-4  my-1  box-border border-[4px] hover:border-gray-400  cursor-pointer md:w-[360px] w-[200px] rounded-lg  shadow-2xl shadow-[#090E13]"
      />
      <h2 className= "md:w-[360px] text-center w-[200px] text-[10px] md:text-[17px]  text-white">{movie.title}</h2>
    </section>

    // 

//     <section className="flex flex-col w-[200px] md:w-[360px] transition-all hover:scale-110 ease-out duration-300">
//   <img
//     src={IMAGE_BASE_URL + movie.backdrop_path}
//     alt={movie.title}
//     className="border-transparent mx-2 md:mx-4 my-1 box-border border-[4px] hover:border-gray-400 cursor-pointer w-full rounded-lg shadow-2xl shadow-[#090E13]"
//   />
//   <h2 className="text-center w-full text-[10px] md:text-[17px] text-white">{movie.title}</h2>
// </section>

  );
}

export default HEmovieList;

// import React from "react";
// const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
// function MoiveCard({ movie }) {
//     console.log(movie)
//   return (
//     <>
//       <img src={IMAGE_BASE_URL+movie.poster_path} alt="" className="md:w-[200px] w-[110px] rounded-lg border-transparent border-[4px] cursor-pointer transition-all m-4  hover:scale-110 ease-out duration-300  hover:border-gray-400 box-border " />
//     </>
//   );
// }

// export default MoiveCard;
