import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { addToLoved, removeFromLoved } from "../../redux/lovedSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const loved = useSelector((state) => state.loved.loved);
  const isLoved = movie ? loved.some((m) => m.id === movie.id) : false;

  const dispatch = useDispatch();

  const toggleLove = (e) => {
    e.stopPropagation();
    if (isLoved) {
      dispatch(removeFromLoved(movie.id));
    } else {
      dispatch(addToLoved(movie));
    }
  };

  useEffect(() => {
    axios
      .get(`/movie/${id}?language=en-US`, {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODQ4ZWE2YmU5MzM0M2JlMGJiODc5YTVjYjY0YjI5MSIsIm5iZiI6MTc3NDc5NTA0Ny45Miwic3ViIjoiNjljOTM5Mjc2M2UwMGFjNzlkMDFlNzkwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.EcQTkwFKJPKWCC4_OTxkanDqNXJPdszoK2sv26hn8t4",
        },
      })
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);
  if (!movie) {
    return <div className="text-white text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container-fluid p-0">
      <div className="banner position-relative">
        <div
          className="w-100"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            height: "95vh",
            backgroundSize: "cover",
            backgroundPosition: "center 50px",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="banner-overlay"></div>
      </div>

      <div className="movie-content container mt-n5">
        <div className="row text-white rounded shadow p-4 align-items-center">
          <div className="col-md-4 text-center position-relative">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="img-fluid rounded shadow"
            />
            <div className="heart" onClick={toggleLove}>
              <FaHeart className={`heart-icon ${isLoved ? "love" : ""}`} />
            </div>
          </div>

          <div className="col-md-8">
            <h1 className="fw-bold">{movie.title}</h1>
            <p className=" fst-italic">{movie.tagline}</p>

            <p className="mt-3 lead fs-6">{movie.overview}</p>

            <div className="d-flex flex-wrap gap-2 mt-3">
              <span className="badge bg-primary">
                {" "}
                <FaStar className="me-1 star-icon" />
                {movie.vote_average}
              </span>

              <span className="badge bg-secondary"> {movie.runtime} min</span>

              <span className="badge bg-success"> {movie.release_date}</span>

              <span className="badge bg-warning text-dark">
                {Math.round(movie.popularity) + `M`}
              </span>
            </div>

            <div className="mt-3">
              {movie.genres?.map((g) => (
                <span key={g.id} className="badge bg-info text-dark me-2">
                  {g.name}
                </span>
              ))}
            </div>

            <div className="mt-4">
              <p>
                <strong>Language:</strong> {movie.original_language}
              </p>

              <p>
                <strong>Country:</strong> {movie.origin_country?.join(", ")}
              </p>

              <p>
                <strong>Votes:</strong> {movie.vote_count}
              </p>

              <p>
                <strong>Budget:</strong> ${movie.budget?.toLocaleString()}
              </p>

              <p>
                <strong>Revenue:</strong> ${movie.revenue?.toLocaleString()}
              </p>
            </div>

            <div className="mt-3 d-flex gap-2">
              {movie.homepage && (
                <a
                  href={movie.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Website
                </a>
              )}

              <a
                href={`https://www.imdb.com/title/${movie.imdb_id}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-warning"
              >
                IMDb
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="text-white">
    //   <img
    //     src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
    //     alt={movie.title}
    //   />
    // </div>
  );
};

export default Details;
