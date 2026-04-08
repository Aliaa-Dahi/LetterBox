import { React, useContext, useEffect, useState } from "react";
import MoviesContext from "../../assets/Contexts";
import Container from "../../Components/Container/Container";
import Pag from "../../Components/Container/Pagination/Pagination";
import { useSelector } from "react-redux";

const Favourites = () => {
  const loved = useSelector((state) => state.loved.loved);
  const [displayed, setDisplayed] = useState([]);
  const [active, setActive] = useState(1);
  const perPage = 8;

  useEffect(() => {
    setDisplayed(loved.slice(0, perPage));
    setActive(1);
  }, [loved]);

  return (
    <>
      {loved.length === 0 ? (
        <div className="text-center text-white mt-5 pt-5">
          <h3 className="mt-5">No favourite movies yet </h3>
        </div>
      ) : (
        <>
          <Container selectd={displayed} />
          <Pag
            movies={loved}
            active={active}
            setActive={setActive}
            setDisplayed={setDisplayed}
            perPage={perPage}
          />
        </>
      )}
    </>
  );
};

export default Favourites;
