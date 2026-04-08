import React, { useContext } from "react";
import Pagination from "react-bootstrap/Pagination";
import "./Pagination.css";

const Pag = ({ movies, active, setActive, setDisplayed, perPage }) => {
  const pages = Math.ceil(movies.length / perPage);

  const items = [];
  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          setActive(number);
          setDisplayed(movies.slice((number - 1) * perPage, number * perPage));
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="d-flex justify-content-center">
      <Pagination size="sm" className="pagination">
        {items}
      </Pagination>
    </div>
  );
};

export default Pag;
