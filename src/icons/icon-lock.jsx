import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import colors from '../style/colors';

function IconLock({ color }) {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
      <g fill={color}>
        <path d="M4.82239995,20.029762 L19.2224,20.029762 L19.2224,11.496162 L4.82239995,11.496162 L4.82239995,20.029762 Z M19.2224,21.629762 L4.82239995,21.629762 C3.93919995,21.629762 3.22239995,20.912162 3.22239995,20.029762 L3.22239995,11.496162 C3.22239995,10.613762 3.93919995,9.89616195 4.82239995,9.89616195 L19.2224,9.89616195 C20.1032,9.89616195 20.8224,10.613762 20.8224,11.496162 L20.8224,20.029762 C20.8224,20.912162 20.1032,21.629762 19.2224,21.629762 L19.2224,21.629762 Z" />
        <path d="M17.1552,11.299362 C16.7128,11.299362 16.3552,10.940962 16.3552,10.499362 L16.3552,8.29696195 C16.3552,5.90736195 14.4112,3.96336195 12.0224,3.96336195 C9.63199995,3.96336195 7.68799995,5.90736195 7.68799995,8.29696195 L7.68799995,10.499362 C7.68799995,10.940962 7.33039995,11.299362 6.88799995,11.299362 C6.44559995,11.299362 6.08799995,10.940962 6.08799995,10.499362 L6.08799995,8.29696195 C6.08799995,5.02496195 8.75039995,2.36336195 12.0224,2.36336195 C15.2928,2.36336195 17.9552,5.02496195 17.9552,8.29696195 L17.9552,10.499362 C17.9552,10.940962 17.5976,11.299362 17.1552,11.299362" />
        <path d="M12.0224,13.033762 C11.1,13.033762 10.3552,13.779362 10.3552,14.700162 C10.3552,15.328962 10.7064,15.870562 11.2208,16.153762 L11.2208,18.030562 L12.8208,18.030562 L12.8208,16.154562 C13.336,15.871362 13.688,15.329762 13.688,14.700162 C13.688,13.779362 12.9424,13.033762 12.0224,13.033762" />
      </g>
    </svg>
  );
}

IconLock.propTypes = {
  color: PropTypes.string
};

IconLock.defaultProps = {
  color: colors.icons
};

export default pure(IconLock);
