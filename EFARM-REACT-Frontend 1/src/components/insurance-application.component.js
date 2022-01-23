import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
/*
Name:        Login Cmponent
Child:       None
Parent:      App Component
Description: Component for Login Validation and Rendering
*/
export default class InsuranceApplication extends React.Component {


  //initializing initial state and binding controls
  constructor() {
    super();
    this.state = {
      product: { season:'',year:'',crop:'',area:'',sum_Insured:'',share_Premium:'',premium_Amount:'',total_sum:'',insurance_Company:''},
      errors: {},
      formIsValid: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);
  }

  handleChange(e) {
    let product = this.state.product;
    product[e.target.name] = e.target.value;
    this.setState({
      product: product
    });
  }
  submitLoginForm(e) {
    e.preventDefault();
    var newProduct = {
      season: this.state.product.season,
      year: this.state.product.year,
      crop: this.state.product.crop,
      area: this.state.product.area,
      sum_Insured: this.state.product.sum_Insured,
      share_Premium: this.state.product.share_Premium,
      premium_Amount: this.state.product.premium_Amount,
      total_sum: this.state.product.total_sum,
      insurance_Company:this.state.product.insurance_Company

  }
  console.log(newProduct);
  axios.post('http://localhost:5000/api/Insurances', newProduct).then(res => {
      window.location.reload();

  });
  this.props.history.push('insurance');
  alert('Insurance Applied Successfully!');
  }

  //Handler for detecting Changes
 
  // cancelCourse(){
  //   this.fields.season.value="";
  //   this.fields.year.value="";
  //   this.fields.suminsured.value="";
  //   this.fields.area.value="";
  //   this.fields.crop.value="";
  // }

  //Rendering the View onto App Component
  
  render() {
    return (
      <div>
            <nav className="navbar navbar-expand navbar-expand-lg bg-dark">
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
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
            Application Form
          </h3>
          <form method="POST" name="loginForm" onSubmit={this.submitLoginForm} autocomplete="off">
            <div className="form-group text-left">
              <label>Season</label>
              <input type="text" name="season" value={this.state.product.season} onChange={this.handleChange} className="form-control" />
              <div className={this.state.errors.season ? 'alert alert-danger' : ''}>
                {this.state.errors.season}
              </div>
            </div>
            <div className="form-group text-left">
              <label >Year</label>
              <input type="number" name="year" value={this.state.product.year} onChange={this.handleChange} className="form-control" />
              <div className={this.state.errors.year ? 'alert alert-danger' : ''}>
                {this.state.errors.year}
              </div>
            </div>

            <div className="form-group text-left"> 
              <label >Crop</label>
              <input list="hosting-plan" type="text" name="crop" value={this.state.product.crop} onChange={this.handleChange} className="form-control" />
              <datalist id="hosting-plan">
              <option value='Kharif Crops'>Kharif Crops</option>
                <option value='Rabi Crops'>Rabi Crops</option>
                <option value='Commercial Crops'>Commercial Crops</option>
              </datalist>
              <div className={this.state.errors.crop ? 'alert alert-danger' : ''}>
                {this.state.errors.crop}
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
              <label >Area</label>
              <input type="text" name="area" value={this.state.product.area} onChange={this.handleChange} className="form-control" />
              <div className={this.state.errors.area ? 'alert alert-danger' : ''}>
                {this.state.errors.area}
              </div>
            </div>

            <div className="form-group">
              <input type="reset" className="btn btn-success" value="Reset"  />
              <br/>
              <br/>
              <input type="submit" className="btn btn-success" value="Calculate" />
            </div>
            <div className={this.state.errors.general ? 'alert alert-danger' : ''}>
              {this.state.errors.general}
            </div>
            

            <div className="form-group text-left">
              <label >Insurance Company</label>
              <input list="hosting-pl" type="text" name="insurance_Company" value={this.state.product.insurance_Company} onChange={this.handleChange} className="form-control" />
              <datalist id="hosting-pl">
              <option value='FasalBimaYojana'>Fasal Bima Yojana</option>
              </datalist>
              <div className={this.state.errors.insurance_Company ? 'alert alert-danger' : ''}>
                {this.state.errors.insurance_Company}
              </div>
            </div>

            <div className="form-group text-left">
              <label >Share Premium</label>
              <input type="text" name="share_Premium" value={this.state.product.share_Premium} onChange={this.handleChange} className="form-control" />
              <div className={this.state.errors.share_Premium ? 'alert alert-danger' : ''}>
                {this.state.errors.share_Premium}
              </div>
            </div>

            <div className="form-group text-left">
              <label > Premium Amount</label>
              <input type="text" name="premium_Amount" value={this.state.product.premium_Amount} onChange={this.handleChange} className="form-control" />
              <div className={this.state.errors.premium_Amount ? 'alert alert-danger' : ''}>
                {this.state.errors.premium_Amount}
              </div>
            </div>

            <div className="form-group text-left">
              <label > Total Sum</label>
              <input type="text" name="total_sum" value={this.state.product.total_sum} onChange={this.handleChange} className="form-control" />
              <div className={this.state.errors.total_sum ? 'alert alert-danger' : ''}>
                {this.state.errors.total_sum}
              </div>
            </div>
            <input type="submit" className="btn btn-success" value="Apply"  />
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


    if (typeof fields["season"] !== "undefined") {
      if (!fields["season"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["season"] = "Only letters";
      }
    }

    if (!fields["season"]) {
      formIsValid = false;
      errors["season"] = "Cannot be empty";
    }

    if (typeof fields["crop"] !== "undefined") {
      if (!fields["crop"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["crop"] = "Only letters";
      }
    }

    if (!fields["crop"]) {
      formIsValid = false;
      errors["crop"] = "Cannot be empty";
    }

    if (typeof fields["area"] !== "undefined") {
      if (!fields["area"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["area"] = "Only letters";
      }
    }

    if (!fields["area"]) {
      formIsValid = false;
      errors["area"] = "Cannot be empty";
    }

    if (typeof fields["suminsured"] !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(fields["suminsured"])) {
        formIsValid = false;
        errors["suminsured"] = "Please enter only number.";
      }
    }


    if (!fields["soilph"]) {
      formIsValid = false;
      errors["soilph"] = "Cannot be empty";
    }


    if (typeof fields["quantity"] !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(fields["quantity"])) {
        formIsValid = false;
        errors["quantity"] = "Please enter only number";
      }
    }
    if (!fields["quantity"]) {
      formIsValid = false;
      errors["quantity"] = "Cannot be empty";
    }
    //----------------------------------------------------------------------------------------------------------------
    this.setState({
      errors: errors,
      formIsValid: formIsValid
    })

    return formIsValid;
  }
}