import React, { useContext, useEffect, useState } from "react";
import MoviesContext from "../../assets/Contexts";
import Container from "../../Components/Container/Container";
import Pag from "../../Components/Container/Pagination/Pagination";
import axios from "axios";

const TopRated = () => {
  const [topRated, setTopRated] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [active, setActive] = useState(1);

  const perPage = 8;

  useEffect(() => {
    const options = {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODQ4ZWE2YmU5MzM0M2JlMGJiODc5YTVjYjY0YjI5MSIsIm5iZiI6MTc3NDc5NTA0Ny45Miwic3ViIjoiNjljOTM5Mjc2M2UwMGFjNzlkMDFlNzkwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.EcQTkwFKJPKWCC4_OTxkanDqNXJPdszoK2sv26hn8t4",
      },
    };

    axios.get("/movie/top_rated", options)
      .then((res) => {
        setTopRated(res.data.results);
        setDisplayed(res.data.results.slice(0, perPage));
        setActive(1);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Container selectd={displayed} />
      <Pag
        movies={topRated}
        active={active}
        setActive={setActive}
        setDisplayed={setDisplayed}
        perPage={perPage}
      />
    </>
  );
};

export default TopRated;
