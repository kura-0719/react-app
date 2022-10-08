import logo from './logo.svg';
import './App.css';

function App() {

  // コールバック関数について
    // function 高階関数(コールバック関数) {
    //   //処理
    //   コールバック関数();
    // }
    
  function bring(food){
    if(/*手洗いが終えたら*/) {
      //食材を持ってきてもらう処理
    }
  }
  function peer(food){
    if(/*手洗いが終えたら*/) {
      //食材の皮をむく処理
    }
  }
  function cut(food){
    if(/*手洗いが終えたら*/) {
      //食材を切ってもらう処理
    }
  }
  
  //高階関数を使った場合の処理
  function washed(fn) {
    if(/*手洗いが終えたら*/) {
      fn(); //コールバック関数の処理
    }
  }

  function bring(food){
    //食材を持ってきてもらう処理
  }
  function peer(food){
    //食材の皮をむく処理
  }
  function cut(food){
    //食材を切ってもらう処理
  }
  washed(bring);


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
