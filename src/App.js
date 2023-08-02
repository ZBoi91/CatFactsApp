import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import 'antd/dist/reset.css'
import Cat from './pages/Cat';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/facts" exact element={<Cat />} />
    </Routes>
  </Router>
);

export default App;

