import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";
import './RoutingMachine.css';

class RoutingMachine extends MapLayer {
 
    createLeafletElement() {
      
        const { map } = this.props;
         const {lat1} = this.props;
         const {lng1} = this.props;

         L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map.leafletElement);

        let leafletElement = L.Routing.control({
          waypoints: [
            L.latLng(13.0132817,80.2060982),
            L.latLng(lat1, lng1)]
        }).addTo(map.leafletElement);

        return leafletElement.getPlan();
      }
}

export default withLeaflet(RoutingMachine);