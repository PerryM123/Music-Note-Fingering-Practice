import * as React from 'react';
import { Link } from 'react-router-dom'
import { INote } from './../interfaces/INote'
interface IState {
  availableNotes: Array<INote>
}

interface IProps {}

export default class SplashPage extends React.Component<IProps, IState> {
  // make the below a constant
  // maybe make it so that there is an interface like:
  //    -Music note (a, b, c, etc)
  //    -Note type (natural, flat, sharp)
  notesList: Array<INote> = [
    {
      name: 'Low B',
      isOn: true
    },
    {
      name: 'Low B♭',
      isOn: true
    },
    {
      name: 'Low C',
      isOn: true
    },
    {
      name: 'Low C♭',
      isOn: true
    },
    {
      name: 'Low C♯',
      isOn: true
    },
    {
      name: 'Low D',
      isOn: true
    },
    {
      name: 'Low D♭',
      isOn: true
    },
    {
      name: 'Low D♯',
      isOn: true
    },
    {
      name: 'Low E',
      isOn: true
    },
    {
      name: 'Low E♭',
      isOn: true
    },
    {
      name: 'Low E♯',
      isOn: true
    },
    {
      name: 'Low F',
      isOn: true
    },
    {
      name: 'Low F♭',
      isOn: true
    },
    {
      name: 'Low F♯',
      isOn: true
    },
    {
      name: 'G',
      isOn: true
    },
    {
      name: 'G♭',
      isOn: true
    },
    {
      name: 'G♯',
      isOn: true
    },
    {
      name: 'A',
      isOn: true
    },
    {
      name: 'A♭',
      isOn: true
    },
    {
      name: 'A♯',
      isOn: true
    },
    {
      name: 'B',
      isOn: true
    },
    {
      name: 'B♭',
      isOn: true
    },
    {
      name: 'B♯',
      isOn: true
    },
    {
      name: 'C',
      isOn: true
    },
    {
      name: 'C♭',
      isOn: true
    },
    {
      name: 'C♯',
      isOn: true
    },
    {
      name: 'D',
      isOn: true
    },
    {
      name: 'D♭',
      isOn: true
    },
    {
      name: 'D♯',
      isOn: true
    },
    {
      name: 'E',
      isOn: true
    },
    {
      name: 'E♭',
      isOn: true
    },
    {
      name: 'E♯',
      isOn: true
    },
    {
      name: 'F',
      isOn: true
    },
    {
      name: 'F♭',
      isOn: true
    },
    {
      name: 'F♯',
      isOn: true
    },
    {
      name: 'High A',
      isOn: true
    },
    {
      name: 'High A♭',
      isOn: true
    },
    {
      name: 'High A♯',
      isOn: true
    },
    {
      name: 'High B',
      isOn: true
    },
    {
      name: 'High B♭',
      isOn: true
    },
    {
      name: 'High B♯',
      isOn: true
    },
    {
      name: 'High C',
      isOn: true
    },
    {
      name: 'High C♭',
      isOn: true
    },
    {
      name: 'High C♯',
      isOn: true
    },
    {
      name: 'High D',
      isOn: true
    },
    {
      name: 'High D♭',
      isOn: true
    },
    {
      name: 'High D♯',
      isOn: true
    },
    {
      name: 'High E',
      isOn: true
    },
    {
      name: 'High E♭',
      isOn: true
    },
    {
      name: 'High E♯',
      isOn: true
    },
    {
      name: 'High F',
      isOn: true
    },
    {
      name: 'High F♭',
      isOn: true
    },
    {
      name: 'High F♯',
      isOn: true
    },
    {
      name: 'High G',
      isOn: true
    },
    {
      name: 'High G♭',
      isOn: true
    },
    {
      name: 'High G♯',
      isOn: true
    }
  ];

  constructor(props: any) {
    super(props);

    this.state = {
      availableNotes: this.notesList
    }

    console.log(this.notesList);
  }

  render() {
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
          <li><Link to={{
            pathname: '/settings/',
            state: {
              notesList: this.state.availableNotes
            }
          }}>Settings</Link></li>
          <li><Link to='/stats/'>Stats</Link></li>
        </ul>
      </div>
    );
  }
}
