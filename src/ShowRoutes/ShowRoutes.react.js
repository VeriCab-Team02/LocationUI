import React from 'react';

import './ShowRoutes.css';
import LeafletMap from '../LeafletMap/LeafletMap.react';
import {Link} from 'react-router-dom';

class ShowRoutes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tripData :{}
        }
    }

    componentDidMount(){
        let url= "http://localhost:4200/trip";
        fetch(url).then(resp=>resp.json()).then(tripData=>this.setState({tripData}));
    }

    render() {
        return (
            <div className='showroutes_wrapper'>
                   <div className="container">
                        <h2 style={{color:'white'}}>Current Trip Details</h2>
                        <div className="card">
                            <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <label><b>PassengerName:  </b></label>
                                            {this.state.tripData.passengerName} 
                                        </div>
                                    </div>
                                 
                                <div className="row">
                                    <div className="col">
                                        <label><b>Source Location  : </b> </label>
                                         { this.state.tripData.sourceLocation} 
                                    </div>
                                </div>
                            </div>
                                       
                        </div>

                        
                    </div>
                    <br/>
                <LeafletMap></LeafletMap>
                <br/><br/>
      <Link to="/endTrip"><input type="submit" value="End Trip" className="btn btn-primary"  onClick={this.handleEndTrip} /></Link>
      <br/><br/><br/><br/> 
            </div>
        );
    }
}

export default ShowRoutes;