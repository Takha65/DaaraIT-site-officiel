import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Events from "./pages/events/Events";
import Galerie from "./pages/galerie/Galerie";
import Commissions from "./pages/commissions/commissions";
import AppTemplate from "./layouts/AppTemplate";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppTemplate />}>
          <Route index element={<Home />} />
          <Route path="evenements" element={<Events />} />
          <Route path="commissions" element={<Commissions />} />
          <Route path="galerie" element={<Galerie />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
