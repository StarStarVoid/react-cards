import React, { Component } from 'react';

export default class Button extends Component {
  static propTypes = {
    classIdx: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,

    setActiveClass: React.PropTypes.func.isRequired,
    resetActiveClass: React.PropTypes.func.isRequired,
  }

  constructor() {
    super();

    this.setActiveClass = ::this.setActiveClass;
    this.resetActiveClass = ::this.resetActiveClass;
  }

  setActiveClass(e) {
    this.props.setActiveClass(e, this.props.classIdx);
  }

  resetActiveClass(e) {
    this.props.resetActiveClass(e);
  }

  render() {
    return (
      <button
        onClick={this.setActiveClass}
        onMouseEnter={this.setActiveClass}
        onMouseLeave={this.resetActiveClass}
      >
        {this.props.text}
      </button>
    );
  }
}
