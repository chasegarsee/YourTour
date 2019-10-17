import React from 'react';
import './App.css';
import ViewRestaruants from './Components/Restaurants/ViewRestaurants';
import Packages from './Components/Packages/Packages';
import ViewBars from './Components/Bars/ViewBars';
import Places from './Components/Places/Places';

function App(props) {


  return (
    <div className="App">
      <h1>Your Tour</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Packages id="board-1" className="board" />
        <Places id="board-2" className="board" />
      </div>
    </div>
  );
}

export default App;
