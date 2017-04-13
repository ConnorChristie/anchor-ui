import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import pure from 'recompose/pure';
import find from 'lodash/find';
import styles from './styles';
import getStyles from './get-styles';
import IconChevronDown from '../icons/icon-chevron-down';
import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';
import PopOver from '../pop-over';
import getPopOverPosition from '../internal/get-pop-over-position';

class Select extends Component {
  static displayName = 'Select'

  static propTypes = {
    /** The Selects content (MenuItem), each child must have a value prop */
    children: PropTypes.node.isRequired,
    /** The Selects value */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Change the Selects value */
    onChange: PropTypes.func.isRequired,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the header element */
    headerStyle: PropTypes.instanceOf(Object),
    /** The Selects label */
    label: PropTypes.node,
    /** Override the styles of the label element */
    labelStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the content container */
    contentStyle: PropTypes.instanceOf(Object),
    /** The Selects placeholder */
    placeholder: PropTypes.string
  }

  static defaultProps = {
    value: '',
    label: null,
    style: {},
    headerStyle: {},
    labelStyle: {},
    contentStyle: {},
    placeholder: ''
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor() {
    super();

    this.state = {
      open: false,
      positioned: false,
      popOverWidth: '200px'
    };

    this.toggleSelect = this.toggleSelect.bind(this);
    this.positionPopOver = this.positionPopOver.bind(this);
  }

  componentDidUpdate() {
    const { open, positioned } = this.state;

    if (open && !positioned) {
      this.positionPopOver();
    }
  }

  positionPopOver() {
    const button = this.button.getBoundingClientRect();
    const popOver = this.popOver.getBoundingClientRect();
    const container = this.container.getBoundingClientRect();

    this.setState({
      positioned: true,
      position: getPopOverPosition(button, popOver, 'select'),
      popOverWidth: `${container.width}px`
    });
  }

  toggleSelect() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open, position, popOverWidth } = this.state;
    const {
      children,
      value,
      onChange,
      label,
      style,
      headerStyle,
      labelStyle,
      contentStyle,
      placeholder,
      ...custom
    } = this.props;
    const { color } = this.context;

    const childrenWithProps = React.Children.map(
      children, child => React.cloneElement(
        child,
        {
          closeMenu: this.toggleSelect,
          active: child.props.value === value,
          onClick: () => onChange(child.props.value)
        }
      )
    );

    const activeChild = find(childrenWithProps, child => child.props.value === value);

    const headerText = (
      (activeChild && activeChild.props && activeChild.props.text) || value || placeholder
    );

    return (
      <section
        ref={container => (this.container = container)}
        style={combineStyles(styles.container, style)}
        {...custom}
      >
        <span style={combineStyles(styles.label, labelStyle)}>{label}</span>
        {open ? <div style={styles.clickAway} onClick={this.toggleSelect} /> : null}
        <header
          ref={button => (this.button = button)}
          style={getStyles.header(color, headerStyle)}
          onClick={this.toggleSelect}
        >
          {headerText}
          <div style={getStyles.icon(open, {})}>
            <IconChevronDown color={colors.white} />
          </div>
        </header>
        <PopOver
          style={combineStyles({ minWidth: popOverWidth }, contentStyle)}
          open={open}
          popOverRef={popOver => (this.popOver = popOver)}
          position={position}
        >
          {childrenWithProps}
        </PopOver>
      </section>
    );
  }
}

export default pure(Radium(Select));
