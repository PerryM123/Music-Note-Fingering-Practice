import * as React from 'react';
import { Link } from 'react-router-dom'

interface IState {
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
      </div>
    );
  }
}