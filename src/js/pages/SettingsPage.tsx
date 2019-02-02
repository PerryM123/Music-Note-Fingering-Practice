import * as React from 'react';
import { Link } from 'react-router-dom'
import * as History from 'history';
import { INote } from './../interfaces/INote'

interface IState {}
interface IProps {}

// does this actually work??
interface ILocationProps {
  location: History.Location
  notesList: Array<INote>,
}

export default class SettingsPage extends React.Component<IProps & ILocationProps, IState> {
  constructor(props: any) {
    super(props);
  }

  musicNotesListDom(): JSX.Element {
    return this.props.location.state.notesList.map((noteIndex: INote, noteKey: number) => {
      return <li key={noteKey}><button>{noteIndex.name}</button></li>
    });
  }

  render() {
    return (
      <div>
        <h1>Settings here</h1>
        <ul>
          {this.musicNotesListDom()}
        </ul>
        <hr/>
        <button><Link to={`${process.env.ROOT_URL}/`}>Finish</Link></button>
      </div>
    );
  }
}
