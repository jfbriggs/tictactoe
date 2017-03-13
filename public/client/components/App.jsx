import React from 'react';
import Board from './Board.jsx';
import Info from './Info.jsx';

export default class App extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.setState({
      turn: 1,
      board: {
        '1': 'X',
        '2': '',
        '3': '',
        '4': '',
        '5': '', 
        '6': '', 
        '7': '',
        '8': '',
        '9': ''
      }
    });
  }

  render() {
    return (
      <div className='app-container'>
        <div className='info-container'><Info turn={this.state.turn} /></div>
        <div className='board-container'><Board board={this.state.board} /></div>
      </div>
    )
  }
}