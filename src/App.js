import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Receita from './pages/Receita';
import AddReceita from './pages/AddReceita';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receita/:id" element={<Receita />} />
        <Route path="/add-receita" element={<AddReceita />} />
      </Routes>
    </Router>
  );
}

export default App;
