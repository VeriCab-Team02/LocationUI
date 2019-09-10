import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";
import './RoutingMachine.css';

class RoutingMachine extends MapLayer {
    createLeafletElement() {
        const { map } = this.props;
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map.leafletElement);
        let leafletElement = L.Routing.control({
          waypoints: [
            L.latLng(13.00544, 80.177),
            L.latLng(13.0067559, 80.2505307)]
        }).addTo(map.leafletElement);

        return leafletElement.getPlan();
      }
}

export default withLeaflet(RoutingMachine);