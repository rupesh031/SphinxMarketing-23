import About from "./components/about-page/about";
import Home from "./components/home/home";

import Sponsors from "./components/sponsors-page/sponsors";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./components/event-section/events";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/sponsor" element={<Sponsors />} />
          <Route path="/events" element={<Events />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
