import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/MainLayout";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Careers from "./Pages/Career";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/careers" element={<Careers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
