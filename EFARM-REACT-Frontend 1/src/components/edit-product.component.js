import axios from 'axios';
import React from "react";
import { withRouter } from 'react-router-dom';

class EditProduct extends React.Component {

    
    constructor() {
        super();
        this.id = window.location.href.split('/').pop();
        this.state = {
            product: { name: '', cost: '' }
        };
        this.componentDidMount();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/products/'+this.id).then(res => {
            let product = {name: res.data.name, cost: res.data.cost};
            this.setState({
                product: product
            });
        });
    }

    onSubmit(e) {
        e.preventDefault();
        var newProduct = {
            name: this.state.product.name,
            cost: this.state.product.cost
        }
        newProduct.id = this.id;
        axios.put('http://localhost:5000/api/products/'+this.id, newProduct).then(res => {
            this.props.history.push('/products');
        }).catch(e => console.error(e));
    }

    onChangeHandler(e) {
        let product = this.state.product;
        product[e.target.name] = e.target.value;
        this.setState({
            product: product
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
                        <h3 className="text-red"><b>MANAGE PRODUCTS</b></h3>
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
                {/*This is for the add product form*/}
                <form onSubmit={this.onSubmit} name="editProductForm">
                    <h5>EDIT PRODUCT</h5>
                    <div className="row">
                        <div className="form-group col-md-3">
                            <label>Name</label>
                            <input type="text" name="name" className="form-control" value={this.state.product.name} onChange={this.onChangeHandler} />
                        </div>
                        <div className="form-group col-md-3">
                            <label>Cost</label>
                            <input type="number" name="cost" className="form-control" value={this.state.product.cost} onChange={this.onChangeHandler} />
                        </div>
                        <div className="form-group col-md-3">
                            <label>.</label>
                            <button type="submit" className="form-control btn btn-success">SUBMIT</button>
                        </div>
                        {/* <i className="trash alternate outline icon"
        style={{colour:"red" }}
        onClick={() => props.clickHandler(id)}
        ></i> */}
                    </div>
                </form>
            </div>
        )
    }
}

export default EditProduct;