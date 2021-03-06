/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Profile from '../../src/profile/component';
import Avatar from '../../src/avatar';
import getStyles from '../../src/profile/get-styles';

chai.use(sinonChai);

describe('Profile', () => {
  const props = {
    header: 'header',
    secondaryText: '',
    avatar: '',
    coverImage: '',
    button: <button>text</button>, // eslint-disable-line react/button-has-type
    style: { root: true },
    headerStyle: { header: true },
    secondaryTextStyle: { secondaryText: true },
    avatarStyle: { avatar: true },
    status: ''
  };
  const children = <p>children</p>;
  const coverBackground = {
    backgroundImage: 'url()'
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render three section elements', () => {
    const wrapper = shallow(<Profile {...props} />);

    expect(wrapper.find('section')).to.have.length(3);
  });

  it('should always render a h1 element', () => {
    const wrapper = shallow(<Profile {...props} />);

    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should pass the value of the header prop to the h1 element', () => {
    const wrapper = shallow(<Profile {...props} />);

    expect(wrapper.containsMatchingElement(<h1>header</h1>)).to.equal(true);
  });

  it('should always render the value of the button prop', () => {
    const wrapper = shallow(<Profile {...props} />);

    expect(wrapper.find('button')).to.have.length(1);
    expect(wrapper.containsMatchingElement(<button>text</button>)).to.equal(true); // eslint-disable-line react/button-has-type
  });

  it('should always render the value of the children prop', () => {
    const wrapper = shallow(<Profile {...props}>{children}</Profile>);

    expect(wrapper.contains(children)).to.equal(true);
  });

  it('should render a p element if the secondaryText prop is passed', () => {
    let wrapper = shallow(<Profile {...props} />);

    expect(wrapper.find('p')).to.have.length(0);

    props.secondaryText = 'text';
    wrapper = shallow(<Profile {...props} />);

    expect(wrapper.find('p')).to.have.length(1);
    expect(wrapper.containsMatchingElement(<p>text</p>)).to.equal(true);
    props.secondaryText = '';
  });

  it('should not render an Avatar component if the avatar prop is not passed', () => {
    const wrapper = shallow(<Profile {...props} />);

    expect(wrapper.find(Avatar)).to.have.length(0);
  });

  it('should render an Avatar component if the avatar prop is passed', () => {
    props.avatar = 'imageurl';
    const wrapper = shallow(<Profile {...props} />);

    expect(wrapper.find(Avatar)).to.have.length(1);
    props.avatar = '';
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Profile {...props} />);
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get coverImage styles', () => {
    const spy = sinon.spy(getStyles, 'coverImage');

    shallow(<Profile {...props} />);
    expect(spy).to.have.been.calledWith(coverBackground);
  });

  it('should get header styles', () => {
    const spy = sinon.spy(getStyles, 'header');

    shallow(<Profile {...props} />);
    expect(spy).to.have.been.calledWith(props.headerStyle);
  });

  it('should get secondaryText styles', () => {
    props.secondaryText = 'text';
    const spy = sinon.spy(getStyles, 'secondaryText');

    shallow(<Profile {...props} />);
    expect(spy).to.have.been.calledWith(props.secondaryTextStyle);
    props.secondaryText = '';
  });
});
