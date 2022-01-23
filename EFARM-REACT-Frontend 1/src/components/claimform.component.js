import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

/*
Name:        Login Cmponent
Child:       None
Parent:      App Component
Description: Component for Login Validation and Rendering
*/
export default class ClaimForm extends React.Component {


    //initializing initial state and binding controls
    constructor() {
        super();
        this.state = {
            product: { insurance_Company: '',policy_No : '',name_Of_Insuree : '',sum_Insured : '',cause_Of_Loss : '' },
            errors: {},
            formIsValid: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitLoginForm = this.submitLoginForm.bind(this);
    }

    submitLoginForm(e) {
        e.preventDefault();
        // if (this.validForm()) {
        var newProduct = {
            insurance_Company: this.state.product.insurance_Company,
            policy_No: this.state.product.policy_No,
            name_Of_Insuree: this.state.product.name_Of_Insuree,
            sum_Insured: this.state.product.sum_Insured,
            cause_Of_Loss: this.state.product.cause_Of_Loss

        }
        console.log(newProduct);
        axios.post('http://localhost:5000/api/claimForm', newProduct).then(res => {
            window.location.reload();

        });
        this.props.history.push('insurance');
        alert('Insurance Claimed Succesfully!');
    }
   // }
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
            <div>
            <nav className="navbar navbar-expand navbar-expand-lg bg-dark">
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item2">
                  <Link to="/about" className="nav-link text-white">
                    <b>Logout</b>
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
                        Particulars Of Insuree
                    </h3>
                    <form method="POST" name="loginForm" onSubmit={this.submitLoginForm} autocomplete="off">
                        <div className="form-group text-left">
                            <label>Insurance Company</label>
                            <input type="text" name="insurance_Company" value={this.state.product.insurance_Company} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.insurance_Company? 'alert alert-danger' : ''}>
                                {this.state.errors.insurance_Company}
                            </div>
                        </div>
                        <div className="form-group text-left">
                            <label >Policy Number</label>
                            <input type="text" name="policy_No" value={this.state.product.policy_No} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.policy_No ? 'alert alert-danger' : ''}>
                                {this.state.errors.policy_No}
                            </div>
                        </div>

                        <div className="form-group text-left">
                            <label >Sum Insured</label>
                            <input type="number" name="sum_Insured" value={this.state.product.sum_Insured} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.sum_Insured ? 'alert alert-danger' : ''}>
                                {this.state.errors.sum_Insured}
                            </div>
                        </div>

                        <div className="form-group text-left">
                            <label >Name Of Insuree</label>
                            <input type="text" name="name_Of_Insuree" value={this.state.product.name_Of_Insuree} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.name_Of_Insuree ? 'alert alert-danger' : ''}>
                                {this.state.errors.name_Of_Insuree}
                            </div>
                        </div>

                        <div className="form-group text-left">
                            <label >Cause Of Loss</label>
                            <input type="text" name="cause_Of_Loss" value={this.state.product.cause_Of_Loss} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.cause_Of_Loss ? 'alert alert-danger' : ''}>
                                {this.state.errors.cause_Of_Loss}
                            </div>
                        </div>

                        {/* <div className="form-group text-left">
                            <label >Date Of Loss</label>
                            <input type="number" name="dateofloss" value={this.state.product.dateofloss} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.dateofloss ? 'alert alert-danger' : ''}>
                                {this.state.errors.dateofloss}
                            </div>
                        </div> */}

                        <div className="form-group">
                            <input type="submit" className="btn btn-success" value="Claim" />
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
        let product = this.state.product;
        let errors = {};
        let formIsValid = true;
        

        // if (typeof product["insurance_Company"] !== "undefined") {
        //     if (!product["insurance_Company"].match(/^[a-zA-Z]+$/)) {
        //       formIsValid = false;
        //       errors["insurance_Company"] = "Only letters";
        //     }
        //   }

          if (!product["insurance_Company"]) {
            formIsValid = false;
            errors["insurance_Company"] = "Cannot be empty";
          }

          if (typeof product["cause_of_Loss"] !== "undefined") {
            if (!product["cause_of_Loss"].match(/^[a-zA-Z]+$/)) {
              formIsValid = false;
              errors["cause_of_Loss"] = "Only letters";
            }
          }

          if (!product["cause_of_Loss"]) {
            formIsValid = false;
            errors["cause_of_Loss"] = "Cannot be empty";
          }

          if (typeof product["name_Of_Insuree"] !== "undefined") {
            if (!product["name_Of_Insuree"].match(/^[a-zA-Z]+$/)) {
              formIsValid = false;
              errors["name_Of_Insuree"] = "Only letters";
            }
          }

          if (!product["name_Of_Insuree"]) {
            formIsValid = false;
            errors["name_Of_Insuree"] = "Cannot be empty";
          }

          if (typeof product["policy_No"] !== "undefined") {
            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(product["policy_No"])) {
                formIsValid = false;
              errors["policy_No"] = "Please enter only number";
            }
        }

    
        if (!product["policy_No"]) {
            formIsValid = false;
            errors["policy_No"] = "Cannot be empty";
          }

          if (typeof product["sum_Insured"] !== "undefined") {
            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(product["sum_Insured"])) {
                formIsValid = false;
              errors["sum_Insured"] = "Please enter only number";
            }
        }

    
        if (!product["sum_Insured"]) {
            formIsValid = false;
            errors["sum_Insured"] = "Cannot be empty";
          }


//----------------------------------------------------------------------------------------------------------------
        this.setState({
            errors: errors,
            formIsValid: formIsValid
        })

        return formIsValid;
    }
}
