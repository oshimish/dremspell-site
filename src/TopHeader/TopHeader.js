import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './TopHeader.css';

class TopHeader extends React.Component {
  // https://goo.gl/g1KBEL
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    // Chance to bind anything we need to.
    this.onClick = this.onClick.bind(this);
  }

  /**
   * Just a sample click event
   */
  onClick() {
    console.log('- onClick event', this.state);
  }

  render() {
    return (
      <div className="top-header">
        <ul className="menu">
          <li>
            <Link to="/">Кин</Link>
          </li>
          {/* <li>
            <Link to="/kin">Кин</Link>
          </li> */}
          <li>
            <Link to="/oracle">Оракул</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopHeader;
