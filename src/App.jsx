import "./App.css";
import WholePage from "./Components/WholePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OtherPage from "./Components/Output/OtherPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WholePage />} />
          <Route path="/OtherPage" element={<OtherPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
