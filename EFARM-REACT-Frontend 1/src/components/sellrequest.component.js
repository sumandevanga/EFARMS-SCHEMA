import React from 'react';
import axios from 'axios';
import ViewProducts from './view-products.component.js';
/*
Name:        Login Cmponent
Child:       None
Parent:      App Component
Description: Component for Login Validation and Rendering
*/
export default class SellRequest extends React.Component {


    //initializing initial state and binding controls
    constructor() {
        super();
        this.state = {
            product: { name: '', type: '', fertilizer: '', phvalue: '', quantity: '', SoldType: '', MarketCropType: '', BidderCropType: '' },
            errors: {},
            formIsValid: true
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        var newProduct = {
            crop_Name: this.state.product.crop_Name,
            crop_Type: this.state.product.crop_Type,
            fertilizer_type: this.state.product.fertilizer_type,
            soil_ph: this.state.product.soil_ph,
            quantity: this.state.product.quantity

        }
        console.log(newProduct);
        axios.post('http://localhost:5000/api/SellRequest', newProduct).then(res => {
            window.location.reload();

        });
        this.props.history.push('/farmer');
        alert('Added Successfully!');
    }

    //Handler for detecting Changes
    onChangeHandler(e) {
        let product = this.state.product;
        product[e.target.name] = e.target.value;
        this.setState({
            product: product
        });
    }

    //Rendering the View onto App Component
    render() {
        return (
            <div className="row">
                <div className="offset-lg-4 col-lg-4 text-center">
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3 className="text-red">
                        Sell Request
                    </h3>
                    <form onSubmit={this.onSubmit} name="addProductForm">
                        <div className="form-group text-left">
                            <label>Crop Name</label>
                            <input type="text" name="crop_Name" className="form-control" value={this.state.product.crop_Name} onChange={this.onChangeHandler} />
                            <div className={this.state.errors.croptype ? 'alert alert-danger' : ''}>
                                {this.state.errors.croptype}
                            </div>
                        </div>
                        <div className="form-group text-left">
                            <label >Crop type</label>
                            <input list="hosting-plan" type="text" name="crop_Type" className="form-control" value={this.state.product.crop_Type} onChange={this.onChangeHandler} />
                            <datalist id="hosting-plan">
                                <option value='Kharif Crops'>Kharif Crops</option>
                                <option value='Rabi Crops'>Rabi Crops</option>
                                <option value='Commercial Crops'>Commercial Crops</option>
                            </datalist>
                            <div className={this.state.errors.cropname ? 'alert alert-danger' : ''}>
                                {this.state.errors.cropname}
                            </div>
                        </div>

                        <div className="form-group text-left">
                            <label >Fertilizer Type</label>
                            <input type="text" name="fertilizer_type" className="form-control" value={this.state.product.fertilizer_type} onChange={this.onChangeHandler} />
                            <div className={this.state.errors.fertilizertype ? 'alert alert-danger' : ''}>
                                {this.state.errors.fertilizertype}
                            </div>
                        </div>

                        <div className="form-group text-left">
                            <label >Soil PH</label>
                            <input type="number" name="soil_ph" className="form-control" value={this.state.product.soil_ph} onChange={this.onChangeHandler} />
                            <div className={this.state.errors.quantity ? 'alert alert-danger' : ''}>
                                {this.state.errors.quantity}
                            </div>
                        </div>

                        <div className="form-group text-left">
                            <label >Quantity</label>
                            <input type="number" name="quantity" className="form-control" value={this.state.product.quantity} onChange={this.onChangeHandler} />
                            <div className={this.state.errors.soilph ? 'alert alert-danger' : ''}>
                                {this.state.errors.soilph}
                            </div>
                        </div>

                        <div className="form-group">
                            <input type="submit" className="btn btn-success" value="Place Request" />

                        </div>

                        <div className={this.state.errors.general ? 'alert alert-danger' : ''}>
                            {this.state.errors.general}
                        </div>

                    </form>
                    
                </div>
                <ViewProducts />
            </div>
        )
    }

    validForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;


        if (typeof fields["croptype"] !== "undefined") {
            if (!fields["croptype"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["croptype"] = "Only letters";
            }
        }

        if (!fields["croptype"]) {
            formIsValid = false;
            errors["croptype"] = "Cannot be empty";
        }

        if (typeof fields["cropname"] !== "undefined") {
            if (!fields["cropname"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["croptype"] = "Only letters";
            }
        }

        if (!fields["cropname"]) {
            formIsValid = false;
            errors["cropname"] = "Cannot be empty";
        }

        if (typeof fields["fertilizertype"] !== "undefined") {
            if (!fields["fertilizertype"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["fertilizertype"] = "Only letters";
            }
        }

        if (!fields["fertilizertype"]) {
            formIsValid = false;
            errors["fertilizertype"] = "Cannot be empty";
        }

        if (typeof fields["soilph"] !== "undefined") {
            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(fields["soilph"])) {
                formIsValid = false;
                errors["soilph"] = "Please enter only number";
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