<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======

import './App.css';
import Commissions from './components/commissions/commissions';
import CommissionsDetails from './components/commissions/commissions-detaills';

function App() {
  return (
    <div className="app h-[100%]">
        <Commissions/>
>>>>>>> master
    </div>
  );
}

export default App;
