import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    // state = {
    //     loginForm: {
    //         email: {
    //             value: '',
    //             valid: false,
    //             touched: false,
    //             validators: [required, email]
    //         },
    //         password: {
    //             value: '',
    //             valid: false,
    //             touched: false,
    //             validators: [required, length({min: 5})]
    //         },
    //         formIsValid: false
    //     }
    // }
    onChangeHandler = (property_name, value) => {
        this.setState({[property_name]: value})
    }
    submitHandler() {
        console.log('query here');
        const graphqlQuery = {
            query: `
                {
                    getUser(email: "${this.state.email}", password: "${this.state.password}") {
                        _id
                    }
                }
            `
        }
        axios.post('/graphql', graphqlQuery)
        .then((response) => {
            console.log(response);
        }).catch( (err) => console.log(err));
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div className="input">
                        <label for="email">Email</label>
                        <input type="text" id="email" required="required" onChange={(e) => this.onChangeHandler('email', e.target.value)}>
                        </input>
                    </div>
                    <div className="input">
                        <label for="password">Password</label>
                        <input type="password" id="password" required="required" onChange={(e) => this.onChangeHandler('password', e.target.value)}>
                        </input>
                    </div>
                    <div className="input">
                        <button type="submit" className="btn"> Login </button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;