import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
 

export default class Login extends React.Component {


    //initializing initial state and binding controls
    constructor() {
        super();
        this.state = {
            fields: { email_ID: '', password: '' },
            errors: {},
            formIsValid: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitLoginForm = this.submitLoginForm.bind(this);
    }

    submitLoginForm(e) {
        e.preventDefault();
        if (this.validForm()) {
            alert('Login Successful!');
            this.props.history.push('/farmer');
        }
    }

    //Handler for detecting Changes
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields: fields
        });
    }

    //Rendering the View onto App Component
    render() {
        return (
            <div className='login'>
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
                    <h3 className="text-red">
                        LOGIN
                    </h3>
                    <form method="POST" name="loginForm" onSubmit={this.submitLoginForm} autocomplete="off">
                        <div className="form-group text-left">
                            <label>Email ID</label>
                            <input type="text" name="email_ID" value={this.state.fields.email_ID} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.email_ID ? 'alert alert-danger' : ''}>
                                {this.state.errors.email_ID}
                            </div>
                        </div>
                        <div className="form-group text-left">
                            <label >Password</label>
                            <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.password ? 'alert alert-danger' : ''}>
                                {this.state.errors.password}
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-success" value="Login" />
                        </div>
                        {/* <h6 ><a href='/register'>New User? Register Here As BIDDER</a></h6>
                        <h6 ><a href='/farmerregister'>New User? Register Here As FARMER</a></h6> */}
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

        if (!fields["email_ID"]) {
            formIsValid = false;
            errors["email_ID"] = "Please enter an email_ID";
        } else if (typeof fields["email_ID"] !== "undefined") {
            if (!(fields["email_ID"].match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/))) {
                formIsValid = false;

                emailPasswordInValid = true;
                errors["email_ID"] = "Please enter a proper email address";
            }
        } else {
            errors["email_ID"] = "";
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

        if (!(emailPasswordInValid)) {

            if (fields["email_ID"] == "admin@gmail.com" && fields["password"] == "123456") {

                let fields = {
                    email_ID: "",
                    password: ""
                }
                this.setState({
                    fields: fields
                })
                errors["general"] = "";
            } else {
                formIsValid = false;
                errors["general"] = "Incorrect Email or Password!";
            }
        }

        this.setState({
            errors: errors,
            formIsValid: formIsValid
        })

        return formIsValid;
    }
}