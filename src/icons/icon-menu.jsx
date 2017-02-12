import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import { colors } from '../settings';

function IconMenu({ color }) {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
      <g fill={color}>
        <path d="M19.4763594,5.28857143 L4.17221198,5.28857143 C3.54530876,5.28857143 3.03857143,4.90285714 3.03857143,4.43142857 C3.03857143,3.95142857 3.54530876,3.57428571 4.17221198,3.57428571 L19.4763594,3.57428571 C20.1032627,3.57428571 20.61,3.95142857 20.61,4.43142857 C20.61,4.90285714 20.1032627,5.28857143 19.4763594,5.28857143" />
        <path d="M19.4763594,13.0028571 L4.17221198,13.0028571 C3.54530876,13.0028571 3.03857143,12.6171429 3.03857143,12.1457143 C3.03857143,11.6657143 3.54530876,11.2885714 4.17221198,11.2885714 L19.4763594,11.2885714 C20.1032627,11.2885714 20.61,11.6657143 20.61,12.1457143 C20.61,12.6171429 20.1032627,13.0028571 19.4763594,13.0028571" />
        <path d="M19.4763594,20.7171429 L4.17221198,20.7171429 C3.54530876,20.7171429 3.03857143,20.3314286 3.03857143,19.86 C3.03857143,19.38 3.54530876,19.0028571 4.17221198,19.0028571 L19.4763594,19.0028571 C20.1032627,19.0028571 20.61,19.38 20.61,19.86 C20.61,20.3314286 20.1032627,20.7171429 19.4763594,20.7171429" />
      </g>
    </svg>
  );
}

IconMenu.propTypes = {
  color: PropTypes.string
};

IconMenu.defaultProps = {
  color: colors.icons
};

IconMenu.displayName = 'IconMenu';

export default pure(IconMenu);
