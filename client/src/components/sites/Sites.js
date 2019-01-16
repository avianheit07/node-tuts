import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';
import logo from '../../images/icon.jpg';

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
          this.setState({sites: res.data.data})
        });
  }

  render() {
    return (
      <div>
        <ul className="collection with-header">
					<li className="collection-header"><h3> Sites </h3></li>
            {
              this.state.sites.map( (site, index) => {
                return (
                    <li className="collection-item avatar" id={site.id} key={"key_site_" + site.id}>
                      <img src={logo} alt="" className="circle" />
                      <span className="title"> {site.name} </span>
                      <p> Url: {site.url} <br/>
                      Acronym: {site.acronym}
                      </p>
                      <a href="/sites/edit" className="secondary-content"><i className="material-icons">Edit</i></a>
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
