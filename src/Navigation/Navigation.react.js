import React from 'react';
import {Switch, Route} from 'react-router-dom';
import DriverRegister from '../DriverRegister/DriverRegister.react';
import DriverSettings from '../DriverSettings/DriverSettings.react';
import reg from '../reg/reg.react';
import DriverTripReact from '../DriverTrip/DriverTrip.react';
import History from '../History/History.react'; 
import ShowRoutes from '../ShowRoutes/ShowRoutes.react';
import ThanksPage from '../ThanksPage/ThanksPage.react';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <Switch>
                    <Route exact path="/"> </Route>
                    <Route path="/startTrip" component={DriverTripReact}></Route>
                    <Route path="/History" component={History}></Route>
                    {/* <Route exact path="/reg" component={reg}>reg</Route> */}
                    <Route path="/viewRoute" component={ShowRoutes}></Route>
                    <Route path="/endTrip" component={ThanksPage}></Route>
                </Switch>
            </div>
        );
    }
}

export default Navigation;