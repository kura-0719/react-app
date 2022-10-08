import logo from './logo.svg';
import './App.css';

function App() {

  let cal1 = function(x, y, z){
    console.log(x + y + z)
  }
  cal1(5,3,8);

  let cal2 = function(x, y, z){
    return x + y + z;
  }
  let result = cal2(10,5,8)
  console.log(result)
    
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
