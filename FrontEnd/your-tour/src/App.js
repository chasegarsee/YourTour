import React from 'react';
import './App.css';
import ViewRestaruants from './Components/Restaurants/ViewRestaurants';
import Packages from './Components/Packages/Packages';

function App() {
  return (
    <div className="App">
      <h1>Your Tour</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>

        <Packages id="board-1" className="board" />

        <Packages id="board-2" className="board">

          <ViewRestaruants />
        </Packages>

      </div>
    </div>
  );
}

export default App;
