import * as React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom'
import * as History from 'history';

interface IState {
  timerId: number,
  currentNote: string
}
interface IProps {
  location: History.Location
}

export default class NotesPage extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    const notesList: Array<string> = this.props.location.state.notesList.slice();
    let noteLength: number = this.props.location.state.notesList.length;
    let randNum: number = Math.floor(Math.random() * Math.floor(noteLength));

    this.state = {
        timerId: null,
        currentNote: notesList[randNum]
    }
  }
  public componentDidMount() {
    const speed = this.props.location.state.speed;
    this.setState({
      timerId: window.setInterval(this.displayNote.bind(this), 1000 * speed)
    });
    console.log('componentDidMount')
  }
  public componentWillUnmount(){
    window.clearInterval(this.state.timerId);
    console.log('componentWillUnmount')
  }
  private displayNote = (): void => {
    const notesList: Array<string> = this.props.location.state.notesList.slice();
    let noteLength: number = this.props.location.state.notesList.length;
    let randNum: number = Math.floor(Math.random() * Math.floor(noteLength));
    this.setState({
      currentNote: notesList[randNum]
    })
  }

  render() {
    const speed: number = this.props.location.state.speed;
    return (
      <div>
        <div className="displayArea">
          <h1>{this.state.currentNote}</h1>
          <p>Speed: {speed} </p>
        </div>
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

export default class NotesPage extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
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
        <div className="displayArea">
          <h1>B♭</h1>
        </div>
        <button><Link to='/'>Finish</Link></button>
      </div>
    );
  }
}
>>>>>>> dc510d6... ルーティングを導入
