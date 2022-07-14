import React from 'react';
import './App.css';
import Candle from './components/candle'
import StartPage from './components/start_page'
import music from './musics/placeholder.mp3';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import WishPage from './components/wish';

function App() {
  var audio = new Audio(music);
  return (
    <div className="App d-flex justify-content-center">

      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/wish" element={<WishPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
