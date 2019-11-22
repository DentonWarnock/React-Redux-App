import React from 'react';
import Kanye from "./components/Kanye";

import './App.css';

const imageSource = "https://media.pitchfork.com/photos/5db1d9974bb5ca0008bc72bd/2:1/w_790/Kanye-West.jpg"

function App() {
  return (
    <div className="App">
      <h1>Kanye West Quotes</h1>
      <img src={imageSource} alt="Kanye West"></img>
      <Kanye />
    </div>
  );
}

export default App;
