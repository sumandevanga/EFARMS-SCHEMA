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
export default class ViewProducts extends React.Component {

  //Constructor
  constructor() {
    super();
    this.state = { sell_Requests: [], id: '' };
    this.componentDidMount();
  }

  //Get the list of All Products
  componentDidMount() {
    axios.get('http://localhost:5000/api/sellrequest').then(response => {
      this.setState({
        sell_Requests: response.data
      });
    }).catch(function (error) {
      console.log(error.stack);
    });
  }


  render() {
    return (
      <div className="container">
        <br />
        <br />
        <div className="row">
          <h3><b>Crop List</b></h3>
          <table className="table table-striped table-hover" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th> Crop Name </th>
                <th> Crop Type </th>
                <th> Fertilizer Type </th>
                <th> PH value</th>
                <th> Quantity</th>
                {/* <th> Sold History Type</th>
                <th> Market Place Crop Type</th>
                <th> Bidder Crop Type</th> */}
				
              </tr>
            </thead>
            <tbody>
              {this.productList()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }


  productList() {
    let products = this.state.sell_Requests;

    return this.state.sell_Requests.map(
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
          <td className={this.props.prod.crop_Name}>
            {this.props.prod.crop_Name}  </td>
          <td className={this.props.prod.crop_Type}>
            {this.props.prod.crop_Type}  </td>
          <td className={this.props.prod.fertilizer_type}>
            {this.props.prod.fertilizer_type} </td>
          <td className={this.props.prod.soil_ph}>
            {this.props.prod.soil_ph} </td>
          <td className={this.props.prod.quantity}>
            {this.props.prod.quantity} </td>
          {/* <td className={this.props.prod.SoldType}>
            {this.props.prod.Sold_Historycrop_Type} </td>
          <td className={this.props.prod.MarketCropType}>
            {this.props.prod.Market_Placecrop_Type} </td>
          <td className={this.props.prod.BidderCropType}>
            {this.props.prod.Welcome_Biddercrop_Type} </td> */}

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
  deleteProduct (id){
    axios.delete('http://localhost:5000/api/products/'+id).then(res => {
        window.location.reload();
    });
  }
}
