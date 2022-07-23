import React, { useEffect } from 'react';
import './App.css';
import Candle from './components/candle'
import StartPage from './components/start_page'
import music from './musics/placeholder.mp3';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

import starStyles from './assets/styles/star.module.css';
import meterStyle from './assets/styles/meter.module.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import WishPage from './components/wish';

function App() {


  return (
    <div className="App d-flex justify-content-center">
      <div className={starStyles.container}>

        <div className={starStyles.stars}></div>
        <div className={starStyles.twinkling}></div>
        <div className={meterStyle.meteor_1}></div>
        <div className={meterStyle.meteor_2}></div>
        <div className={meterStyle.meteor_3}></div>
        <div className={meterStyle.meteor_4}></div>
        <div className={meterStyle.meteor_5}></div>
        <div className={meterStyle.meteor_6}></div>
        <div className={meterStyle.meteor_7}></div>
        <div className={meterStyle.meteor_8}></div>
        <div className={meterStyle.meteor_9}></div>
        <div className={meterStyle.meteor_10}></div>
        <div className={meterStyle.meteor_11}></div>
        <div className={meterStyle.meteor_12}></div>
        <div className={meterStyle.meteor_13}></div>
        <div className={meterStyle.meteor_14}></div>
        <div className={meterStyle.meteor_15}></div>
        <div className={meterStyle.meteor_16}></div>


      </div>
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
