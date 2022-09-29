
import './App.css'
import Navbar from './components/Navbar';
import NextGeneration from './components/NextGeneration';
import WhyChoose from './components/WhyChoose';
import LatestArticles from './components/LatestArticles';

function App() {

  return (
    <div className="App ">
    <Navbar />
    <NextGeneration/>
    <WhyChoose/>
    <LatestArticles/>
    </div>
  );
}

export default App;
