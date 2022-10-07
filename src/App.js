import logo from './logo.svg';
import './App.css';

function App() {

  // findIndex()|要素の何番目か知る
    const objectToArray = [
      { id:"hoge", text: "fuga"},
      { id: "foo",  text: "bar"},
      { id: "fiz",  text: "buzz"}
    ];
    const index = objectToArray.findIndex(object => {
      return object.id === 'hoge'
    })

    console.log(index, objectToArray[index])
    // 0, {id:"hoge": text: "fuga"}
    
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
