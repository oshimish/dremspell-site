// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import * as g from 'dreamspell-math';

// Internal
import './styles.css';

function importAll(r) {
  let images = {};
  r
    .keys()
    .map((item, index) => images[item.replace('./', '')] = r(item));
  return images;
}

const tones = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

// Setup
class SignTone extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let tone = g.tone(this.props.tone);
    let num = tone.number;
    return (
      <div className="sign-tone">
        <img src={tones['tone' + num + '.png']} alt={'Tone ' + num}></img>
      </div>
    );
  }
}

// Enforce required properies or methods
SignTone.propTypes = {
  tone: PropTypes
    .oneOfType([
      PropTypes.number, PropTypes.instanceOf(g.Tone)
    ])
    .isRequired
};

export default SignTone;
