import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Provider} from './context'
import Lyric from './components/tracks/Lyric';

function App() {
  return (
    <Provider>
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/lyrics/track/:id" element={<Lyric/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
