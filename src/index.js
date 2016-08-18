/* global document */

import React, { Component } from 'react';
import { render } from 'react-dom';

import { Screen } from 'containers';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          title: 'title',
          imgSrc: 'imgSrc',
          caption: 'caption',
          classes: ['qwe'],
        },
        {
          title: 'title',
          imgSrc: 'imgSrc',
          caption: 'caption',
          classes: ['asd', 'zxc'],
        },
        {
          title: 'title',
          imgSrc: 'imgSrc',
          caption: 'caption',
          classes: ['qwe', 'zxc'],
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Screen data={this.state.data} />
      </div>
    );
  }
}

render(<Home />, document.querySelector('#react-root'));
