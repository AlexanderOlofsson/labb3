import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
