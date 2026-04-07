import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './services/ThemeProvider';
import Home from "./pages/home/Home";
import Performance from "./pages/performance/Performance";

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/performance" element={<Performance />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
