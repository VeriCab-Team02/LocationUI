import React from 'react';
import './DriverRegister.css';


class DriverRegister extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                carFlag : false,
                newDriver : {
                    id:0,
                    driverName:"",
                    gender:"",
                    driverdob:"",
                    driverEmail:"",
                    driverPsw:"",
                    driverPswrepeat:"",
                    driverPhone:0,
                    driverCity:""
    
                }
            }
    }

    CarInfo = (e) => {
        let inp = e.target.value;
        console.log(inp);
         this.setState( { carFlag : !this.state.carFlag } )
    }

    handleChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);

        let name = event.target.name;
        let value = event.target.value;

        console.log(this.state.newDonor);
        this.setState(prevState =>({newDriver : {...prevState.newDriver}, [name] : value}));
    
    }

    
    render() {
    return (
        <div className='container'>
             <form class="form-horizontal" >
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />
                
                <div class="form-group row">
                    <label class="col-form-label col-sm-2">Name: </label>
                    <div class="col-sm-4">
                        <input type="text" class="form-control" name="driverName" placeholder="Enter Username" id="driverName"/>
                    </div>
                </div>   
                    
                <div className="form-group row">
                <label class="col-form-label col-sm-2">Gender: </label>
                     <input type="radio" name="gender" value="Male"/> Male &nbsp;
                     <input type="radio" name="gender" value="Female"/> Female &nbsp;
                     <input type="radio" name="gender" value="Other"/> Other
                </div>
                

                <div class="form-group row">
                    <label class="col-form-label col-sm-2" > DOB:</label>
                    <div class="col-sm-4">
                        <input type="date" class="form-control" name="driverdob" id="driverdob" placeholder="Enter DOB" />
                    </div>
                 </div>
                
                 <div class="form-group row">
                    <label class="col-form-label col-sm-2">Email:</label>
                    <div class="col-sm-4">
                        <input type="email" class="form-control" id="driver-email" placeholder="Enter email" name="driver-email" />
                    </div>
                 </div>

                 <div class="form-group row">
                    <label class="col-form-label col-sm-2">Password:</label>
                    <div class="col-sm-4">          
                        <input type="password" class="form-control" id="pwd" placeholder="Enter Password" name="pwd" />
                    </div>
                 </div>


                 <div class="form-group row">
                    <label class="col-form-label col-sm-2">Phone Number:</label>
                    <div class="col-sm-4">  
                     <input type="text" class="form-control" id="driver-phone" placeholder="Enter Phone Number" name="driver-phone" />
                    </div>
                 </div>



                {/* <tr>
                <td><label>City: </label> </td>
                <td> <input type="text" name="driver-city" required></input> </td>
                </tr>
                <br /> */}
                
                <div className="form-group row">
                     <label class="col-form-label col-sm-2">Do you have a car? </label>
                                <input type="radio" name="AskCar" value="Yes" onChange={this.CarInfo}/>Yes 
                                <input type="radio" name="AskCar" value="No" onChange = {this.CarInfo}/> No
                 </div>
                        
                         {this.state.carFlag && 
                     <div>
                            <div className="form-group row" >
                                <label class="col-form-label col-sm-2">Car Type</label>
                                <select className="col-sm-2">
                                     <option value="Mini" name="CarType">Mini</option>
                                    <option value="Micro" name="CarType">Micro</option>
                                    <option value="Sedan" name="CarType">Sedan</option>
                                    <option value="SUV" name="CarType">SUV</option>
                                </select>
                             <br />
                            </div>

                            <div className="form-group-row">
                                <label class="col-form-label col-sm-2">Car Manufacturer</label>
                                <input type="text" class="form-control" name="CarManufacturer" /> 
                            </div>

                            <div className="form-group-row">
                                <label class="col-form-label col-sm-2">Car Variant</label>
                                <input type="text" class="form-control" name="CarVariant" />
                            </div> 

                            <label class="control-label col-sm-2">Car Seats</label>
                            <input type="text" class="form-control"name="CarSeats" /> 
         
                            <label class="control-label col-sm-2">Car Registration No</label>
                            <input type="" class="form-control" name="CarNumber"/> 
         
                            <label class="control-label col-sm-2">License No</label>
                            <input type="" class="form-control" name="licenseNumber"/> 

                            <label class="control-label col-sm-2">Rate per Km</label>
                            <input type="" class="form-control" name="rateperkm"/> 

                            <label class="control-label col-sm-2">Driver License No</label>
                            <input type="" class="form-control" name="driverLicenseNo"/> 

                         </div>
                         
                            }
                          {!this.state.carFlag && 
                          <div>
                            <label class="control-label col-sm-2">Driver License No</label>
                            <input type="text" class="form-control" /> <br />
                          </div>}

                          <hr />
              
                <center> <button type="submit" class="registerbtn">Register</button> </center>
                       
            </form>
            </div>
    );

}
}

export default DriverRegister;