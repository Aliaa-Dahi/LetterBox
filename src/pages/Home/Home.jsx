import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../../Components/Container/Container";
import Pag from "../../Components/Container/Pagination/Pagination";
import "./Home.css";

const Home = () => {
  const [displayed, setDisplayed] = useState([]);
  const [active, setActive] = useState(1);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const perPage = 8;

  const manageSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setDisplayed([]);
      setSearchResults([]);
    }
  };

  useEffect(() => {
    if (search.trim() === "") return;

    axios
      .get(`/search/movie`, {
        params: {
          query: search,
          language: "en-US",
        },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODQ4ZWE2YmU5MzM0M2JlMGJiODc5YTVjYjY0YjI5MSIsIm5iZiI6MTc3NDc5NTA0Ny45Miwic3ViIjoiNjljOTM5Mjc2M2UwMGFjNzlkMDFlNzkwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.EcQTkwFKJPKWCC4_OTxkanDqNXJPdszoK2sv26hn8t4",
        }
      })
      .then((res) => {
        setSearchResults(res.data.results);
        setDisplayed(res.data.results.slice(0, perPage));
        setActive(1);
      })
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <>
      <div className="">
        <div className="banner position-relative">
          <div
            className="w-100 banner-inner"
            style={{
              // backgroundImage: `url(https://image.tmdb.org/t/p/original//2ssWTSVklAEc98frZUQhgtGHx7s.jpg)`,
              backgroundImage: `url(https://image.tmdb.org/t/p/original//suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg)`,
              height: "95vh",
              backgroundSize: "cover",
              backgroundPosition: "center 50px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>
              <span>Track films you’ve watched.</span>{" "}
              <span>Save those you want to see.</span>{" "}
              <span>Tell your friends what’s good.</span>
              <button className="btn w-50 mx-auto mt-4">Get Started</button>
            </div>
          </div>

          <div className="banner-overlay"></div>
        </div>
        <div className="container-fluid text-center">
          <input
            type="search"
            placeholder="Type here"
            className="search-input col-4  px-4 py-2 rounded-2 mt-5"
            width={"200px"}
            onChange={(e) => manageSearch(e)}
          />
          <Container selectd={displayed} />
          {displayed ? (
            <Pag
              movies={searchResults}
              active={active}
              setActive={setActive}
              setDisplayed={setDisplayed}
              perPage={perPage}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Home;
