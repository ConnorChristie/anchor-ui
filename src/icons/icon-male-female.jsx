import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const IconMaleFemale = ({ color, ...custom }) => (
  <svg height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <g fill={color} transform="translate(3 3)">
      <path d="m10.3824 3.8192c-.9936 0-1.9224.3816-2.6208 1.08s-1.08 1.6272-1.08 2.6136c0 .9936.3816 1.9224 1.08 2.6208s1.6272 1.08 2.6208 1.08c.9864 0 1.9152-.3816 2.6136-1.08s1.08-1.6272 1.08-2.6208c0-.9864-.3816-1.9152-1.08-2.6136s-1.6272-1.08-2.6136-1.08zm5.5728-.85953396-1.4708398 1.46737085c.6703372.88642696 1.0316398 1.95924146 1.0316398 3.08576311.0072 1.3752-.5328 2.664-1.5048 3.636-.9648.972-2.2608 1.5048-3.6288 1.5048-1.3752 0-2.664-.5328-3.636-1.5048-.972-.9648-1.5048-2.2608-1.5048-3.636 0-1.368.5328-2.6568 1.5048-3.6288s2.2608-1.5048 3.636-1.5048c1.1258964 0 2.2030223.36090167 3.0868763 1.03052394l1.4662577-1.46972394h-1.824334c-.396 0-.72-.3168-.72-.72 0-.396.324-.72.72-.72h3.564c.396 0 .72.324.72.72v3.564c0 .396-.324.72-.72.72-.4032 0-.72-.324-.72-.72z" />
      <path d="m5.8608 12.6041584v1.1366416h1.4328c.4032 0 .72.3168.72.72 0 .396-.3168.72-.72.72h-1.4328v1.4328c0 .396-.324.72-.72.72s-.72-.324-.72-.72v-1.4328h-1.4328c-.4032 0-.72-.324-.72-.72s.3168-.72.72-.72h1.4328v-1.1366416c-1.10099824-.1526758-2.11584218-.6552006-2.916-1.4553584-.972-.9648-1.5048-2.2608-1.5048-3.636 0-1.368.5328-2.6568 1.5048-3.6288s2.2608-1.5048 3.636-1.5048 2.664.5328 3.636 1.5048 1.5048 2.2608 1.5048 3.6288c0 1.3752-.5328 2.664-1.5048 3.636-.80015782.8001578-1.81500176 1.3026826-2.916 1.4553584zm-.72-8.7849584c-.9864 0-1.9152.3816-2.6136 1.08s-1.0872 1.6272-1.0872 2.6136c0 .9936.3888 1.9224 1.0872 2.6208s1.6272 1.08 2.6136 1.08 1.9152-.3816 2.6136-1.08 1.0872-1.6272 1.0872-2.6208c0-.9864-.3888-1.9152-1.0872-2.6136s-1.6272-1.08-2.6136-1.08z" />
    </g>
  </svg>
);

IconMaleFemale.propTypes = {
  color: PropTypes.string
};

IconMaleFemale.defaultProps = {
  color: colors.icons
};

IconMaleFemale.displayName = 'IconMaleFemale';

export default IconMaleFemale;