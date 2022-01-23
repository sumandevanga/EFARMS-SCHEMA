import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
// import Button from '@material-ui/core/Button';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';
// import IconButton from '@material-ui/core/IconButton';

export default class Register extends React.Component {


    //initializing initial state and binding controls
    constructor() {
        super();
        this.state = {
            product: { full_Name:'',contact_no:'',email_ID:'',add_Line1:'',add_line2:'',city:'',State:'',pincode:''
                ,account_no:'',ifsc_code:'',aadhar_no:'',pan_no:'',password:'',confirm_Password:'' },
            errors: {},
            formIsValid: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitregisterForm = this.submitregisterForm.bind(this);
    }

    // submitregisterForm(e) {
    //     e.preventDefault();
    //     if (this.validForm()) {
    //         alert('Register Successful!');
    //         this.props.history.push('/login');
    //     }
    // }

    //Handler for detecting Changes
    handleChange(e) {
        let product = this.state.product;
        product[e.target.name] = e.target.value;
        this.setState({
            product: product 
        });
    }

    submitregisterForm(e) {
        e.preventDefault();
        var newProduct = {
            full_Name: this.state.product.full_Name,
            contact_no: this.state.product.contact_no,
            email_ID: this.state.product.email_ID,
            add_Line1: this.state.product.add_Line1,
            add_line2: this.state.product.add_line2,
            city: this.state.product.city,
            State: this.state.product.State,
            pincode: this.state.product.pincode,
            account_no: this.state.product.account_no,
            ifsc_code: this.state.product.ifsc_code,
            aadhar_no: this.state.product.aadhar_no,
            pan_no: this.state.product.pan_no,
            password: this.state.product.password,
            confirm_Password: this.state.product.confirm_Password
        }
        console.log(newProduct);
        axios.post('http://localhost:5000/api/Farmer', newProduct).then(res => {
            window.location.reload();
        });
        this.props.history.push('/farmerlogin');
        alert('Registered Successfully!');
    }
    //Rendering the View onto App Component
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand navbar-expand-lg bg-dark">
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item1">
                  <Link to="/home" className="nav-link text-white">
                    <b>Home</b>
                  </Link>
                </li>

                <li className="nav-item1">
                  <Link to="/about" className="nav-link text-white">
                    <b>About</b>
                  </Link>
                </li>

                <li className="nav-item1">
                  <Link to="/contact" className="nav-link text-white">
                    <b>Contact Us</b>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
            <div className="row">
                <div className="offset-lg-4 col-lg-4 text-center">
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3 className="text-red">
                       Farmer Register
                    </h3>
                    <form method="POST" name="registerForm" onSubmit={this.submitregisterForm} autocomplete="off">
                    <div className="form-group text-left">
                            <label>Full Name</label>
                            <input type="text" name="full_Name" value={this.state.product.full_Name} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.full_Name ? 'alert alert-danger' : ''}>
                                {this.state.errors.full_Name}
                            </div>
                        </div>

