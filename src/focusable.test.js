import _ from 'lodash';
import React, { Component } from 'react';
import renderer from 'react-test-renderer';

describe('focusable', () => {
  let MyScreen;

  beforeEach(() => {
    MyScreen = require('./MyScreen').default;
  });

  it('just works', () => {
    const tree = renderer.create(<MyScreen />);
    expect(tree.toJSON().children).toEqual(['Hello, World!']);
  });
});
