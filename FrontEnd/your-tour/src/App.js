import React from 'react';
import './App.css';
import ViewRestaruants from './Components/Restaurants/ViewRestaurants';
import Packages from './Components/Packages/Packages';
import OneDayPackage from './Components/Packages/OneDayPackage';
import TwoDayPackage from './Components/Packages/TwoDayPackage';
import WeekendPackage from './Components/Packages/WeekendPackage';
import PackageTab from './Components/Packages/PackageTab';

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
