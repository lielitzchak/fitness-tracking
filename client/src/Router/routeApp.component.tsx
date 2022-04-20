import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Footer from "../Components/Layout/Footer/Footer.component";
import Header from "../Components/Layout/Header/Header.component";
import Page404 from "../Components/Pages/page404/Page404.component";
const RouteApp = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/*" element={<Page404/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default RouteApp;
