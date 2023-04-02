import React from "react";
import "./App.css";
import HomeCommission from "./components/commissions/homeCommission";
import HeaderSection from "./components/headerSection/headerSection";

import AppTemplate from "./layouts/AppTemplate";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <AppTemplate>
        <HeaderSection />
        {/* <HomeCommission /> */}
        <Home />
      </AppTemplate>
    </div>
  );
}

export default App;
