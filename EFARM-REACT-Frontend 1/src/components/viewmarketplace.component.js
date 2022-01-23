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
export default class ViewMarketPlace extends React.Component {

  //Constructor
  constructor() {
    super();
    this.state = { Market_Places: [], crop_Type: '', crop_Name: '', base_Price: '', curr_Bid: '', Previous_Bid: '' };
    this.componentDidMount();
  }

  //Get the list of All Products
  componentDidMount() {
    axios.get('http://localhost:5000/api/MarketPlace').then(response => {
      this.setState({
        Market_Places: response.data
      });
    }).catch(function (error) {
      console.log(error.stack);
    });
  }


  render() {
    return (
      <div className='market'>
        <div className="container">
          <br />
          <br />
          <div className="row">
            <h3><b>Market History</b></h3>
            <table className="table table-striped table-hover" style={{ marginTop: 20 }}>
              <thead className='thead2'>
                <tr>
                  <th> Crop Type </th>
                  <th> Crop Name </th>
                  <th> Base Price </th>
                  <th> Current Bid Amount</th>
                  <th> Previous Bid</th>
                </tr>
              </thead>
              <tbody>
                {this.productList()}
              </tbody>
            </table>
          </div>
          <div className="from-group">
            <a href="/farmer"> <input type="submit" className="btn btn-success " value="Back" /></a>
          </div>
        </div>
      </div>
    )
  }


  productList() {
    let products = this.state.Market_Places;

    return this.state.Market_Places.map(
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

          <td className={this.props.prod.base_Price}>
            {this.props.prod.base_Price} </td>

          <td className={this.props.prod.curr_Bid}>
            {this.props.prod.curr_Bid} </td>

          <td className={this.props.prod.previous_Bid}>
            {this.props.prod.previous_Bid} </td>

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

