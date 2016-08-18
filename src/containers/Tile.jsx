import React, { Component } from 'react';

export default class Tile extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    imgSrc: React.PropTypes.string.isRequired,
    caption: React.PropTypes.string.isRequired,
    isActive: React.PropTypes.bool.isRequired,
  };
  render() {
    const className = `tile${this.props.isActive ? ' active' : ''}`;

    return (
      <div className={className}>
        <div className="tile-title">
          <h2>{this.props.title}</h2>
        </div>
        <div className="tile-body">
          <img alt="" src={this.props.imgSrc} className="tile-img" />
          <div className="tile-caption">
            <p>{this.props.caption}</p>
          </div>
        </div>
      </div>
    );
  }
}
