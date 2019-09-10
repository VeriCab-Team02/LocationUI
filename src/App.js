import React from 'react';

import './App.css';
import DriverTrip from './DriverTrip/DriverTrip.react';
import MapContainer from './MapContainer/MapContainer.react';
import MapCheck from './MapCheck/MapCheck.react';
import DriverRegister from './DriverRegister/DriverRegister.react';
import History from './History/History.react';
import DriverHome from './DriverHome/DriverHome.react';
import MapSearch from './MapSearch/MapSearch.react';
import MapComp from './MapComp/MapComp.react';
import LeafletMap from './LeafletMap/LeafletMap.react';
function App() {
  return (
    <div className="App">
      {/* <DriverTrip></DriverTrip> */}
      {/* <MapContainer></MapContainer> */}
      {/* <MapCheck></MapCheck> */}
      {/* <DriverRegister></DriverRegister> */}
      {/* <History></History> */}
      {/* <DriverHome></DriverHome> */}
      {/* <MapCheck></MapCheck> ========Use for marker======= */} 
      {/* <MapSearch></MapSearch>*/}
      <MapComp></MapComp> { /*========Use for Search, properly edited, Used to get lat, longitude======= */}
      {/*<MapDirection></MapDirection>   */}
      {/* <LeafletMap/>  { /*========Use for directions======= */}
    </div>

  );
}

export default App;
