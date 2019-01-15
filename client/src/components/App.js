// react, rendering layer
// components to render on screen
import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Sites from './Sites';
const Dashboard = () => <h2>Dashboard</h2>;
const Landing = () => <h2>Landing</h2>;


class App extends Component{
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route path="/thumbs" component={Dashboard} />
            <Route path="/sites" component={Sites} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
