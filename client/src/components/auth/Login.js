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
        const temp_state = {};
        temp_state[property_name] = value;

        this.setState(temp_state);
    }
    submitHandler = () => {

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
        .then(response => console.log(response))
        .catch( err => console.log(err));
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" required="required" value={this.state.email} onChange={(e) => this.onChangeHandler('email', e.target.value)}>
                        </input>
                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required="required" value={this.state.password} onChange={(e) => this.onChangeHandler('password', e.target.value)}>
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