                        <div className="form-group text-left">
                            <label>Contact No</label>
                            <input type="text" name="contact_no" value={this.state.product.contact_no} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.contact_no ? 'alert alert-danger' : ''}>
                                {this.state.errors.contact_no}
                            </div>
                        </div>

                        <div className="form-group text-left">
                            <label>Email ID</label>
                            <input type="text" name="email_ID" value={this.state.product.email_ID} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errorsemail_ID ? 'alert alert-danger' : ''}>
                                {this.state.errors.email_ID}
                            </div>
                        </div>

                        <div className="form-group text-left">
                            <label>Address 1</label>
                            <input type="text" name="add_Line1" value={this.state.product.add_Line1} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.add_Line1 ? 'alert alert-danger' : ''}>
                                {this.state.errors.add_Line1}
                            </div>
                        </div>

                        <div className="form-group text-left">
                            <label>Address 2</label>
                            <input type="text" name="add_line2" value={this.state.product.add_line2} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.add_Line2 ? 'alert alert-danger' : ''}>
                                {this.state.errors.add_Line2}
                            </div>
                        </div>

                        <div className="form-group text-left">
                            <label>City</label>
                            <input type="text" name="city" value={this.state.product.city} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.city ? 'alert alert-danger' : ''}>
                                {this.state.errors.city}
                            </div>
                        </div>

                        <div className="form-group text-left">
                            <label>State</label>
                            <input type="text" name="State" value={this.state.product.State} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.State ? 'alert alert-danger' : ''}>
                                {this.state.errors.State}
                            </div>
                        </div>

                        <div className="form-group text-left">
                            <label>PinCode</label>
                            <input type="text" name="pincode" value={this.state.product.pincode} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.pincode ? 'alert alert-danger' : ''}>
                                {this.state.errors.pincode}
                            </div>
                        </div>

                        <div className="form-group text-left">
                            <label>Account No</label>
                            <input type="text" name="account_no" value={this.state.product.account_no} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.account_no ? 'alert alert-danger' : ''}>
                                {this.state.errors.account_no}
                            </div>
                        </div>

                        <div className="form-group text-left">
                            <label>IFSC</label>
                            <input type="text" name="ifsc_code" value={this.state.product.ifsc_code} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.ifsc_code ? 'alert alert-danger' : ''}>
                                {this.state.errors.ifsc_code}
                            </div>
                        </div>

                        <div className="form-group text-left">
                            <label>Adhar Card</label>
                            <input type="text" name="aadhar_no" value={this.state.product.aadhar_no} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.aadhar_no ? 'alert alert-danger' : ''}>
                                {this.state.errors.aadhar_no}
                            </div>
                        </div>
                        {/* <div style={{
                            display: 'flex',
                            margin: 'auto',
                            width: 500,
                            flexWrap: 'wrap',
                        }}>
                            
                            
                        <input type="file" accept="image/*"style={{ display: 'none' }}id="contained-button-file"/>
                        
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span">
                                 Upload Adhaar Card
                            </Button>
                        </label>
                            <h5 >  OR  </h5>
                        <input accept="image/*" id="icon-button-file"
                            type="file" style={{ display: 'none' }} />
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture"component="span">
                        <PhotoCamera />
                            </IconButton>
                        </label>
                        </div> */}
                        
                        <div className="form-group text-left">
                            <label>PAN Card</label>
                            <input type="text" name="pan_no" value={this.state.product.pan_no} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.pan_no ? 'alert alert-danger' : ''}>
                                {this.state.errors.pan_no}
                            </div>
                        </div>
                        {/* <div style={{
                            display: 'flex',
                            margin: 'auto',
                            width: 500,
                            flexWrap: 'wrap',
                        }}>
                    
                        <input type="file" accept="image/*"style={{ display: 'none' }}id="contained-button-file"/>
                        
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span">
                                 Upload PAN Card
                            </Button>
                        </label>
                            <h5 >  OR  </h5>
                        <input accept="image/*" id="icon-button-file"
                            type="file" style={{ display: 'none' }} />
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture"component="span">
                        <PhotoCamera />
                            </IconButton>
                        </label>
                        </div> */}

                        {/* <div className="form-group text-left">
                            <label>Trading License</label>
                            <input type="text" name="adhar" value={this.state.product.adhar} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.adhar ? 'alert alert-danger' : ''}>
                                {this.state.errors.adhar}
                            </div>
                        </div> */}
                        {/* <div style={{
                            display: 'flex',
                            margin: 'auto',
                            width: 500,
                            flexWrap: 'wrap',
                        }}>
                    
                        <input type="file" accept="image/*"style={{ display: 'none' }}id="contained-button-file"/>
                        
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span">
                                 Upload Trader License
                            </Button>
                        </label>
                            <h5 >  OR  </h5>
                        <input accept="image/*" id="icon-button-file"
                            type="file" style={{ display: 'none' }} />
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture"component="span">
                        <PhotoCamera />
                            </IconButton>
                        </label>
                        </div> */}

                        <div className="form-group text-left">
                            <label >Password</label>
                            <input type="password" name="password" value={this.state.product.password} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.password ? 'alert alert-danger' : ''}>
                                {this.state.errors.password}
                            </div>
                        </div>

                        <div className="form-group text-left">
                            <label > Confirm Password</label>
                            <input type="password" name="confirm_Password" value={this.state.product.confirm_Password} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.confirm_Password ? 'alert alert-danger' : ''}>
                                {this.state.errors.confirm_Password}
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <input type="submit" className="btn btn-success" value="Register" />
                        </div>
                        <div className={this.state.errors.general ? 'alert alert-danger' : ''}>
                            {this.state.errors.general}
                        </div>
                        <div className="form-group">
                         <a href="/farmerlogin"> <input type="button" className="btn btn-success" value="Back" onClick="history.back()" /></a>
                        </div>
                        <div className={this.state.errors.general ? 'alert alert-danger' : ''}>
                            {this.state.errors.general}
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
        )
    }

    validForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        let emailPasswordInValid = false;
        

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "";
          }
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Please enter an email";
        } else if (typeof fields["email"] !== "undefined") {
            if (!(fields["email"].match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/))) {
                formIsValid = false;

                emailPasswordInValid = true;
                errors["email"] = "Please enter a proper email address";
            }
        } else {
            errors["email"] = "";
        }

        if (!fields["ifsc"]) {
            formIsValid = false;
            errors["ifsc"] = "";
          }
        if (!fields["ifsc"]) {
            formIsValid = false;
            errors["ifsc"] = "IFSC cannot be empty";
        } else if (typeof fields["ifsc"] !== "undefined") {
            if (!(fields["ifsc"].match(/^[a-z0-9._%+-]+[a-z0-9.-]+\.[a-z]{2,4}$/))) {
                formIsValid = false;
                formIsValid = true;
                errors["ifsc"] = "Please enter a proper IFSC Code";
            }
        } else {
            errors["ifsc"] = "";
        }

        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
          }
          if (!fields["address"]) {
            formIsValid = false;
            errors["address"] = "Cannot be empty";
          }
      
          if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
              formIsValid = false;
              errors["name"] = "Only letters";
            }
          }

          if (!fields["city"]) {
            formIsValid = false;
            errors["city"] = "Cannot be empty";
          }
      
          if (typeof fields["city"] !== "undefined") {
            if (!fields["city"].match(/^[a-zA-Z]+$/)) {
              formIsValid = false;
              errors["city"] = "Only letters";
            }
          }

          if (!fields["state"]) {
            formIsValid = false;
            errors["state"] = "Cannot be empty";
          }
      
          if (typeof fields["state"] !== "undefined") {
            if (!fields["state"].match(/^[a-zA-Z]+$/)) {
              formIsValid = false;
              errors["state"] = "Only letters";
            }
          }

          if (typeof fields["phone"] !== "undefined") {
            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(fields["phone"])) {
                formIsValid = false;
              errors["phone"] = "Please enter only number.";
            }
            else if(fields["phone"].length != 10){
                formIsValid = false;
                 errors["phone"] = "Please enter valid phone number.";
            }
          }

          if (!fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "Account Number must be specified";
          }

          if (typeof fields["account"] !== "undefined") {
            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(fields["account"])) {
                formIsValid = false;
              errors["account"] = "Please enter only number.";
            }
            else if(fields["account"].length != 16){
                formIsValid = false;
                 errors["account"] = "Please enter valid account number.";
            }
          }
          if (!fields["account"]) {
            formIsValid = false;
            errors["account"] = "Cannot be empty";
          }

          if (fields["password"] !== "undefined" &&  fields["confirm_Password"] !== "undefined") {
            if (fields["password"] != fields["confirm_Password"]) {
               formIsValid = false;
              errors["password"] = "Passwords don't match.";
        
            }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "Please enter a password";
        } else if (typeof fields["password"] !== "undefined") {
            if (!(fields["password"].length >= 6)) {
                formIsValid = false;
                emailPasswordInValid = true;
                errors["password"] = "Password is too short";
            }
        } else {
            errors["password"] = "";
        }


        this.setState({
            errors: errors,
            formIsValid: formIsValid
        })

        return formIsValid;
    }
    }
}