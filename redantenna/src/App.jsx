import './App.css';
import backgroundImg from "./img/RedFed zbiorcze 1.JPG"
import { Nav } from './Components/nav/nav';


function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={backgroundImg}  alt="logo" />
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
    </div>
  );
}

export default App;
