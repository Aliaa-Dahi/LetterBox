import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import TopRated from "./pages/TopRated/TopRated";
import Home from "./pages/Home/Home.jsx";
import Details from "./pages/details/Details";
import NotFound from "./pages/NotFound/NotFound";
import Favourites from "./pages/Favourites/Favourites.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/details/:id?" element={<Details />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
