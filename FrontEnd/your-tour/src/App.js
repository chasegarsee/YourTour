import React from 'react';
import './App.css';
import ViewRestaruants from './Components/Restaurants/ViewRestaurants';
import OneDayPackage from './Components/Packages/OneDayPackage';
import OneDayPackageRestaurants from './Components/Packages/OneDayPackageRestaurants';


function App() {
  return (
    <div className="App">
      <h1>Your Tour</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>

        <OneDayPackage id="board-1" className="board">
          <OneDayPackageRestaurants />
        </OneDayPackage>

        <OneDayPackage id="board-2" className="board">
          <ViewRestaruants />
        </OneDayPackage>

      </div>
    </div>
  );
}

export default App;
