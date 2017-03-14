import _ from 'lodash';
import React, { Component } from 'react';
import { Text } from 'react-native';

class MyTextView extends Component {
  render() {
    return (
      <Text>
        {this.props.textToRender}
      </Text>
    );
  }
}

export default MyTextView;
