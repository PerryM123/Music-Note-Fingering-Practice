import * as React from 'react';
import { Link } from 'react-router-dom'
import * as History from 'history';
import { INote } from './../interfaces/INote'

interface IState {
  timerId: number,
  currentNote: string
}
interface IProps {
}
// does this actually work??
interface ILocationProps {
  location: History.Location
  notesList: Array<INote>,
  speed: number
}

export default class NotesPage extends React.Component<IProps & ILocationProps, IState> {
  constructor(props: any) {
    super(props);
    const notesList: Array<INote> = this.props.location.state.notesList.slice();
    let noteLength: number = this.props.location.state.notesList.length;
    let randNum: number = Math.floor(Math.random() * Math.floor(noteLength));
    this.state = {
        timerId: null,
        currentNote: notesList[randNum].name
    }
  }
  public componentDidMount() {
    const speed = this.props.location.state.speed;
    this.setState({
      timerId: window.setInterval(this.displayNote.bind(this), 1000 * speed)
    });
  }
  public componentWillUnmount(){
    window.clearInterval(this.state.timerId);
  }
  private displayNote = (): void => {
    const notesList: Array<INote> = this.props.location.state.notesList.slice();
    let noteLength: number = this.props.location.state.notesList.length;
    let randNum: number = Math.floor(Math.random() * Math.floor(noteLength));
    this.setState({
      currentNote: notesList[randNum].name
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
        <hr/>
        <button><Link to={`${process.env.ROOT_URL}/`}>Finish</Link></button>
      </div>
    );
  }
}
