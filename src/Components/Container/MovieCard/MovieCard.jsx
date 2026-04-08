import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToLoved, removeFromLoved } from "../../../redux/lovedSlice";

import { FaEye, FaStar, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import MoviesContext from "../../../assets/Contexts";

import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const loved = useSelector((state) => state.loved.loved);

  const isLoved = loved.find((m) => m.id === movie.id);

  const toggleLove = (e) => {
    e.stopPropagation();
    if (isLoved) {
      dispatch(removeFromLoved(movie.id));
    } else {
      dispatch(addToLoved(movie));
    }
  };

  return (
    <div className="col">
      <div className="card movie-card h-100">
        <div
          className="card-img"
          onClick={() => navigate(`/details/${movie.id}`)}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className="card-img-top"
            alt={movie.title}
          />
        </div>
        <div className="card-body px-0 pt-4 d-flex justify-content-around">
          <div className="popularity">
            <FaEye className="eye-icon me-1" />
            <span>{Math.round(movie.popularity)}M</span>
          </div>
          <div className="rate">
            <FaStar className="me-1 star-icon" />
            <span>{movie.vote_average}</span>
          </div>
          <div className="release-year">
            <span>{movie.release_date.split("-")[0]}</span>
          </div>
          <div className="heart" onClick={toggleLove}>
            <FaHeart className={`heart-icon ${isLoved ? "love" : ""}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
