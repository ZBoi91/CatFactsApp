import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Facts from './pages/Facts';
import './App.css';
import 'antd/dist/reset.css'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Facts" exact element={<Facts />} />
    </Routes>
  </Router>
);

export default App;
