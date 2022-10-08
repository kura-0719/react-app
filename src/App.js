import logo from './logo.svg';
import './App.css';

function App() {

  class Student {
    constructor(name) {
      this.name = name;
    }

    avg(math, english) {
      console.log((math + english) / 2)
    }
  }

  let a001 = new Student("Sato");
  console.log(a001.name);
  a001.avg(80, 70);

  let a002 = new Student("Tanaka");
  console.log(a002.name);
  a001.avg(20, 40);
    
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
