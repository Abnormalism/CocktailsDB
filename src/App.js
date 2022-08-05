import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// Components
import Cocktails from "./Components/Cocktails";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import SingleCocktail from "./Pages/SingleCocktail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Cocktails />} />
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<SingleCocktail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
