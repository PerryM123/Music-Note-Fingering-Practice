import * as React from 'react';
import { Link } from 'react-router-dom'

interface IState {}
interface IProps {}

export default class StatsPage extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Stats here</h1>
        <button><Link to='/'>Finish</Link></button>
      </div>
    );
  }
}
