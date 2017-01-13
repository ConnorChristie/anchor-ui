import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import badgeStyleSheet from '../style/badges';
import getClassNames from '../internal/get-class-names';

class Badge extends Component {
  static propTypes = {
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.node
    ]).isRequired,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        badge: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    style: {}
  }

  static contextTypes = {
    color: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);

    const { sheet: { classes }, style } = props;
    const className = getClassNames(classes, style, 'badge', 'Badge');

    this.state = {
      className
    };
  }

  render() {
    const { content } = this.props;
    const { className } = this.state;
    const { color } = this.color;

    return (
      <span className={className} style={{ backgroundColor: color }}>{content}</span>
    );
  }
}

export default injectSheet(badgeStyleSheet)(Badge);
