import React from 'react';
import axios from 'axios';
import ViewProducts from './view-products.component.js';

/*
Name:        Products Cmponent
Child:       None
Parent:      App Component
Description: Component to display Gallery for website
*/
export default class Products extends React.Component {

    constructor() {
        super();
        this.state = {
            product: { sell_Requests: [],name: '', type: '', fertilizer:'',phvalue:'',quantity:'' }
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    //Handle changes
    onChangeHandler(e) {
        let product = this.state.product;
        product[e.target.name] = e.target.value;
        this.setState({
            product: product
        });
    }

    //Function to add a Product to List
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
        axios.post('http://localhost:5000/api/sellrequest', newProduct).then(res => {
            window.location.reload();
        });
    }

    render() {
        return (
            <div className="container">
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                        <h3 className="text-red"><b>Crop Details</b></h3>
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
                {/*This is for the add product form*/}
                <form onSubmit={this.onSubmit} name="addProductForm">
                    <h5>ADD CROP DETAILS</h5>
                    <div className="row">
                        <div className="form-group col-md-3">
                            <label>Crop Name</label>
                            <input type="text" name="crop_Name" className="form-control" value={this.state.product.crop_Name} onChange={this.onChangeHandler} />
                        </div>
                        <div className="form-group col-md-3">
                            <label>Cost</label>
                            <input type="number" name="crop_Type" className="form-control" value={this.state.product.crop_Type} onChange={this.onChangeHandler} />
                        </div>
                        <div className="form-group col-md-3">
                            <label>Fertilizer</label>
                            <input type="text" name="fertilizer_type" className="form-control" value={this.state.product.fertilizer_type} onChange={this.onChangeHandler} />
                        </div>
                        <div className="form-group col-md-3">
                            <label>PH value</label>
                            <input type="text" name="soil_ph" className="form-control" value={this.state.product.soil_ph} onChange={this.onChangeHandler} />
                        </div>
                        <div className="form-group col-md-3">
                            <label>Quantity</label>
                            <input type="text" name="quantity" className="form-control" value={this.state.product.quantity} onChange={this.onChangeHandler} />
                        </div>
                        {/* <div className="form-group col-md-3">
                            <label>SoldType</label>
                            <input type="text" name="SoldType" className="form-control" value={this.state.product.SoldType} onChange={this.onChangeHandler} />
                        </div>
                        <div className="form-group col-md-3">
                            <label>MarketCropType</label>
                            <input type="text" name="MarketCropType" className="form-control" value={this.state.product.MarketCropType} onChange={this.onChangeHandler} />
                        </div>
                        <div className="form-group col-md-3">
                            <label>BidderCropType</label>
                            <input type="text" name="BidderCropType" className="form-control" value={this.state.product.BidderCropType} onChange={this.onChangeHandler} />
                        </div> */}
                        


                        <div className="form-group col-md-3">
                            <label>.</label>
                            <button type="submit" className="form-control btn btn-success">Place Request</button>
                        </div>
                    </div>
                </form>
                {/*This is to display the list of added products*/}
                <ViewProducts />
            </div>
        )
    }

}