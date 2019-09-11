import './LeafletMap.css';
import React, { Component } from 'react';
import { Map, TileLayer } from "react-leaflet";
import RoutingMachine from "../RoutingMachine/RoutingMachine.react";


export default class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
            dateInfo : new Date(),
            tripData: {}
        }
       
}

componentDidMount(){
    let url= "http://localhost:4200/trip";
    fetch(url).then(resp=>resp.json()).then(tripData=>this.setState({tripData}));
}
  state = {
    lat: 12.74,
    lng: 80.94,
    zoom: 13,
    isMapInit: false,
    lat1:0,
    lng1:0
   
  };
  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: true
    });
  };

  componentDidMount(){
    var lat1 = localStorage.getItem("LATITUDE");
    this.setState({lat1});

    var lng1 = localStorage.getItem("LONGITUDE");
    this.setState({lng1});
  }
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="container">
     
      <Map center={position} zoom={this.state.zoom} ref={this.saveMap} >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
         {this.state.isMapInit && <RoutingMachine map={this.map} lat1={this.state.lat1} 
         lng1={this.state.lng1} lat={this.state.lat} lng={this.state.lng} /> } 
        
      </Map>

      </div>
    );
  }
}