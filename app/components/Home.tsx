import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
const routes = require('../constants/routes.json');
const styles = require('./Home.css');
import axios from 'axios';

type Props = {};
const initialState = {test: ''};
type State = Readonly<typeof initialState>
export default class Home extends Component<Props, State> {
  props: Props;
readonly state: State = initialState;

  componentDidMount() {
      axios.get(`http://localhost:3009/testing`)
        .then(res => {
          console.log(res.data.response);
          this.setState({ test: res.data.response });
        })
    }
  
  render() {


    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <div>
          test response {this.state.test}
        </div>
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}
