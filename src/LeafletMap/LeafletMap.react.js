import './LeafletMap.css';
import React, { Component } from 'react';
import { Map, TileLayer } from "react-leaflet";
import RoutingMachine from "../RoutingMachine/RoutingMachine.react";

export default class LeafletMap extends Component {
  state = {
    lat: 12.74,
    lng: 80.94,
    zoom: 13,
    isMapInit: false
  };
  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: true
    });
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom} ref={this.saveMap}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
         {this.state.isMapInit && <RoutingMachine map={this.map}/> } 
        
      </Map>
    );
  }
}