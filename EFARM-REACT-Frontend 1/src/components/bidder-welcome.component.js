import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

/*
Name:        View Products Cmponent
Child:       Product Cmponent
Parent:      App Component
Description: Component to display List of Products in both Admin Login and also View Products Page
*/
export default class Bidder_Welcome extends React.Component {

    //Constructor
    constructor() {
        super();
        this.state = {
            product: {crop_Type: '', crop_Name: '', base_Price: '', curr_Bid: '', bid_Amount: ''},
            errors: {},
            formIsValid: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitLoginForm = this.submitLoginForm.bind(this);
        this.componentDidMount();
    }

    submitLoginForm(e) {
        e.preventDefault();
            var newProduct= {
                crop_Type: this.state.product.crop_Type,
                crop_Name: this.state.product.crop_Name,
                base_Price: this.state.product.base_Price,
                curr_Bid: this.state.product.curr_Bid,
                bid_Amount: this.state.product.bid_Amount,
            }
            alert('Bid Successful!');
            this.props.history.push('');
        
    }
    //Get the list of All Products
    componentDidMount(newProduct) {
        axios.post('http://localhost:5000/api/WelcomeBidder',newProduct).then(response => {
            this.setState({
                Welcome_Bidders: response.data
            });
        }).catch(function (error) {
            console.log(error.stack);

        });
    }
    handleChange(e) {
        let product = this.state.product;
        product[e.target.name] = e.target.value;
        this.setState({
            product: product
        });
    }
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand navbar-expand-lg bg-dark">
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link text-white">
                                    <b>Home</b>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/about" className="nav-link text-white">
                                    <b>About</b>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/contact" className="nav-link text-white">
                                    <b>Contact Us</b>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Home" className="nav-link text-white">
                                    <b>Logout</b>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
             
            <div className="container">
                <div className="row">
                    <h3><b>Sold History</b></h3>
                    <table className="table table-striped table-hover" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th> Crop Type </th>
                                <th> Crop Name </th>
                                <th> Base Price </th>
                                <th> Current Bid </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.productLists()}
                        </tbody>
                    </table>
                </div>
            
                <div className="offset-lg-4 col-lg-4 text-center">
                    <br />
                    <br />
                    <br />
                    <br />
                    <form method="POST" name="loginForm" onSubmit={this.submitLoginForm} autocomplete="off">
                        <div className="form-group text-left">
                            <label>Bid Amount</label>
                            <input type="number" name="bid_Amount" value={this.state.product.bid_Amount} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.bid_Amount ? 'alert alert-danger' : ''}>
                                {this.state.errors.bid_Amount}
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <input type="submit" className="btn btn-success" value="Confirm" />
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


    productLists() {
        let products = this.state.Welcome_Bidders;
        return this.state.Welcome_Bidders.map(
            function (currentPro, i) {
                return <Produce products={products} prod={currentPro} key={i} />
            }
        );
    }
}

/*
Name:        Product Cmponent
Child:       None
Parent:      View Products Component
Description: Component to display a row of a product
*/

class Produce extends React.Component {

    // constructor() {
    //     super();
    //     // this.editProduct = this.editProduct.bind(this);
    //     // this.deleteProduct = this.deleteProduct.bind(this);
    // }

    render() {
        console.log(this.props.prod.length);
        if (this.props.prod.length == 0) {
            return (
                <tr>
                    <td colspan="4"> NO CANDIDATES
                    </td>
                </tr>
            );
        } else {
            return (
                <tr>
                    <td className={this.props.prod.crop_Type}>
                        {this.props.prod.crop_Type}  </td>

                    <td className={this.props.prod.crop_Name}>
                        {this.props.prod.crop_Name}  </td>

                    <td className={this.props.prod.base_Price}>
                        {this.props.prod.base_Price} </td>

                    <td className={this.props.prod.curr_Bid}>
                        {this.props.prod.curr_Bid} </td>

                    {/* <td className={this.props.prod.SoldType}>
            {this.props.prod.Sold_Historycrop_Type} </td>
          <td className={this.props.prod.MarketCropType}>
            {this.props.prod.Market_Placecrop_Type} </td>
          <td className={this.props.prod.BidderCropType}>
            {this.props.prod.Welcome_Biddercrop_Type} </td>   */}
                    {/*<td><Link to={"/edit-product/"+this.props.prod.id}><button>edit</button></Link></td>
			<td><Link to={"/details/"+this.props.prod.id}><button>details</button></Link></td>
      <td><button onClick={() => this.deleteProduct(this.props.prod.id)}>delete</button></td>*/}
                </tr>
            );
        }
    }
    // editProduct (id){
    //   console.log('edit' + id);
    //   // ReactDom.render(
    //   //   <Products prodId={id}></Products>
    //   // );
    // }
    //deleteProduct (id){
    //axios.delete('http://localhost:5000/api/products/'+id).then(res => {
    // window.location.reload();
    // });
}

