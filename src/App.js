import logo from './logo.svg';
import './App.css';

function App() {

  function confirmed(fn) {
    const input = window.prompt("実行しますか?");
      fn(input);
  }

  confirmed(function (input) {
    if (input === "実行")
      console.log("リポジトリを削除")
  });

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
    </div>
  );
}

export default App;
