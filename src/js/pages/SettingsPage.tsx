import * as React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom'

interface IState {}
interface IProps {}

export default class SettingsPage extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Settings here</h1>
        <button><Link to='/'>Finish</Link></button>
      </div>
    );
  }
}
=======
import * as ReactDOM from 'react-dom';
import App from './App';

console.log('testing');

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
>>>>>>> 0761dbc... もっと色々整理してみた
