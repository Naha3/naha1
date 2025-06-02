import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MultiMediaDashboard from "./components/MultiMediaDashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MultiMediaDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
