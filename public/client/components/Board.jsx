import React from 'react';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.selectCell = this.selectCell.bind(this);
  }

  selectCell(num) {
    console.log(num);
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td onClick={this.selectCell.bind(null, 1)}>{this.props.board['1']}</td>
            <td onClick={this.selectCell.bind(null, 2)}>{this.props.board['2']}</td>
            <td onClick={this.selectCell.bind(null, 3)}>{this.props.board['3']}</td>
          </tr>
          <tr>
            <td onClick={this.selectCell.bind(null, 4)}>{this.props.board['4']}</td>
            <td onClick={this.selectCell.bind(null, 5)}>{this.props.board['5']}</td>
            <td onClick={this.selectCell.bind(null, 6)}>{this.props.board['6']}</td>
          </tr>
          <tr>
            <td onClick={this.selectCell.bind(null, 7)}>{this.props.board['7']}</td>
            <td onClick={this.selectCell.bind(null, 8)}>{this.props.board['8']}</td>
            <td onClick={this.selectCell.bind(null, 9)}>{this.props.board['9']}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}