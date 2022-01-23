import React from 'react';
import axios from 'axios';
import ReactDom from 'react-dom';
import Products from './products.component';
import { Link } from 'react-router-dom';

/*
Name:        View Products Cmponent
Child:       Product Cmponent
Parent:      App Component
Description: Component to display List of Products in both Admin Login and also View Products Page
*/
export default class ViewSoldHistory extends React.Component {

  //Constructor
  constructor() {
    super();
    this.state = { Sold_Histories: [], crop_Type: '', crop_Name: '', msp: '', sold_Price: '', total_Price: '' };
    this.componentDidMount();
  }

  //Get the list of All Products
  componentDidMount() {
    axios.get('http://localhost:5000/api/SoldHistory').then(response => {
      this.setState({
        Sold_Histories: response.data
      }
      );
      
    }).catch(function (error) {
      console.log(error.stack);
      
    });
    
  }


  render() {
    return (
      <div className='sold'>
      <div className="container">
        <br />
        <br />
        <div className="row">
          <h3><b>Sold History</b></h3>
          <table className="table table-striped table-hover" style={{ marginTop: 20 }}>
            <thead className='thead1'>
              <tr>
                {/* <th> Date </th> */}
                <th> Crop Type </th>
                <th> Crop Name </th>
                <th> MSP </th>
                <th> Sold Price</th>
                <th> Total Price</th>
              </tr>
            </thead>
            <tbody>
              {this.productList()}
            </tbody>
          </table>
        </div>
        <div className="form-group">
          <a href="/farmer"> <input type="submit" className="btn btn-success" value="Back" /></a>
        </div>
      </div>
      </div>
    )
  }


  productList() {
    let products = this.state.Sold_Histories;

    return this.state.Sold_Histories.map(
      function (currentProd, i) {
        return <Product products={products} prod={currentProd} key={i} />
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

class Product extends React.Component {

  constructor() {
    super();
    // this.editProduct = this.editProduct.bind(this);
    // this.deleteProduct = this.deleteProduct.bind(this);
  }

  render() {
    console.log(this.props.prod.length);
    if (this.props.prod.length == 0) {
      return (
        <tr>
          <td colspan="5"> NO CANDIDATES
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

          <td className={this.props.prod.msp}>
            {this.props.prod.msp} </td>

          <td className={this.props.prod.sold_Price}>
            {this.props.prod.sold_Price} </td>

          <td className={this.props.prod.total_Price}>
            {this.props.prod.total_Price} </td>

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
  validForm() {
    let product = this.state.product;
    let errors = {};
    let formIsValid = true;

    if (!product["number"]) {
        formIsValid = false;
        errors["number"] = "Please enter Amount";
    }


    this.setState({
        errors: errors,
        formIsValid: formIsValid
    })

    return formIsValid;
}

}

