import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message/Message';

const myText = "Hello from App";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Message text={myText} />
      </header>
    </div>
  );
}

export default App;
