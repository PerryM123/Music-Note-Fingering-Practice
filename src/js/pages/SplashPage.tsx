import * as React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom'

interface IState {
<<<<<<< HEAD
<<<<<<< HEAD
  availableNotes: Array<string>
}
interface IProps {}

export default class SplashPage extends React.Component<IProps, IState> {
  // make the below a constant
  // maybe make it so that there is an interface like:
  //    -Music note (a, b, c, etc)
  //    -Note type (natural, flat, sharp)
  notesList: Array<string> = [
    'Low B',
    'Low B♭',
    'Low C',
    'Low C♭',
    'Low C♯',
    'Low D',
    'Low D♭',
    'Low D♯',
    'Low E',
    'Low E♭',
    'Low E♯',
    'Low F',
    'Low F♭',
    'Low F♯',
    'G',
    'G♭',
    'G♯',
    'A',
    'A♭',
    'A♯',
    'B',
    'B♭',
    'B♯',
    'C',
    'C♭',
    'C♯',
    'D',
    'D♭',
    'D♯',
    'E',
    'E♭',
    'E♯',
    'F',
    'F♭',
    'F♯',
    'High A',
    'High A♭',
    'High A♯',
    'High B',
    'High B♭',
    'High B♯',
    'High C',
    'High C♭',
    'High C♯',
    'High D',
    'High D♭',
    'High D♯',
    'High E',
    'High E♭',
    'High E♯',
    'High F',
    'High F♭',
    'High F♯',
    'High G',
    'High G♭',
    'High G♯'
  ];

  constructor(props: any) {
    super(props);

    this.state = {
      availableNotes: this.notesList
    }
  }

  render() {
  console.log(this.state);
    return (
      <div>
        <div>
          Icon here
        </div>
        <h2>Title here</h2>
        <ul>
          <li><Link to={{
            pathname: '/music-notes/',
            state: {
              notesList: this.state.availableNotes,
              speed: 2
            }
          }}>Start Now</Link></li>
          <li><Link to='/settings/'>Settings</Link></li>
          <li><Link to='/stats/'>Stats</Link></li>
        </ul>
=======
// import logo from './logo.svg';
// import './App.css';

// I should put an interface for this app???
=======
import { Link } from 'react-router-dom'
>>>>>>> dc510d6... ルーティングを導入

interface IState {
  userType: string,
  firstName: string,
  lastName: string,
  middleName: string,
  counter: number,
  salary: number
=======
  availableNotes[]: Array<string>
>>>>>>> e44cc5e... 音符の変数を用意
=======
  availableNotes: Array<string>
>>>>>>> 1c29a7d... speed項目追加し、音符を表示
}
interface IProps {}

export default class SplashPage extends React.Component<IProps, IState> {
  // make the below a constant
  // maybe make it so that there is an interface like:
  //    -Music note (a, b, c, etc)
  //    -Note type (natural, flat, sharp)
  notesList: Array<string> = [
    'Low B',
    'Low B♭',
    'Low C',
    'Low C♭',
    'Low C♯',
    'Low D',
    'Low D♭',
    'Low D♯',
    'Low E',
    'Low E♭',
    'Low E♯',
    'Low F',
    'Low F♭',
    'Low F♯',
    'G',
    'G♭',
    'G♯',
    'A',
    'A♭',
    'A♯',
    'B',
    'B♭',
    'B♯',
    'C',
    'C♭',
    'C♯',
    'D',
    'D♭',
    'D♯',
    'E',
    'E♭',
    'E♯',
    'F',
    'F♭',
    'F♯',
    'High A',
    'High A♭',
    'High A♯',
    'High B',
    'High B♭',
    'High B♯',
    'High C',
    'High C♭',
    'High C♯',
    'High D',
    'High D♭',
    'High D♯',
    'High E',
    'High E♭',
    'High E♯',
    'High F',
    'High F♭',
    'High F♯',
    'High G',
    'High G♭',
    'High G♯'
  ];

  constructor(props: any) {
    super(props);

    this.state = {
      availableNotes: this.notesList
    }
  }

  render() {
  console.log(this.state);
    return (
<<<<<<< HEAD
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>{this.state.middleName}</h1>
          <button id="pressMeButton" onClick={this.handleOnClick}>Counter</button>
          <p>Current: {this.state.counter}</p>
          <div>
          Hmmm:
          {
            this.showSomeJSX()
          }
          </div>
          <div>
          Hmmm2:
          {
            this.showSomeOddJSX()
          }
          </div>
        </header>
>>>>>>> 0761dbc... もっと色々整理してみた
=======
      <div>
        <div>
          Icon here
        </div>
        <h2>Title here</h2>
        <ul>
          <li><Link to={{
            pathname: '/music-notes/',
            state: {
              notesList: this.state.availableNotes,
              speed: 2
            }
          }}>Start Now</Link></li>
          <li><Link to='/settings/'>Settings</Link></li>
          <li><Link to='/stats/'>Stats</Link></li>
        </ul>
>>>>>>> dc510d6... ルーティングを導入
      </div>
    );
  }
}
