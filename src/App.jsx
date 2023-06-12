/* eslint-disable no-unused-vars */
import './assets/css/app.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./parts/Header";

function App() {
  return (
    <div className="flex flex-col">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
