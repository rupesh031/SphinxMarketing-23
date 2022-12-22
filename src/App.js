import About from "./components/about-page/about";
import Home from "./components/home/home";
import Menu from "./components/menu/menu";

import Sponsors from "./components/sponsors-page/sponsors";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/sponsor" element={<Sponsors />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
