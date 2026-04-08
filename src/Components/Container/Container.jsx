// import React, { use } from "react";
import { useContext, useState } from "react";
import MovieCard from "./MovieCard/MovieCard";
import DetailsModal from "./Modal/Modal";
import MoviesContext from "../../assets/Contexts";
import "./Container.css";

const Container = ({ selectd }) => {

  // console.log(movies)

  return (
    <div className="container py-4 movie-container">
      <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 pt-5">
        {selectd?.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            // setLgShow={setLgShow}
            // setSelected={setSelected}
          />
        ))}
      </div>
      
      {/* <DetailsModal lgShow={lgShow} setLgShow={setLgShow} selected={selected} /> */}
    </div>
  );
};

export default Container;
