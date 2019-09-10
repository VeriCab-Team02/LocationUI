import React, {Component} from 'react';
import './MapCheck.css';
// import {LeafletMap} from 'react-leaflet/lib/Map';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// import { ReactLeafletSearch } from 'react-leaflet-search';

// const wrappedZoomIndicator = withLeaflet(ReactLeafletZoomIndicator);

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
class MapCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 13.0827,
            lng: 80.2707,
            // zoom: 13
          }
    }

    render() {
        const MapPosition = [this.state.lat, this.state.lng];
        return (

            
            <div className='mapcheck_wrapper'>
                <Map
                        center={[13, 80]}
                        zoom={8}
                        // maxZoom={10}
                        // attributionControl={true}
                        //         zoomControl={true}
                        //         doubleClickZoom={true}
                        //         scrollWheelZoom={true}
                        //         dragging={true}
                            //    animate={true}
                        //         easeLinearity={0.35}
                       
                        >
                        {/* <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        /> */}

                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                   
                        <Marker position={MapPosition} >
                            {console.log("Marker")}
                            <Popup>
                                Popup for any custom information.
                            </Popup>
                        </Marker>
                </Map>
            </div>
        );
    }
}

export default MapCheck;