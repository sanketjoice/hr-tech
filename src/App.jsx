import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./assets/components/LandingPage";
import Dashboard from "./assets/components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hr-tech" element={<LandingPage />} />
        <Route path="/hr-tech/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
