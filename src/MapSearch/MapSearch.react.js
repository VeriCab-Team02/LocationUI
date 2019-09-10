import React from 'react';

import './MapSearch.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import * as ELG from 'esri-leaflet-geocoder';
import { Map, TileLayer } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

class MapSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
  let map = L.map('map').setView([40.91, -96.63], 4);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  //var searchControl = L.esri.Geocoding.geosearch.addTo(map);
  //Geocoding.geosearch().addTo(map);
  let searchControl = new L.esri.Controls.Geosearch().addTo(map);

  let results = L.layerGroup().addTo(map);

  searchControl.on('results', function (data) {
    results.clearLayers();
    for (let i = data.results.length - 1; i >= 0; i--) {
      results.addLayer(L.marker(data.results[i].latlng));
    }
  });
    }
    render() {
        return (
            <div className='mapsearch_wrapper'>
                	<div id="map"></div>
                      <div className='pointer'>
                      <div id="map"></div>

                        </div>
            </div>
        );
    }
}

export default MapSearch;