import logo from './logo.svg';
import './App.css';

function App() {

  const testScope = (scope) => {
    if (scope === 'function') {
      var functionScope = '関数スコープ内なら参照どこからでも参照できます'
    } else if (scope === 'block') {
      let blockScope = 'ブロックスコープ内でしか参照できません'
    }
    console.log(blockScope)
  }
  testScope('block')

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
