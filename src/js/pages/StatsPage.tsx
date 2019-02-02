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
        <p>How many times opened?<b>5 times</b></p>
        <p>Install date?<b>2019/1/22</b></p>
        <hr/>
        <button><Link to={`${process.env.ROOT_URL}/`}>Finish</Link></button>
      </div>
    );
  }
}
