import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import AdminLogin from "./AdminLogin";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default Routing;
