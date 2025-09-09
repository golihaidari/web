import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi, Devops</h1>
      <h2>from Goli</h2>
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
      <button>Login</button>
    </div>
  );
}

export default App;
