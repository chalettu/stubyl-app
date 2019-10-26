import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes.json';
/*eslint-disable-next-line */
const styles = require('./Home.css');
import axios from 'axios';
import * as path from 'path';
import * as fs from 'fs';
//import * as Handlebars from 'handlebars';
import Button from '@material-ui/core/Button';
import CodeContainer from './CodeContainer';
import * as Sqrl from 'squirrelly';

type Props = {};
const initialState = { test: '' };
type State = Readonly<typeof initialState>;
export default class Home extends Component<Props, State> {
  props: Props;
  readonly state: State = initialState;

  componentDidMount() {
    axios.get(`http://localhost:3009/testing`).then(res => {
      console.log(res.data.response);
      this.setState({ test: res.data.response });
    });
  }

  render() {
    const test = path.join(__dirname, 'files');

    const data = fs.readFileSync(`${test}/test.hbs`, 'utf8');
    // const template = Handlebars.compile(data);
    // console.log(template);
    const context = {
      models: [{ name: 'test', type: 'string', required: 'true' }]
    };
    const sourceCode = Sqrl.Render(data, context);
    //  const sourceCode = template(context);
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <div>test response {this.state.test}</div>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Link to={routes.COUNTER}>to Counter</Link>
        <CodeContainer code={sourceCode}></CodeContainer>
      </div>
    );
  }
}
