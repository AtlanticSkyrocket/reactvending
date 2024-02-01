import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from './VendingMachine'
import CandyBar from './CandyBar';
import Drink from './Drink';
import Gum from './Gum';
import Chip from './Chip';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/CandyBar" element={<CandyBar />} />
          <Route path="/Chip" element={<Chip />} />
          <Route path="/Drink" element={<Drink />} />
          <Route path="/Gum" element={<Gum />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
