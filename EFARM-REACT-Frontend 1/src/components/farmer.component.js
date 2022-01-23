import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
export default class Farmer extends React.Component {
  render() {
    return (
      <div className='farmer'>
        <nav className="navbar navbar-expand navbar-expand-lg bg-dark">
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item1">
                <Link to="/home" className="nav-link text-white">
                  <b>Home</b>
                </Link>
              </li>

              <li className="nav-item6">
                <Link to="/insurance" className="nav-link text-white">
                  <b>Insurance</b>
                </Link>
              </li>

              <li className="nav-item1">
                <Link to="/about" className="nav-link text-white">
                  <b>About</b>
                </Link>
              </li>

              <li className="nav-item8">
                <Link to="/contact" className="nav-link text-white">
                  <b>Contact Us</b>
                </Link>
              </li>
              <li className="nav-item6">
                <Link to="/Home" className="nav-link text-white">
                  <b>Logout</b>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <br />
              <br />
              <br />
              <hr />
              <div>
                <h1>Welcome Farmer</h1>
              </div>
              <br />
              <div className='centerabc'>
              <ul className="text-info list-group">
                <a className='a1' href="sellrequest"> Place Sell Request</a>
                <a className='a1' href="viewsoldhistory"> View Sold Crop History</a>
                <a className='a1' href="viewmarketplace"> View Market Place</a>
              </ul>
              </div>
            </div>
          </div>
        </div>
    )
  }
}