import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import axios from 'axios';

class Sites extends Component {

	constructor(props) {
			super(props);

			this.state = { sites: []};
	}
  componentWillMount() {
    // let temp_data = this.props.fetchSite();
    // this.setState({sites: temp_data.data})
    // console.log(temp_data);

      axios.get('/api/site')
        .then(res => {
          console.log('called ', res.data.data)
          this.setState({sites: res.data.data})
        });
  }

  render() {
    return (
      <div>
        <h1>Sites List here</h1>
        <ul>
        {
              this.state.sites.map( (site, index) => {
                return (
                    <li>
                      {site.name}
                    </li>
                  )
                }, this)
          }
        </ul>
      </div>
    );
  }
}

export default connect(null, actions)(Sites);
