import logo from './logo.svg';
import './App.css';

function App() {

  const users = {
    hoge: 'takumi'
  }
  const getUsername = (userId) => {
    return users[userId]
  }

  const username  = getUsername('hoge')
  console.log(username)

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
