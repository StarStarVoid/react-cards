import React, { Component } from 'react';

import { Tile } from 'containers';

export default class Screen extends Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
  };

  constructor() {
    super();

    this.state = {
      active: '',
      activeLocked: false,
    };

    this.setActiveClass = ::this.setActiveClass;
    this.resetActiveClass = ::this.resetActiveClass;
  }

  componentWillMount() {
    this.getClasses(this.props.data);
  }

  componentWillReceiveProps(nextProps) {
    this.getClasses(nextProps.data);
  }

  getClasses(data) {
    const classes = data
      .reduce((_classes, d) => {
        d.classes.forEach((c) => {
          if (_classes.includes(c)) {
            return;
          }

          _classes.push(c);
        });

        return _classes;
      }, []);

    this.setState({ classes });
  }

  setActiveClass(e, classIdx) {
    switch (e.type) {
      case 'mouseenter':
        if (this.state.activeLocked) {
          return;
        }

        this.setState({
          active: this.state.classes[classIdx],
        });
        break;

      case 'click':
        this.setState({
          active: this.state.classes[classIdx],
          activeLocked: true,
        });
        break;

      default:
    }
  }

  resetActiveClass(e) {
    switch (e.type) {
      case 'mouseleave':
        if (this.state.activeLocked) {
          return;
        }

        this.setState({
          active: '',
        });
        break;

      case 'click':
        this.setState({
          active: '',
          activeLocked: false,
        });
        break;

      default:
    }
  }

  isTileActive(dataIdx) {
    if (this.state.active === '') {
      return true;
    }

    if (this.props.data[dataIdx].classes.includes(this.state.active)) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <div>
        <h1>Home</h1>

        {this.props.data.map((d, i) => (
          <Tile
            key={i}
            title={d.title}
            imgSrc={d.imgSrc}
            caption={d.caption}
            isActive={this.isTileActive(i)}
          />
        ))}

        {this.state.classes.map((c, i) => (
          <button
            key={i}
            onClick={(e) => this.setActiveClass(e, i)}
            onMouseEnter={(e) => this.setActiveClass(e, i)}
            onMouseLeave={(e) => this.resetActiveClass(e)}
          >
            {c}
          </button>
        ))}

        <button
          disabled={!this.state.activeLocked}
          onClick={this.resetActiveClass}
        >
          Reset
        </button>
      </div>
    );
  }
}
