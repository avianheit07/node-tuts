import React, { Component } from 'react';
// import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';
import logo from '../../images/icon.jpg';

class Edit extends Component {

	constructor(props) {
			super(props);

			this.state = { site: {}};
	}
  componentWillMount() {
    // let temp_data = this.props.fetchSite();
    // this.setState({sites: temp_data.data})
    // console.log(temp_data);
    const param_id = this.props.match.params.id;
      axios.get('/api/site/' + param_id)
        .then(res => {
          this.setState({site: res.data.data})
        });

  }
  nameHandler = (event) => {
    const old_data = {...this.state.site}
    old_data.name = event.target.value
      this.setState( {site: old_data})
  }
  clickHandler = () => {
    axios.post('/api/site/' + this.state.site.id, this.state.site)
      .then(res => {
        console.log('done')
      })
  }
  render() {
    return (
      <div>
        <ul className="collection with-header">
					<li className="collection-header"><h3> Sites </h3></li>
            <li className="collection-item avatar" id={this.state.site.id} key={"key_this.state.sites_" + this.state.site.id}>
              <img src={logo} alt="" className="circle" />
              <input type="hidden" value={this.state.site.id} name="id"/>
              <span className="title"> <input type="text" name="site_name" value={this.state.site.name} onChange={this.nameHandler}/> </span>
              <p> Url: {this.state.site.url} <br/>
              Acronym: {this.state.site.acronym}
              </p>
              <a href="http://example.com" className="secondary-content" onClick={this.clickHandler}><i className="material-icons">Edit</i></a>
            </li>
        </ul>
      </div>
    );
  }
}

export default connect(null, actions)(Edit);
