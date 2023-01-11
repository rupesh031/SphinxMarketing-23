import About from "./components/about-page/about";
import Home from "./components/home/home";
import "./index.css";
import Sponsors from "./components/sponsors-page/sponsors";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./components/event-section/events";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setLoading] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/sponsor" element={<Sponsors />} />
          <Route path="/events" element={<Events />} />
          <Route
            exact
            path="/"
            element={<Home isLoading={isLoading} setLoading={setLoading} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
