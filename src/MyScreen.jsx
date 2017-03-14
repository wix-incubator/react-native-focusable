import _ from 'lodash';
import React, { Component } from 'react';

import MyTextView from './MyTextView';

class MyScreen extends Component {
  render() {
    return (
      <MyTextView textToRender="Hello, World!" />
    );
  }
}

export default MyScreen;
