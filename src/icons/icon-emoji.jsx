import React, { PropTypes } from 'react';
import colors from '../style/colors';

function IconEmoji({ color }) {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
      <g fill={color}>
        <path d="M11.9989638,3.6985138 C9.78170284,3.6985138 7.70036594,4.55626327 6.1287442,6.12738854 C4.55712245,7.69002123 3.69910193,9.77919321 3.69910193,11.9957537 C3.69910193,14.2123142 4.55712245,16.3014862 6.1287442,17.8726115 C7.69187069,19.4352442 9.78170284,20.3014862 11.9989638,20.3014862 C14.2162247,20.3014862 16.3060569,19.4352442 17.8776786,17.8641189 C21.1143699,14.6284501 21.1143699,9.36305732 17.8776786,6.12738854 C16.3060569,4.55626327 14.2162247,3.6985138 11.9989638,3.6985138 Z M11.9989638,22 C9.33145445,22 6.81685966,20.955414 4.92241832,19.0700637 C3.03647222,17.1847134 1.99155614,14.670913 2.0000514,11.9957537 C2.0000514,9.32908705 3.03647222,6.81528662 4.93091357,4.92144374 C6.81685966,3.03609342 9.33145445,2 11.9989638,2 C14.6749684,2 17.1895632,3.03609342 19.0755093,4.92144374 C22.9748302,8.82802548 22.9748302,15.1719745 19.0755093,19.0700637 C17.1895632,20.955414 14.6749684,22 11.9989638,22 L11.9989638,22 Z" />
        <path d="M7.55688785,16.3105356 C6.95051273,15.7041605 6.48778492,14.9958421 6.18580763,14.2234518 C6.11820855,14.0505485 6.23608201,13.77877 6.4383214,13.7089487 C6.63032425,13.6426614 6.9039672,13.769801 6.96214593,13.9191111 C7.22255869,14.5874351 7.62097629,15.199624 8.14022118,15.7188689 C9.13188785,16.7105356 10.4485545,17.2522022 11.8402212,17.2522022 C14.0700583,17.2522022 15.9809214,15.846723 16.7325574,13.8760175 C16.7965598,13.7082106 17.1498358,13.6037208 17.3478978,13.7089487 C17.5172552,13.7989261 17.5418815,14.0846822 17.5216537,14.1446041 C16.7325574,16.4821827 14.4346124,18.0855356 11.8402212,18.0855356 C10.2235545,18.0855356 8.69855452,17.4522022 7.55688785,16.3105356 Z" />
        <path d="M9.08333333,9.5 C8.39166667,9.5 7.83333333,10.0583333 7.83333333,10.75 C7.83333333,11.4416667 8.39166667,12 9.08333333,12 C9.76666667,12 10.3333333,11.4416667 10.3333333,10.75 C10.3333333,10.0583333 9.76666667,9.5 9.08333333,9.5" />
        <path d="M14.9166667,9.5 C14.225,9.5 13.6666667,10.0583333 13.6666667,10.75 C13.6666667,11.4416667 14.225,12 14.9166667,12 C15.6083333,12 16.1666667,11.4416667 16.1666667,10.75 C16.1666667,10.0583333 15.6083333,9.5 14.9166667,9.5" />
      </g>
    </svg>
  );
}

IconEmoji.propTypes = {
  color: PropTypes.string
};

IconEmoji.defaultProps = {
  color: colors.icons
};

export default IconEmoji;
