import React from 'react'
import './App.css'
import HomeCommission from './components/commissions/homeCommission';

import AppTemplate from './layouts/AppTemplate';

function App() {
  return (
    <div className="App">
         
       <AppTemplate>
          <h1>Partie slide</h1>
       </AppTemplate>
        <HomeCommission />
    </div>
  );
}

export default App;
