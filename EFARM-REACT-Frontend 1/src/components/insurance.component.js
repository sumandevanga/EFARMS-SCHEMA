import React from 'react';

export default class Insurance extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center"> 
                            <br />
                            <br />
                            <br />
                            <h1 className="text-success" >
                                <b></b>
                            </h1>
                            <hr />
                            <div>
                            <h1>Insurance</h1>
                            </div>
                            <ul className="text-info list-group">
                               <a href="insuranceapplication"> <li className="list-group-item">Apply For Policy</li></a>
                               <a href="claimform"> <li className="list-group-item">Claim Insurance</li></a>
                               
                           </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}