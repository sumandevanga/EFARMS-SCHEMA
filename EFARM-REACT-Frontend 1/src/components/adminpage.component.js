import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

export default class AdminPage extends React.Component {

  //initializing initial state and binding controls 
  render() {
    return (
      <div className='admin'>
        <nav className="navbar navbar-expand navbar-expand-lg bg-dark">
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item1">
                <Link to="/home" className="nav-link text-white">
                  <b>Home</b>
                </Link>
              </li>

              <li className="nav-item7">
                <Link to="/viewsoldhistory" className="nav-link text-white">
                  <b>SoldHistroy</b>
                </Link>
              </li>

              <li className="nav-item7">
                <Link to="/viewmarketplace" className="nav-link text-white">
                  <b>MarketPlace</b>
                </Link>
              </li>

              <li className="nav-item6">
                <Link to="/insurance" className="nav-link text-white">
                  <b>Insurance</b>
                </Link>
              </li>

              <li className="nav-item5">
                  <Link to="/bidder_wel" className="nav-link text-white">
                    <b>Bidding</b>
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
        <br/>
        <br/>
        <div className='centerab'>
          <p>
            <h2>Welcome to Admin Page</h2>
          </p>
        </div>
      </div>
    )
  }
}