import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


export default class BidderLogin extends React.Component {


    //initializing initial state and binding controls
    constructor() {
        super();
        this.state = {
            product: { email_ID: '', password: '' },
            errors: {},
            formIsValid: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitLoginForm = this.submitLoginForm.bind(this);
    }

    // submitLoginForm(e) {
    //     e.preventDefault();
    //     if (this.validForm()) {
    //         alert('Login Successful!');
    //         this.props.history.push('/insurance');
    //     }
    // }

    submitLoginForm(e) {
        e.preventDefault();
        if (this.validForm()) {
        var newProduct = {
            email_ID: this.state.product.email_ID,
            password: this.state.product.password,
        }
        console.log(newProduct);
        axios.post('http://localhost:5000/api/Bidder', newProduct).then(res => {
            window.location.reload();
        });
        this.props.history.push('/bidder_wel');
        alert('Bidder Login Successfully!');
    }
}
    //Handler for detecting Changes
    handleChange(e) {
        let product = this.state.product;
        product[e.target.name] = e.target.value;
        this.setState({
            product: product
        });
    }

    //Rendering the View onto App Component
    render() {
        return (
            <div className='bidderlogin'>
            <nav className="navbar navbar-expand navbar-expand-lg bg-dark">
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item1">
                  <Link to="/Home" className="nav-link text-white">
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
                    <b>ContactUs</b>
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
                        BIDDER LOGIN
                    </h3>
                    <form method="POST" name="loginForm" onSubmit={this.submitLoginForm} autocomplete="off">
                        <div className="form-group text-left">
                            <label>Email ID</label>
                            <input type="text" name="email_ID" value={this.state.product.email_ID} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.email_ID ? 'alert alert-danger' : ''}>
                                {this.state.errors.email_ID}
                            </div>
                        </div>
                        <div className="form-group text-left">
                            <label >Password</label>
                            <input type="password" name="password" value={this.state.product.password} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.password ? 'alert alert-danger' : ''}>
                                {this.state.errors.password}
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-success" value="Login" />
                        </div>
                         <h6 ><a href='/register'>New User? Register Here As BIDDER</a></h6>
                       {/* <h6 ><a href='/farmerregister'>New User? Register Here As FARMER</a></h6> */}
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
        let product = this.state.product;
        let errors = {};
        let formIsValid = true;
        // let emailPasswordInValid = false;

        if (!product["email_ID"]) {
            formIsValid = false;
            errors["email_ID"] = "Please enter an email_ID";
        } else if (typeof product["email_ID"] !== "undefined") {
            if (!(product["email_ID"].match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/))) {
                formIsValid = false;

                //emailPasswordInValid = true;
                errors["email_ID"] = "Please enter a proper email address";
            }
        } else {
            errors["email_ID"] = "";
        }


        if (!product["password"]) {
            formIsValid = false;
            errors["password"] = "Please enter a password";
        } else if (typeof product["password"] !== "undefined") {
            if (!(product["password"].length >= 6)) {
                formIsValid = false;
                //emailPasswordInValid = true;
                errors["password"] = "Password is too short";
            }
        } else {
            errors["password"] = "";
        }

        // if (!(emailPasswordInValid)) {

        //     if (product["email_ID"] == "admin@gmail.com" && product["password"] == "123456") {

        //         let product = {
        //             email_ID: "",
        //             password: ""
        //         }
        //         this.setState({
        //             product: product
        //         })
        //         errors["general"] = "";
        //     } else {
        //         formIsValid = false;
        //         errors["general"] = "Incorrect Email or Password!";
        //     }
        // }

        this.setState({
            errors: errors,
            formIsValid: formIsValid
        })

        return formIsValid;
    }
}