import "./App.css";
import Home from "./components/Home";
import MainApp from "./components/MainApp";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<MainApp />} />
        <Route path="/result" element={<Result />} />
        <Route path="#" element={<div>unknown</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
