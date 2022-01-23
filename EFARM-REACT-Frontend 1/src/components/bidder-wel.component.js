import React from 'react';
import axios from 'axios';
/*
Name:        Login Cmponent
Child:       None
Parent:      App Component
Description: Component for Login Validation and Rendering
*/
export default class Bidder_Wel extends React.Component {


    //initializing initial state and binding controls
    constructor() {
        super();
        this.state = {
            fields: { crop_Type: '', crop_Name: '', base_Price: '', curr_Bid: '', bid_Amount: '' },
            errors: {},
            formIsValid: true

        }
        this.handleChange = this.handleChange.bind(this);
        this.submitLoginForm = this.submitLoginForm.bind(this);
        this.componentDidMount();
    }

    submitLoginForm(e) {
        e.preventDefault();
        if (this.validForm()) {
            alert('Bid Successful!');
            this.props.history.push('Home');
        }
    }

    //Handler for detecting Changes
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields: fields
        });
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/WelcomeBidder').then(response => {
            this.setState({
                Welcome_Bidders: response.data
            });
        }).catch(function (error) {
            console.log(error.stack);
        });
    }
    //Rendering the View onto App Component
    render() {
        return (
        <div className='bidder'>
            <div className="container">
                <br />
                <br />
                <div className="row">
                    <h3 className="text-red1">
                        <b> Welcome Bidder</b>
                    </h3>
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

                        </tbody>
                    </table>
                </div>
                <div>
                </div>
                <div className="offset-lg-4 col-lg-4 text-center">
                    <br />
                    <br />
                    <br />
                    <br />
                    <form method="POST" name="loginForm" onSubmit={this.submitLoginForm} autocomplete="off">
                        <div className="form-group text-left">
                            <label>Bid Amount</label>
                            <input type="number" name="number" value={this.state.fields.number} onChange={this.handleChange} className="form-control" />
                            <div className={this.state.errors.number ? 'alert alert-danger' : ''}>
                                {this.state.errors.number}
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

    validForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["number"]) {
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