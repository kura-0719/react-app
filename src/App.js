import logo from './logo.svg';
import './App.css';

function App() {

  class Student {
    constructor(name){
      this.name = name;
    }
    cal_avg(data) {
      let sum = 0;
      for (let i = 0; i < data.length; i++){
      sum += data[i];
      }

    let avg = sum / data.length;
    return avg;
    }

    judge(avg) {
      let result;
      if (60 <= avg) {
        result = "passed";
      } else {
        result = "failed";
      }
      return result;
    }
  }

  let a001 = new Student("Sato");
  let data = [70, 65, 50, 90, 30];
  let avg = a001.cal_avg(data);
  let result = a001.judge(avg);

  console.log(data.length);
  console.log(a001.name);
  console.log(avg);
  console.log(result);

    
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
