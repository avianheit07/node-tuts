// react, rendering layer
// components to render on screen
import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Sites from './sites/Sites';
import Edit_Site from './sites/Edit';
import Login from './auth/Login';
import axios from 'axios';
const Dashboard = () => <h2>Thumbs</h2>;

const isLoggedIn = () => <h1> You are Logged In</h1>;

class App extends Component{
  state = { 
    isAuth: false,
    userId: null
  }
  loginHandler = (event, authData) => {
    console.log('i am called')
    event.preventDefault();
    const graphqlQuery = {
      query: `
        {
          login(email: "${authData.email}", password: "${authData.password}") {
            _id
          }
        }
      `
    }
    console.log(graphqlQuery);
    axios.post('/graphql', graphqlQuery)
    .then( res => {
      // if(res.errors) {
      //   console.log('failed')
      //   throw new Error('User login failed!');
      // }
      console.log(res, 'login success')
      this.setState({
        isAuth: true,
        userId: res.data.data.login._id
      });
      console.log(this.state);
    })
    .catch( err => console.log(err));
  }

  logoutHandler = () => {
    this.setState({isAuth: false, userId: null});
  }
  render() {
    let routes = (
      <Switch>
        <Route exact path="/" render={props => (
          <Login 
          {...props}
          onLogin={this.loginHandler}
          /> 
        )}/>
      </Switch>
    )
    let sitesRoute = (
      <Switch>
        <Route exact path="/sites" render={
          props => (
            <Sites
              {...props}
              isAuth={this.state.isAuth}
            />
          )
        } />
      </Switch>
    )
    if(this.state.isAuth) {
      routes = (
        <Switch>
          <Route
            path="/"
            exact
            component={isLoggedIn}
          />
          )}/>
        </Switch>
      )
      sitesRoute = (
        <Switch>
          <Route exact path="/sites" render={
            props => (
              <Sites
                {...props}
                isAuth={this.state.isAuth}
              />
            )
          } />
        </Switch>
      )
    }
    return (
      <div>
        <Header {...this.state} onLogout={this.logoutHandler}/>
        <BrowserRouter>
          <div className="container">
            {routes}
            {sitesRoute}
            <Route path="/thumbs" component={Dashboard} />
            <Route exact path="/sites/edit/:id" component={Edit_Site} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
