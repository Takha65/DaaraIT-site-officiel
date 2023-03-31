import React from 'react'
import './App.css'
import NavBar from './pages/home/navbar'
import MotDupresident from './components/motdupresi/motdupresident'
import Partenaires from './components/partenaires/Partenaires'
import Commission from './components/commissions/commissions'

function App() {
  return (
    <div className="App">
        <Commission/>
    </div>
  );
}

export default App;
