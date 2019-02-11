import React, { Component } from 'react';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    onChangeHandler = (property_name, value) => {
        const temp_state = {};
        temp_state[property_name] = value;

        this.setState(temp_state);
    }
    render() {
        return (
            <div>
                <form onSubmit={
                    e =>
                    this.props.onLogin(e, {
                        email: this.state.email,
                        password: this.state.password
                    })
                }>
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