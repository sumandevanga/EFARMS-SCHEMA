import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

export default class Index extends React.Component {
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

                {/* <ul className="navbar-nav ml-auto"> */}
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
              {/* </ul> */}

                <li className="nav-item">
                  <Link to="/contact" className="nav-link text-white">
                    <b>Contact Us</b>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <h1 className="text-success" >
                                <b></b>
                            </h1>
                            <hr />
                            <div>
                                <h1>Farmers Are The Backbone Of INDIA</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}