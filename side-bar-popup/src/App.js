import React from 'react';
import './App.css';
import PopUpBar from "./components/PopUp/PopUpBar";
import Carousel from "./components/Carousel/Carousel"

function App() {
  return (
    <div className="App">
      <Carousel/>
      <PopUpBar/>
      <img src="https://i.imgur.com/VTpz8XB.jpg"/>
    </div>
  );
}

export default App;
