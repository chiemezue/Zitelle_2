import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/MainLayout";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Careers from "./Pages/Career";
import CareerForm from "./Components/CareerComponents/CareerForm";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/careers" element={<Careers />} />
          <Route path="/career/apply" element={<CareerForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
