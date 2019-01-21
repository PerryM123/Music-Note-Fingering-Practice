import * as React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom'

interface IState {}
interface IProps {}

export default class SettingsPage extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
<<<<<<< HEAD
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
=======
import { Link } from 'react-router-dom'
>>>>>>> dc510d6... ルーティングを導入

interface IState {}
interface IProps {}

export default class SettingsPage extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    // this.state = {
    //   userType: null,
    //   firstName: 'Whelp',
    //   lastName: 'delp',
    //   middleName: 'hawt',
    //   counter: 0,
    //   salary: null
    // };
=======
>>>>>>> e44cc5e... 音符の変数を用意
  }

<<<<<<< HEAD
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
>>>>>>> 0761dbc... もっと色々整理してみた
=======
  render() {
    return (
      <div>
        <h1>Settings here</h1>
        <button><Link to='/'>Finish</Link></button>
      </div>
    );
  }
}
>>>>>>> dc510d6... ルーティングを導入
