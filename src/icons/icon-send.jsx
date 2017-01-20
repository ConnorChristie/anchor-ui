import React, { PropTypes } from 'react';
import colors from '../style/colors';

function IconSend({ color }) {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
      <g fill={color}>
        <path d="M1.16403135,8.70185611 L7.13478779,12.3552284 C7.25567143,12.4295494 7.35685552,12.531629 7.43028114,12.6516172 L11.0818625,18.6196873 L15.8527369,3.93187717 L1.16403135,8.70185611 Z M11.3325842,21.6408829 C11.0227639,21.6408829 10.7326431,21.4806001 10.5696741,21.2128653 L6.01549482,13.7700147 L-1.42914662,9.21494001 C-1.72643083,9.0322714 -1.89298162,8.69290177 -1.85089621,8.34547323 C-1.81060166,7.99894012 -1.57152068,7.70702852 -1.23931453,7.59868096 L16.970239,1.68612775 C17.2908045,1.58225736 17.6418148,1.66642819 17.8800003,1.90461374 C18.1181859,2.14279928 18.2032522,2.49380956 18.0984863,2.81437507 L12.1841423,21.0221377 C12.0757947,21.3543439 11.7847785,21.5934249 11.43735,21.6346149 L11.3325842,21.6408829 L11.3325842,21.6408829 Z" id="Fill-1411" transform="translate(8.142655, 11.641617) rotate(-315) translate(-8.142655, -11.641617) " />
        <path d="M7.72089844,17.4224251 C7.36715473,17.0696053 7.09225052,16.7372045 7.44599423,16.38348 L18.1361111,5.69303874 C18.4898548,5.33931423 19.061635,5.33931423 19.4153787,5.69303874 C19.7691224,6.04676325 19.7691224,6.61851233 19.4153787,6.97223684 L8.72526178,17.6626781 C8.54793756,17.8399927 8.31633043,17.9277454 8.085628,17.9277454 C7.85402087,17.9277454 7.89731794,17.5997397 7.72089844,17.4224251 Z" id="Fill-1412" transform="translate(13.481046, 11.677745) rotate(-315) translate(-13.481046, -11.677745) " />
      </g>
    </svg>
  );
}

IconSend.propTypes = {
  color: PropTypes.string
};

IconSend.defaultProps = {
  color: colors.icons
};

export default IconSend;
