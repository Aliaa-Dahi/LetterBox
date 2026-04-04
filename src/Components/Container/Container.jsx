// import React, { use } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard/MovieCard";
import DetailsModal from "./Modal/Modal";

const Container = ({ movies }) => {
  const [lgShow, setLgShow] = useState(false);
  const [selected, setSelected] = useState({});

  return (
    <div className="container py-4">
      <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6">
        {movies.results?.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            setLgShow={setLgShow}
            setSelected={setSelected}
          />
        ))}
      </div>

      <DetailsModal lgShow={lgShow} setLgShow={setLgShow} selected={selected} />
    </div>
  );
};

export default Container;
