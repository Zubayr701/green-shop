import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      <div className="font-sans bg-gray-100">
        <Header />
        <Routes>
          <Route 
           path="/"
           element={<Home/>}
            />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
