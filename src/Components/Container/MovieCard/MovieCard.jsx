import React from "react";
import Button from "react-bootstrap/Button";
import "./MovieCard.css";

const MovieCard = ({ movie, setLgShow, setSelected }) => {
  console.log(movie);
  return (
    <div className="col">
      <div
        className="card movie-card h-100 border-0 "
        onClick={() => {
          setLgShow(true);
          setSelected(movie);
        }}
      >
        <div className="card-img overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className="card-img-top movie-img"
            alt={movie.title}
          />
        </div>

        <div className="card-body px-0 pt-4">
          <h5 className="card-title m-0">{movie.title}</h5>
          <div className="card-rate">
            <span>{movie.vote_average}</span>
          </div>
          <span className="text-muted">{movie.release_date}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
