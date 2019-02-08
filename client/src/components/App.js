// react, rendering layer
// components to render on screen
import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Sites from './sites/Sites';
import Edit_Site from './sites/Edit';
import Login from './auth/Login';
const Dashboard = () => <h2>Thumbs</h2>;
const Landing = () => <h2>Landing</h2>;


class App extends Component{
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <div className="container">
            <Route exact path="/" component={Login} />
            <Route path="/thumbs" component={Dashboard} />
            <Route exact path="/sites" component={Sites} />
            <Route exact path="/sites/edit/:id" component={Edit_Site} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
