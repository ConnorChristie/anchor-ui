import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import get from 'lodash/get';
import colors from '../settings/colors';

const themeable = options => ChildComponent => (
  class ThemeableComponent extends Component {
    static contextTypes = {
      theme: PropTypes.object
    }

    constructor(props, context) {
      super(props, context);

      this.state = {
        color: get(context, 'theme.color') || colors.theme
      };
    }

    componentDidMount() {
      const { theme } = this.context;

      if (theme) {
        this.unsubscribe = theme.subscribe(this.setColor);
      }
    }

    componentWillUnmount() {
      const { theme } = this.context;

      if (theme) {
        this.unsubscribe();
      }
    }

    setColor = color => this.setState({ color });

    render() {
      const propName = (options && options.propName) || 'color';
      const customPropName = { [propName]: this.state.color };
      const combinedProps = { ...customPropName, ...this.props };

      return <ChildComponent {...combinedProps} />;
    }
  }
);

export default themeable;
