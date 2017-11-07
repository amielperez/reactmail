import React from 'react';

export default class HelloWorld extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        Hello {this.props.name}!
      </div>
    );
  }
}
