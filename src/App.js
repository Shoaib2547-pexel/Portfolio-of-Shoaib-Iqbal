import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import ScrollSections from './Components/ScrollSections';


function App() {
  

  return (
    <div className="App">
      <NavBar/>
      <ScrollSections />
    </div>
  );
}

export default App;
