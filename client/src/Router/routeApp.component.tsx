import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Footer from "../Components/Layout/Footer/Footer.component";
import Header from "../Components/Layout/Header/Header.component";
const RouteApp = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default RouteApp;
