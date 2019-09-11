import React from 'react';

import './App.css';


import MapCheck from './MapCheck/MapCheck.react';

import Navigation from './Navigation/Navigation.react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faPersonBooth } from '@fortawesome/free-solid-svg-icons';
import DriverHome from './DriverHome/DriverHome.react';


function App() {
  return (
    <div className="App">

        <div className="header">
                <div className="jumbotron JumbSize">
                 <div>
                   <div></div>
                 </div>
                  <div className="icon">
                  <FontAwesomeIcon icon={faPersonBooth} size="3x"/>
                  {/* <i className="faPersonBooth" aria-hidden="true" size="3x"></i> */}
                  </div>
                  <div className="text">
                  <p>WELCOME !</p>
                  </div>
                </div>
            </div>
            <DriverHome></DriverHome>
      <br/>
      <div className="navigation">
        <Navigation></Navigation> 
    </div>


    <br/>
      <footer id="sticky-footer" className="py-4 bg-dark text-white-50" style={{height:'10px'}}>
                <div className="container text-center">
                 <big>Copyright &copy; VeriCab Rental Car Services 2009-2019</big>
                 
                 </div>
                 
            </footer>
    </div>
    /* <DriverTrip></DriverTrip> */
      /* <MapContainer></MapContainer> */
      /* <MapCheck></MapCheck> */
      /* <DriverRegister></DriverRegister> */
      /* <History></History> */
      /* <DriverHome></DriverHome> */
      /* <MapCheck></MapCheck> ========Use for marker======= */
      /* <MapSearch></MapSearch>*/
      /* <MapComp></MapComp> { /*========Use for Search, properly edited, Used to get lat, longitude======= */
      /*<MapDirection></MapDirection>   */
      /* <LeafletMap/>  { /*========Use for directions======= */
     

  );
}

export default App;
