import React, { Component } from 'react';
import './App.css';
//Importing Components
import Home from './components/home.component'
import About from './components/about.component'
import Login from './components/login.component'
import Contact from './components/contact.component'
import Gallery from './components/gallery.component'
import ViewProducts from './components/view-products.component'
import Register from './components/register.component'
import FarmerRegister from './components/farmerregister.component';
//import logo from './logo1.svg';
//For Routing
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Products from './components/products.component';
import EditProduct from './components/edit-product.component';
import DetailsProduct from './components/details.component';
import Farmer from './components/farmer.component';
import SellRequest from './components/sellrequest.component';
import ViewSoldHistory from './components/view-soldhistory.component';
import ViewMarketPlace from './components/viewmarketplace.component';
import Insurance from './components/insurance.component';
import InsuranceApplication from './components/insurance-application.component';
import ClaimForm from './components/claimform.component';
import Bidder_Welcome from './components/bidder-welcome.component';
import AdminLogin from './components/adminlogin.component';
import FarmerLogin from './components/farmerlogin.component';
import BidderLogin from './components/bidderlogin.component';
import Index from './components/index.component';
import Bidder_Wel from './components/bidder-wel.component';
import AdminPage from './components/adminpage.component';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid" className="body">
          {/* <nav className="navbar navbar-expand navbar-expand-lg bg-dark">

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/home" className="nav-link text-white">
                    <b>Home</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/insurance" className="nav-link text-white">
                    <b>Insurance</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/view-products" className="nav-link text-white">
                    <b>View </b>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/bidder_welcome" className="nav-link text-white">
                    <b>Bidder </b>
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
              </ul>

              <ul className="navbar-nav ml-auto">
                <div class="dropdown show">
                  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="actions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
                  <div class="dropdown-menu" aria-labelledby="actions">
                    <a class="dropdown-item" href="adminlogin">Admin</a>
                    <a class="dropdown-item" href="farmerlogin">Farmer</a>
                    <a class="dropdown-item" href="bidderlogin">Bidder</a>
                  </div>
                </div>
                <li className="nav-item">
                  <Link to="/login" className="nav-link text-white">
                    <b>Login</b>
                  </Link>
                </li>
              </ul>
            </div>
          </nav> */}

          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/home" component={Home} />
            <Route path="/index" component={Index} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {/* <Route path="/gallery" component={Gallery} /> */}
            <Route path="/view-products" component={ViewProducts} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/farmerregister" component={FarmerRegister} />
            <Route path="/products" component={Products} />
            {/* <Route path="/edit-product/:id" component={EditProduct}></Route> */}
            {/* <Route path="/details/:id" component={DetailsProduct}></Route> */}
            <Route path="/farmer" component={Farmer} />
            <Route path="/sellrequest" component={SellRequest} />
            <Route path="/viewsoldhistory" component={ViewSoldHistory} />
            <Route path="/viewmarketplace" component={ViewMarketPlace} />
            <Route path="/insurance" component={Insurance} />
            <Route path="/insuranceapplication" component={InsuranceApplication} />
            <Route path="/claimform" component={ClaimForm} />
            {/* <Route path="/bidder_welcome" component={Bidder_Welcome} /> */}
            <Route path="/adminlogin" component={AdminLogin} />
            <Route path="/farmerlogin" component={FarmerLogin} />
            <Route path="/bidderlogin" component={BidderLogin} />
            <Route path="/bidder_wel" component={Bidder_Wel} />
            <Route path="/adminpage" component={AdminPage} />
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
