// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Routes eklenmiş

import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div>
        <Routes> {/* Switch yerine Routes kullanıldı */}
          <Route exact path="/login" element={<Login />} />
          {/* Diğer route'ları buraya ekleyin */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
