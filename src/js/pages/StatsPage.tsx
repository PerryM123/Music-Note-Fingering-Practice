import * as React from 'react';
import { Link } from 'react-router-dom'

interface IState {}
interface IProps {}

export default class StatsPage extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
<<<<<<< HEAD
<<<<<<< HEAD
=======
    // this.state = {
    //   userType: null,
    //   firstName: 'Whelp',
    //   lastName: 'delp',
    //   middleName: 'hawt',
    //   counter: 0,
    //   salary: null
    // };
>>>>>>> dc510d6... ルーティングを導入
=======
>>>>>>> e44cc5e... 音符の変数を用意
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
