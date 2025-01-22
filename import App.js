
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonAppBar from './components/sample.js';
import Home1 from './components/home1.js';
import Home2 from './components/home2.js';
import Home3 from './components/home3.js';


function App() {
  return (
    <Router>
    <div>

      {/* <ButtonAppBar/> */}

      
      <Routes>
        <Route path="/" element={<ButtonAppBar />} />
        <Route path="/Home1" element={<Home1 />} />
        <Route path="/Home2" element={<Home2 />} />
        <Route path="/Home3" element={<Home3 />}/>
      </Routes>
    
    </div>
   </Router>
  );
}

export default App;

