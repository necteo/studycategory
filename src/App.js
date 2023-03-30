import "./App.css";
import MainApp from "./components/MainApp";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  // 유형별 점수
  const [score, setScore] = useState({
    interst: 0,
    positive: 0,
    organized: 0,
    macroscopic: 0,
  });

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<MainApp score={score} setScore={setScore} />}
        />
        <Route path="/result" element={<Result score={score} />} />
        <Route path="#" element={<div>Unknown</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
