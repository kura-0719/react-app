import logo from './logo.svg';
import './App.css';

function App() {

  // map()|新しい配列を作る  
    const array = [1, 2, 4, 8];
    const resultArray = array.map(x => x * 2)
    console.log(resultArray)
    // Array [2, 4, 8, 16]
  
    const object = {
      "hoge": {text: "fuga"},
      "foo":  {text: "bar"},
      "fiz":  {text: "buzz"}
    };

    const objectToArray = Object.keys(object).map(key => {
      const value = object[key]
      // console.log(value)
      value['id'] = key
      // console.log(value)
      return value
    });

    console.log(objectToArray)

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
