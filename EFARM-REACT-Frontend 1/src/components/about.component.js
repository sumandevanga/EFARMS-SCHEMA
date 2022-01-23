import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
/*
Name:        About Cmponent
Child:       None
Parent:      App Component
Description: Component to display About Section of the webstite
*/
export default class About extends React.Component {
  render() {
    return (
      <div>
            <nav className="navbar navbar-expand navbar-expand-lg bg-dark">
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item6">
                                <Link to="/home" className="nav-link text-white">
                                    <b>Home</b>
                                </Link>
                            </li>

                            <li className="nav-item6">
                                <Link to="/about" className="nav-link text-white">
                                    <b>About</b>
                                </Link>
                            </li>

                            {/* </ul> */}

                            <li className="nav-item8">
                                <Link to="/contact" className="nav-link text-white">
                                    <b>Contact Us</b>
                                </Link>
                            </li>

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
              </nav>
      <div className="container">
        <br />
        <br />
        <h2><b>ABOUT</b></h2>
        <p>
        Farming is growing crops and keeping animals for food and raw materials. Farming is a part of agriculture.

Agriculture started thousands of years ago, but no one knows for sure how old it is. The development of farming gave rise to the Neolithic Revolution as people gave up nomadic hunting and became settlers in cities.

Agriculture and domestication probably started in the Fertile Crescent (the Nile Valley, the Levant and Mesopotamia). The area called Fertile Crescent is now in the countries of Iraq, Syria, Turkey, Jordan, Lebanon, Israel, and Egypt. Wheat and barley are some of the first crops people grew. People probably started agriculture slowly by planting a few crops, but still gathered many foods from the wild. People may have started farming because the weather and soil began to change. Farming can feed many more people than hunter-gatherers can feed on the same amount of land.
        </p>
        </div>
        </div>
        
    )
  }
}