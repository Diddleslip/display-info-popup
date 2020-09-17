import React from 'react';
import './App.css';
import PopUpBar from "./components/PopUpBar/PopUpBar";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <h1>Should be able to highlight these words while Sidebar is open!</h1>
      <PopUpBar/>
      <img src="https://i.imgur.com/VTpz8XB.jpg"/>
    </div>
  );
}

export default App;
