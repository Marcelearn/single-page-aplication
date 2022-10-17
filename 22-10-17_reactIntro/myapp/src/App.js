import logo from './logo.svg';
import './App.css';

function App() {
  const text = "Lorem Ipsum"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>React</h1>
        <p>{text}</p>
      </header>
    </div>
  );
}

export default App;
