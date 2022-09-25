import './App.css';
import Navbar from './components/Navbar';
import NextGeneration from './components/NextGeneration';

function App() {
  const app = new Date();
  const date = app.getFullYear();
  return (
    <div className="App">
    <Navbar name={date}/>
    <NextGeneration/>
    </div>
  );
}

export default App;
