import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import colors from '../settings/colors';

function IconSearch({ color }) {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
      <g fill={color}>
        <path d="M10.8151363,3.67193326 C7.14357089,3.67276922 4.15582616,6.66218589 4.15415422,10.3362592 C4.15582616,14.0069887 7.14189895,16.9947334 10.8143004,16.9947334 C14.4875377,16.9947334 17.4769544,14.0069887 17.4769544,10.3345873 C17.4752824,6.66051395 14.4875377,3.67193326 10.8151363,3.67193326 Z M10.8143004,18.6666667 C6.22066373,18.6666667 2.4838929,14.9290599 2.48222097,10.3362592 C2.4838929,5.74011469 6.22066373,2.00083597 10.8151363,2 C15.4087729,2 19.1472157,5.73844276 19.1488876,10.3337513 C19.1488876,14.9290599 15.4104449,18.6666667 10.8143004,18.6666667 L10.8143004,18.6666667 Z" />
        <path d="M6.10289185,10.2175 L5.2830543,10.2175 C5.28469398,7.23037971 7.71387263,4.80083333 10.699721,4.80083333 L10.699721,5.62079498 C8.16560311,5.62079498 6.10453152,7.68299854 6.10289185,10.2175" />
        <path d="M21.1189359,21.9991192 C20.8943208,21.9991192 20.6688247,21.9127965 20.4961793,21.7410319 L15.5916408,16.8364934 C15.2472308,16.4929643 15.2472308,15.9353901 15.5916408,15.5909802 C15.9360507,15.2474511 16.492744,15.2474511 16.837154,15.5909802 L21.7416925,20.4955187 C22.0861025,20.8390478 22.0861025,21.396622 21.7416925,21.7410319 C21.569928,21.9127965 21.344432,21.9991192 21.1189359,21.9991192" />
      </g>
    </svg>
  );
}

IconSearch.propTypes = {
  color: PropTypes.string
};

IconSearch.defaultProps = {
  color: colors.icons
};

IconSearch.displayName = 'IconSearch';

export default pure(IconSearch);