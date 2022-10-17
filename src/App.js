import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import Menu from './component/Menu';
import Box from './Box';
import boxes from './boxes';
import memesData from './component/memesData';
import { useState } from 'react';
function App() {
   
  return(
    <div>
      <Navbar/>
      <Menu/>
    </div>
  )
}
export default App;
