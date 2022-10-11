import "./App.css";
import Navbar from "./components/Navbar";
import NextGeneration from "./components/NextGeneration";
import WhyChoose from "./components/WhyChoose";
import LatestArticles from "./components/LatestArticles";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<NextGeneration />} />
          <Route path="/whyChoose" element={<WhyChoose />} />
          <Route path="/latestArticles" element={<LatestArticles />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
