import React, { useEffect, useRef, useState } from "react";
import Container from "./Components/Container/Container";

const App = () => {
  const [movies, setMovies] = useState({});
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODQ4ZWE2YmU5MzM0M2JlMGJiODc5YTVjYjY0YjI5MSIsIm5iZiI6MTc3NDc5NTA0Ny45Miwic3ViIjoiNjljOTM5Mjc2M2UwMGFjNzlkMDFlNzkwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.EcQTkwFKJPKWCC4_OTxkanDqNXJPdszoK2sv26hn8t4",
      },
    };

    fetch("https://api.themoviedb.org/3/movie/top_rated", options)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        // console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Container movies={movies} />
    </>
  );
};

export default App;
