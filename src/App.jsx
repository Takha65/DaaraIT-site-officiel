import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Events from "./pages/events/Events";
import AppTemplate from "./layouts/AppTemplate";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppTemplate />}>
          <Route index element={<Home />} />
          <Route path="evenements" element={<Events />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
