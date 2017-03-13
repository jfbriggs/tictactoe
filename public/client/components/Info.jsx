import React from 'react';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>It's Player {this.props.turn}'s turn!</div>
    )
  }
}