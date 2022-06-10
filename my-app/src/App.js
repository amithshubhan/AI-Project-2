
import './App.css';
import Home from './Pages/Home'
import Predict from './Pages/Predict';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './Pages/About';
function App() {
  return (
    <Router className="App">
      <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route path="/" element={<Home/>} />
          <Route path="/Predict" element={<Predict/>} />
          <Route path="/About" element={<About/>} />
          
        </Routes>
    </Router>
  );
}

export default App;
