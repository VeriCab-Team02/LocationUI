
import React from 'react';
import './DriverTrip.css';    
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import MapComp from '../MapComp/MapComp.react';
import LeafletMap from '../LeafletMap/LeafletMap.react';
import MapSearch from '../MapSearch/MapSearch.react';
import {Link} from 'react-router-dom';

const mapStyles = {
  width: '60%',
  height: '50%',
  marginLeft: '100px'
};

class DriverTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                dateInfo : new Date()
            }
           
    }

    handleStartTrip = () => {

        //to get current date
        let ts = Date.now();
        let date_ob = new Date(ts);
        let date = date_ob.getDate();
        let month = date_ob.getDay();
        let year = date_ob.getFullYear();
        let currentDate = date + "/" + month + "/" + year;
       
        //console.log(currentDate);

        //TO get current Time
        // current hours
        let hours = date_ob.getHours();

        // current minutes
        let minutes = date_ob.getMinutes();
        let currentTime = hours + ":" + minutes;
        //console.log(currentTime);
        
        //To Get Current Location
        // this.setState({dateInfo : currentDate});


    }

    render() {

        return (
            <div className='drivertrip_wrapper'>

                    <div className="MapSize">
                    <h3 style={{color:'white'}}>Trip Details
                    <hr/>
                    </h3>
                    
                    
                    
                    {/* <LeafletMap/>  */}
                    <div className="container">
                    
                        <div className="row">
                            <div className="col-lg-6">
                                <h5 style={{color:'white'}}>Source: Your current location is taken automatically</h5>
                                 <MapSearch></MapSearch>
                            </div>

                            <div className="col-lg-6">
                            <h5 style={{color:'white'}}>Destination: Please enter in the search box</h5>
                            <MapComp ></MapComp>
                            </div>
                        </div>
                    </div>
                    </div>
                    <br/>
                    <Link to="/viewRoute"><input type="submit" value="Start Trip" className="btn btn-primary"  onClick={this.handleStartTrip} /></Link> 

                    <hr/>
                 
                  
            </div>
            
        
        );
    }

}


export default GoogleApiWrapper({
    apiKey: ('AIzaSyAoOtgx14-GFoCRmRWjb9GVO0IOlztNac0')
  })(DriverTrip)
