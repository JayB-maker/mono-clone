import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import ScrollToTop from "./scrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
