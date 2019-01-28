import axios from 'axios';
// import { FETCH_SITES } from './sites.js';

export const fetchSite = () => {
  return function(dispatch) {
    axios.get('/api/site')
      .then(res => {
        console.log('called ', res.data.data)
        dispatch({type: '', payload: res.data.data})
      });
  }
  // const request = axios.get('/api/site/all');

  // return {
  //   type: FETCH_SITES,
  //   payload: request
  // }
}
