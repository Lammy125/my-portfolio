import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

const AllRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
};

export default AllRoute;
